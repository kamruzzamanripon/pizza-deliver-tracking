<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory {
    // Static property to hold shuffled pizza names
    protected static $shuffledPizzaNames = [];
    protected static $nameCounter = 0;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {

        $pizza_images = [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1673439305009-821f62df6d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpenphfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBpenphfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBpenphfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1616028678351-3882f0aa88d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBpenphfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBpenphfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1589477500339-82aeb8718167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBpenphfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1598346763242-7fbe5769efd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1621070766841-a7bf1ee96df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxwaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1601237015808-16fc98c57879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxwaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1592229005296-735b0f6c0722?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxwaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1547558840-8ad6c8e662a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxwaXp6YXxlbnwwfHwwfHx8MA%3D%3D'
        ];
        // Initialize the shuffled names only once
        if ( empty( self::$shuffledPizzaNames ) ) {
            self::$shuffledPizzaNames = [
                'New York Style Pizza',
                'Neapolitan Pizza',
                'Chicago Deep-Dish Pizza',
                'Margherita Pizza',
                'Sicilian Pizza',
                'Hawaiian Pizza',
                'California Pizza',
                'Greek Pizza',
                'Detroit Style Pizza',
                'Tavern Style Pizza',
            ];
            shuffle( self::$shuffledPizzaNames ); // Shuffle to randomize
        }

        // Get the next unique name
        $name = self::$shuffledPizzaNames[self::$nameCounter];
        self::$nameCounter = ( self::$nameCounter + 1 ) % count( self::$shuffledPizzaNames ); // Loop back if exceeded

        $toppingChoices = [
            'Extra Cheese',
            'Black Olives',
            'Pepperoni',
            'Sausage',
            'Anchovies',
            'Jalapenos',
            'Onion',
            'Chicken',
            'Ground Beef',
            'Green Peppers',
        ];

        // Select a random number of toppings and ensure they are unique
        $toppings = [];
        for ( $i = 1; $i <= rand( 1, 4 ); $i++ ) {
            $toppings[] = $toppingChoices[rand( 0, 9 )];
        }
        $toppings = array_unique( $toppings );

        // Re-index the array to ensure a simple JSON array
        $toppings = array_values( $toppings );

        $size = ['Small', 'Medium', 'Large', 'Extra-Large'];
        $crust = ['Normal', 'Thin', 'Garlic'];

        return [
            'name'     => $name,
            //'image'    => $this->faker->imageUrl( 640, 480, 'food', true, $name ),
            'image'    => Arr::random($pizza_images),
            'size'     => $size,
            'crust'    => $crust,
            'toppings' => $toppings, // Now this will be a simple array
            'price' => rand( 100, 500 ),
        ];
    }

}
