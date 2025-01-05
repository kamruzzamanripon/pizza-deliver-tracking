<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Pizza;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'ripon@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('123456789'),
        ]);

        //User::factory(10)->create();
        Pizza::factory(10)->create();
        //Order::factory(20)->create();

        
    }
}
