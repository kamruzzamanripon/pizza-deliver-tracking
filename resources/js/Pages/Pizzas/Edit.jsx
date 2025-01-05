import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePizzaOrderForm from "@/Pages/Pizzas/Partials/UpdatePizzaOrderForm.jsx";
import { Head } from '@inertiajs/react';

export default function Edit({ auth, order }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order # <span className="font-bold">Order Date:</span> {order.order_date} || <span className="font-bold">Customer Name:</span> {order.user_name}</h2>}
        >
            <Head title={`Order#-${order.order_id}` } />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePizzaOrderForm
                            order={order}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}