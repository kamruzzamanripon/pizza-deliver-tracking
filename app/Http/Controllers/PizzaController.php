<?php

namespace App\Http\Controllers;

use App\Events\PizzaOrderStatusEvent;
use App\Http\Requests\PizzaCreateRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\PizzaResource;
use App\Mail\OrderReadyForDeliver;
use App\Models\Notification;
use App\Models\Order;
use App\Models\Pizza;
use App\Services\OrderService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller {

    public function __construct( Public OrderService $orderService ) {

    }

    public function index(): Response {
        $pizzaList = Pizza::latest()->paginate();
        $newOrderListCount = $this->orderService->getOrderListCount();
        $doneOrderListCount = $this->orderService->completeOrderList()->count();
        $convertedPizzaListData = PizzaResource::collection($pizzaList);
        // dd($newOrderList);
        return Inertia::render( 'Dashboard', [
            'newOrderListCount'  => $newOrderListCount,
            'doneOrderListCount' => $doneOrderListCount,
            'pizzaList'          => $convertedPizzaListData,
        ] );
    }

    public function getOrderList(): Response {
        $getOrderList = $this->orderService->getOrderList();
        $convertedGetOrderList = OrderResource::collection( $getOrderList );

        return Inertia::render( 'Pizzas/OrderList', [
            'orderList' => $convertedGetOrderList,
        ] );

    }

    public function preppingOrderList(): Response {
        $preppingOrderList = $this->orderService->preppingOrderList();
        $convertedPreppingOrderList = OrderResource::collection( $preppingOrderList );

        return Inertia::render( 'Pizzas/OrderList', [
            'orderList' => $convertedPreppingOrderList,
        ] );
    }

    public function bakingOrderList(): Response {
        $bakingOrderList = $this->orderService->bakingOrderList();
        $convertedBakingOrderList = OrderResource::collection( $bakingOrderList );

        return Inertia::render( 'Pizzas/OrderList', [
            'orderList' => $convertedBakingOrderList,
        ] );
    }

    public function checkingOrderList(): Response {
        $checkingOrderList = $this->orderService->checkingOrderList();
        $convertedCheckingOrderList = OrderResource::collection( $checkingOrderList );

        return Inertia::render( 'Pizzas/OrderList', [
            'orderList' => $convertedCheckingOrderList,
        ] );
    }

    public function completeOrderList(): Response {
        $completeOrderList = $this->orderService->completeOrderList();
        $convertedCompleteOrderList = OrderResource::collection( $completeOrderList );

        return Inertia::render( 'Pizzas/OrderList', [
            'orderList' => $convertedCompleteOrderList,
        ] );

    }

    public function editOrderStatus( Order $order, Request $request ): Response {
        $notificationStatus = $request->notificationStatus;

        if($notificationStatus){
            $notifications = Notification::whereNull( 'read' )->get();
      
            foreach ( $notifications as $notification ) {
                $notificationData = json_decode( $notification->data, true ); // Decode the JSON data
                // Check if the order_id matches
                if ( isset( $notificationData['order_id'] ) && $notificationData['order_id'] == $order->id ) {
                    // Update the 'read' column to 1
                    $notification->update( ['read' => 1] );
                }
            }
        }

        $convertedOrderData = new OrderResource( $order );
        return Inertia::render( 'Pizzas/Edit', [
            'order' => $convertedOrderData,
        ] );
    }

    public function updateOrderStatus( Order $order, Request $request ): RedirectResponse {
        
        $order->update( [
            'status' => $request->status,
        ] );


        PizzaOrderStatusEvent::dispatch($order);

        if($request->status == "Ready"){
            //$toMail = "rkamruzzaman@gmail.com";
            Mail::to($order->email)->send(new OrderReadyForDeliver($order));
            //Mail::to($toMail)->send(new OrderReadyForDeliver($order));
        }
       
        return redirect()->route( 'pizzas.getOrderList' )->with( 'success', 'Order Status changed successfully' );
    }

    public function pizzaCreate(): Response {
        return Inertia::render( 'Pizzas/PizzaCreate' );
    }

    public function pizzaStore( PizzaCreateRequest $request ): RedirectResponse {
        // Validate the incoming request data
        $validatedData = $request->validated();

        // Handle image upload if present
        if ( $request->hasFile( 'image' ) ) {
            $image = $request->file( 'image' );
            $imagePath = $image->store( 'pizzas', 'public' );
            $validatedData['image'] = $imagePath;
        }

        // Store the new pizza in the database
        Pizza::create( $validatedData );

        // Redirect or return response after storing
        return redirect()->route( 'dashboard' )
            ->with( 'success', 'Pizza created successfully!' );

    }

    public function markAllNotification(): RedirectResponse
    {
        Notification::whereNull('read')->update(['read' => 1]);

        return redirect()->back()->with( 'success', 'Notification Marked successfully' );

    }

}
