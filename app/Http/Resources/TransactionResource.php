<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            "payment_type" => $this->payment_type,
            "oredr_id" => $this->oredr_id,
            "user_serial" => $this->user_serial,
            "stripe_session_id" => $this->stripe_session_id,
            "status" => $this->status,
        ];
    }
}
