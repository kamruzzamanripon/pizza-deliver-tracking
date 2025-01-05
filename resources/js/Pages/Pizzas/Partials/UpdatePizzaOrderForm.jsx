import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

export default function UpdatePizzaOrderForm({ order, className = '' }) {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        pizza_name: order.pizza_name,
        pizza_iamge: order.pizza_iamge,
        pizza_price: order.pizza_price,
        size: order.size,
        status: order.status,
        order_id: order.order_id,
        order_date: order.order_date,
        quantity: order.quantity,
        user_name: order.user_name,
        _method: "PATCH",
    });

    
    const submit = (e) => {
        e.preventDefault();

        post(route('pizzas.updateOrderStatus', order.order_id),{
            preserveScroll:true,
        }); 
           
    };

    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ];

    return (
        <div className={`${order.status == "Ready" && "bg-green-100 p-5" }`}>
            {order.status == "Ready" && (
                <div className="bg-green-900 rounded-md text-white text-2xl text-center p-4 mb-4">
                    Product Ready for Delivery 
                </div>
            )}
            
            <section className={className}>
            <header>
                
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update Pizza's status. 
                </p>
                <hr />
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="pizza_name" value="Pizza Name" />

                    <TextInput
                        id="pizza_name"
                        className="mt-1 block w-full"
                        value={data.pizza_name}
                        disabled
                    />
                </div>

                <div>
                    <img src={data.pizza_iamge} alt="pizza image" className="w-60 rounded-md" />
                </div>

                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Quantity" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.quantity}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.status} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing || order.status == "Ready"}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
            
            </section>
            
        </div>
    );
}