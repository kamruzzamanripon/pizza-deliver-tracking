<?php

use App\Http\Controllers\PizzaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicPizzaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PublicPizzaController::class, 'index'])->name('home');
Route::get('/buy-pizza/{pizza}', [PublicPizzaController::class, 'buyPizza'])->name('buyPizza');
Route::post('/buy-pizza/by-cash', [PublicPizzaController::class, 'buyPizzaByCash'])->name('buyPizzaByCash');

Route::get('/order/{order}', [PublicPizzaController::class, 'show'])->name('public.pizzas.show');
//Route::get('/order/{pizza}/stream', [PublicPizzaController::class, 'stream'])->name('public.pizzas.stream');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [PizzaController::class, 'index'])->name('dashboard');

    //Route::get('/pizzas/order-list', [PizzaController::class, 'orderList'])->name('pizzas.orderList');
    Route::get('/pizzas/get-order-list', [PizzaController::class, 'getOrderList'])->name('pizzas.getOrderList');
    Route::get('/pizzas/get-prepping-order-list', [PizzaController::class, 'preppingOrderList'])->name('pizzas.preppingOrderList');
    Route::get('/pizzas/get-baking-order-list', [PizzaController::class, 'bakingOrderList'])->name('pizzas.bakingOrderList');
    Route::get('/pizzas/get-checking-order-list', [PizzaController::class, 'checkingOrderList'])->name('pizzas.checkingOrderList');
    Route::get('/pizzas/ready-order-list', [PizzaController::class, 'completeOrderList'])->name('pizzas.completeOrderList');
    
    Route::get('/pizzas/order-status/{order}', [PizzaController::class, 'editOrderStatus'])->name('pizzas.editOrderStatus');
    Route::patch('/pizzas/order-status/{order}', [PizzaController::class, 'updateOrderStatus'])->name('pizzas.updateOrderStatus');
    
    Route::get('/pizzas/create', [PizzaController::class, 'pizzaCreate'])->name('pizzaCreate');
    Route::post('/pizzas/store', [PizzaController::class, 'pizzaStore'])->name('pizzas.pizzaStore');

    Route::get('/pizzas/mark-all-notification', [PizzaController::class, 'markAllNotification'])->name('markAllNotification');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
