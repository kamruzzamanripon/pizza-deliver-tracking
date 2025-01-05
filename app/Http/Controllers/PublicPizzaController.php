<?php

namespace App\Http\Controllers;

use App\Events\PaymentSuccessful;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\PizzaResource;
use App\Http\Resources\TransactionResource;
use App\Mail\ConfirmationOrderMail;
use App\Models\Notification;
use App\Models\Order;
use App\Models\Pizza;
use App\Services\PaymentService;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PublicPizzaController extends Controller {
    public function __construct( public PaymentService $paymentService ) {

    }
    public function index(): Response {
        $pizzas = Pizza::latest()->get();
        $convertedPizzaData = PizzaResource::collection( $pizzas );
        return Inertia::render( 'Welcome', [
            'pizzas' => $convertedPizzaData,
        ] );
    }

    public function buyPizza( Pizza $pizza ): Response {

        $convertedPizzaData = new PizzaResource($pizza);

        return Inertia::render( 'Pizzas/Buy', [
            'pizza' => $convertedPizzaData,
        ] );
    }

    public function show( Order $order ): Response {

        $convertedOrderData = new OrderResource($order);

        return Inertia::render( 'Pizzas/Show', [
            'pizza' => $convertedOrderData,
        ] );
    }

    public function buyPizzaByCash( OrderRequest $request ) {

        $pizzaInfo = Pizza::findOrFail( $request->pizzaId );

        if ( $pizzaInfo ) {
            $data = $this->paymentService->paymentByCash( $request, $pizzaInfo );
           
            $convertOrderData = new OrderResource( $data['orderInfo'] );
            $convertTransactionData = new TransactionResource( $data['transaction'] );
           
            $notificationData=[
                'order_id'    => $data['orderInfo']['id'],
                'quantity'    => $data['orderInfo']['quantity'],
                'total_price' => $data['orderInfo']['total_price'],
            ];
            //For Event
            PaymentSuccessful::dispatch( $notificationData );
            //For Notification
            Notification::create( [
                'data' => json_encode( $notificationData ),
            ] );
            //For Mail
            //dd($data['orderInfo']['email']);
            Mail::to($data['orderInfo']['email'])->send(new ConfirmationOrderMail($data['orderInfo']));

            return redirect()->route( 'home' )->with( [
                'success'   => 'Your order was successfully created',
                'orderInfo' => [
                    'order'       => $convertOrderData,
                    'transaction' => $convertTransactionData,
                ],
            ] );
        } else {
            $data = "There is some problem, Please Try Again";
            return redirect()->route( 'home' )->with( 'error', $data );
        }

    }
}