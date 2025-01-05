<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'size',
        'crust',
        'toppings',
        'price',
        'image',
    ];

    protected $appends = [
        'last_updated',
    ];

    protected $casts = [
        'crust' => 'array',
        'size' => 'array',
        'toppings' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

   
    public function getLastUpdatedAttribute(): string
    {
        return $this->updated_at->diffForHumans();
    }

    
}
