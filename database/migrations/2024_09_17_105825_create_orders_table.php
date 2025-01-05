<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pizza_id');
            $table->string('name');
            $table->string('address');
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('user_serial');
            $table->enum('payment_type',['cash', 'stripe']);
            $table->enum('status',['Ordered', 'Prepping', 'Baking', 'Checking','Ready']);
            $table->string('pizza_name');
            $table->string('size');
            $table->string('crust');
            $table->json('toppings');
            $table->integer('quantity')->default(1);
            $table->decimal('pizza_price', 10, 2);
            $table->decimal('other_charge', 10, 2)->nullable();
            $table->decimal('total_price', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
