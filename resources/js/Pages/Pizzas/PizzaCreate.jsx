import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreatePizzaOrderForm from "@/Pages/Pizzas/Partials/CreatePizzaOrderForm.jsx";
import { Head } from '@inertiajs/react';


const PizzaCreate = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Pizza</h2>}
        >
            <Head title="Create New Pizza" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                           <CreatePizzaOrderForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default PizzaCreate;