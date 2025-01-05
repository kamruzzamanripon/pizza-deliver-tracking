<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PizzaResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'size' => $this->size,
            'crust' => $this->crust,
            'toppings' => $this->toppings,
            'price' => $this->price,
            'image' => $this->image,
            //'image' => $this->image ? Storage::url($this->image) : null,
        ];
    }
}
