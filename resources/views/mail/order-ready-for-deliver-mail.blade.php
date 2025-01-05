<x-mail::message>
Hello {{ $order->name }}

## Order Details:
## Order No. {{ substr($order->user_serial, strrpos($order->user_serial, '-') + 1) }}
## Order Date. {{ $order->order_date }}
<table>
    <thead>
        <tr>
            <th style="text-align:left;">Pizza Name</th>
            <th style="text-align:left;">Payment Type</th>
            <th style="text-align:left;">Size</th>
            <th style="text-align:left;">Quantity</th>
            <th style="text-align:left;">Pizza Price</th>
            <th style="text-align:left;">Total Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{ $order->pizza_name }}</td>
            <td>{{ $order->payment_type }}</td>
            <td>{{ $order->size }}</td>
            <td>{{ $order->quantity }}</td>
            <td>{{ $order->pizza_price }}</td>
            <td>{{ $order->total_price }}</td>
        </tr>
    </tbody>
</table>

<x-mail::button url="{{ route('public.pizzas.show', $order->id) }}">
    Click here to Show Delivery status
</x-mail::button>

<br>

Thank you, <br>
{{ config('app.name') }}
</x-mail::message>
