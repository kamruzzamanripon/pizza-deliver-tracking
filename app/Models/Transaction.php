<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_type',
        'oredr_id',
        'user_serial',
        'stripe_session_id',
        'status',
        
    ];
}
