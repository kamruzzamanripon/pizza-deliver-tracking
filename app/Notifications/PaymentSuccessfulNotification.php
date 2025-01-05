<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PaymentSuccessfulNotification extends Notification
{
    use Queueable;

    public $orderInfo;

    public function __construct($orderInfo)
    {
        $this->orderInfo = $orderInfo;
    }

    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    public function toArray($notifiable)
    {
        return [
            'order_id' => $this->orderInfo['order_id'],
            'quantity' => $this->orderInfo['quantity'],
            'total_price' => $this->orderInfo['total_price'],
        ];
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'order_id' => $this->orderInfo['order_id'],
            'quantity' => $this->orderInfo['quantity'],
            'total_price' => $this->orderInfo['total_price'],
        ]);
    }
}
