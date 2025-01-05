<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Pizza; // Import the Pizza model
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Generate a Pizza instance using the PizzaFactory
        $pizza =  Pizza::inRandomOrder()->first();

        return [
            'pizza_id' => $pizza->id,
            'name' => $this->faker->name(),
            'address' => $this->faker->address(),
            'mobile' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'user_serial' => $this->faker->uuid(),
            'payment_type' => Arr::random(['cash', 'stripe']),
            'status' => Arr::random(['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready']),
            'pizza_name' => $pizza->name,
            'size' => Arr::random(['Small', 'Medium', 'Large', 'Extra-Large']),
            'crust' => Arr::random(['Normal', 'Thin', 'Garlic']),
            'toppings' => json_encode($pizza->toppings), // Since toppings in PizzaFactory are an array
            'pizza_price' => $pizza->price,
            'total_price' => $pizza->price + rand(50, 100), // Adding a random delivery fee or extra charge
        ];
    }
}
