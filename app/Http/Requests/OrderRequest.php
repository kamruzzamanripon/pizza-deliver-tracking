<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            'size' => ['required'],
            'crust' => ['required'],
            'name' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string'],
            'toppings' => ['required'],
            'pizzaId' => ['required'],
            'email' => ['nullable', 'string', 'email', 'max:255',  'required_without:mobile'],
            'mobile' => ['nullable', 'numeric', 'digits_between:1,15', 'required_without:email'],
            //'payment_type' => ['required', 'string'],
            
        ];
    }
}
