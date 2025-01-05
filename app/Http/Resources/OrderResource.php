<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource {
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray( Request $request ): array {
        return [
            "order_id"     => $this->id,
            "user_name"    => $this->name,
            "address"      => $this->address,
            "pizza_name"   => $this->pizza_name,
            "size"         => $this->size,
            "quantity"     => $this->quantity,
            "crust"        => $this->crust,
            "pizza_price"  => $this->pizza_price,
            "total_price"  => $this->total_price,
            "toppings"     => $this->toppings,
            "status"       => $this->status,
            "user_serial"  => $this->user_serial,
            "payment_type" => $this->payment_type,
            "order_date" => $this->order_date,
            "order_status_url" => route('public.pizzas.show', $this->id),
            "pizza_iamge"     => $this->pizza->image,
            //"pizza_iamge"     => $this->pizza->image ? Storage::url($this->pizza->image) : null,
           
        ];
    }
}
