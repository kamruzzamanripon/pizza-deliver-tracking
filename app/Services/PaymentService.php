<?php

namespace App\Services;

use App\Events\PaymentSuccessful;
use App\Models\Order;
use App\Models\Transaction;
use Exception;
use Illuminate\Support\Str;

class PaymentService {

    public function paymentByCash( $request, $pizzaInfo ) {

        try {

            $orderInfo = $this->CreateOrder( $request, $pizzaInfo );

            $transaction = Transaction::create( [
                'payment_type'      => $orderInfo->payment_type,
                'oredr_id'          => $orderInfo->id,
                'user_serial'       => $orderInfo->user_serial,
                'stripe_session_id' => null,
                'status'            => "paid",
            ] );
            
            
            
            return [
                'orderInfo'   => $orderInfo,
                'transaction' => $transaction,
            ];

        } catch ( Exception $e ) {
            echo 'and the error is: ', $e->getMessage(), "\n";
        }
    }

    public function CreateOrder( $request, $pizzaInfo ) {
        $quantity = $request->quantity ?? 1;
        return Order::create( [
            'size'         => $request->size,
            'crust'        => $request->crust,
            'toppings'     => json_encode( $request->toppings ),
            'name'         => $request->name,
            'address'      => $request->address,
            'email'        => $request->email,
            'mobile'       => $request->mobile,
            'quantity'     => $quantity,
            'payment_type' => $request->payment_type,
            'status'       => "Ordered",
            'user_serial'  => Str::uuid(),
            'pizza_id'     => $pizzaInfo->id,
            'pizza_name'   => $pizzaInfo->name,
            'pizza_price'  => $pizzaInfo->price,
            'total_price'  => ( $pizzaInfo->price * $quantity ) + 10,
        ] );
    }
}