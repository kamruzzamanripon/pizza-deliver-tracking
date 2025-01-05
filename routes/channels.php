<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('payments', function ($user) {
    return true;  
});

Broadcast::channel('order-status', function ($user) {
    return true;  
});