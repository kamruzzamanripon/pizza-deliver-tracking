<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PizzaCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
           'name' => 'required|string|max:255',
            'size' => 'required|array|min:1', // Ensure at least one size is selected
            'size.*' => 'string', // Ensure each size is a string
            'crust' => 'required|array|min:1', // Ensure at least one crust is selected
            'crust.*' => 'string', // Ensure each crust is a string
            'toppings' => 'nullable|array', // Toppings can be optional
            'toppings.*' => 'string', // Ensure each topping is a string
            'price' => 'required|numeric|min:0', 
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ];
    }
}
