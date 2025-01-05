<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Pagination\LengthAwarePaginator;

class OrderService {

    public function getOrderList(): LengthAwarePaginator {
        return Order::where( 'status', 'Ordered' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->with('pizza')
            //->latest()
            ->paginate(3);
    }

    public function preppingOrderList(): LengthAwarePaginator {
        return Order::where( 'status', 'Prepping' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->paginate(3);
    }
    
    public function bakingOrderList(): LengthAwarePaginator {
        return Order::where( 'status', 'Baking' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->paginate(3);
    }
    
    public function checkingOrderList(): LengthAwarePaginator {
        return Order::where( 'status', 'Checking' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->paginate(3);
    }

    public function completeOrderList(): LengthAwarePaginator {
        return Order::where( 'status', 'Ready' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->paginate(3);
    }

    public function getOrderListCount(): int {
        return Order::where('status', 'Ordered')
            ->whereDate('created_at', now()->toDateString())
            ->count();
    }

    public function completeOrderListCount(): int {
        return Order::where( 'status', 'Ready' )
            ->whereDate( 'created_at', now()->toDateString() )
            ->count();
    }

}