<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'user_serial',
        'payment_type',
        'status',
        'pizza_name',
        'size',
        'crust',
        'toppings',
        'pizza_price',
        'total_price',
        'quantity',
        'pizza_id',
        'email',
        'mobile',
    ];

    protected $appends = [
        'order_date',
    ];

    protected $casts = [
       'toppings' => 'array',
    ];

    public function getOrderDateAttribute(): string
    {
        //return $this->created_at->diffForHumans();
        return $this->created_at->format('d, F Y');
    }

    public function pizza(): BelongsTo
    {
       return $this->belongsTo(Pizza::class);
    }
}
