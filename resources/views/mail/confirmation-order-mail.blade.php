<x-mail::message>
Dear Customer, 
Thanks to Order Pizza. You can see your's Order status below this link

<x-mail::button url="{{ route('public.pizzas.show', $orderInfo->id) }}">
    Click here to Show Delivery status
</x-mail::button>

<br>

Thank you, <br>
{{ config('app.name') }}
</x-mail::message>
