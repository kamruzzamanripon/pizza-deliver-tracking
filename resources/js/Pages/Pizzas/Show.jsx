import GuestLayoutTwo from "@/Layouts/GuestLayoutTwo";
import PizzaStatus from "@/Pages/Pizzas/Partials/PizzaStatus.jsx";
import { Head, router } from '@inertiajs/react';
import { useEffect } from "react";
import OrderTableStatus from "./Partials/OrderTableStatus";

export default function Show({ auth,pizza }) {

    // useEffect(() => {
    //     setInterval(() => {
    //         router.reload({ only: ['pizza'] });
    //     }, 300000);
    // }, []);

    useEffect(() => {
        window.Echo.channel("order-status").listen("PizzaOrderStatusEvent", (e) => {
            console.log("PizzaOrderStatusEvent", e);
            console.log("PizzaOrderStatusEvent--2", pizza);
           // router.reload({ only: ['pizza'] });
            if(e.orderInfo.id == pizza.order_id){
                router.reload({ only: ['pizza'] });
            }
        });
    }, []);


    return (
        <GuestLayoutTwo auth={auth}>
        <div className="max-w-3xl min-h-[88vh] mx-auto py-12">
            <div className="py-8">
                <svg className="w-32 h-32 rotate-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 0h512v512H0z" fill="#fff" fillOpacity="1"></path>
                    <g transform="translate(0,0)">
                        <path
                            d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                            fill="#2563eb" fillOpacity="1"></path>
                    </g>
                </svg>
            </div>
            <Head title={'Order #' + pizza.id} />
            <PizzaStatus currentStatus={pizza.status}></PizzaStatus>
            <div className="text-center mt-4">
                <OrderTableStatus /> 
            </div>
        </div>
        </GuestLayoutTwo>
    );
}