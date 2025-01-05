import OrderSatusShow from "@/Components/OrderSatusShow";
import GuestLayoutTwo from "@/Layouts/GuestLayoutTwo";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Welcome({ auth, pizzas }) {
    const { success, error, orderInfo } = usePage().props.toast;
    const [customerOrderInfo, setCustomerOrderInfo] = useState(orderInfo || JSON.parse(localStorage.getItem('orderInfo')) || null);
    console.log("customerOrderInfo-2", customerOrderInfo);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    useEffect(() => {
        if (orderInfo) {
            localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
        }
    }, [orderInfo]);

    useEffect(() => {
        if(customerOrderInfo){
        const timeoutId = setTimeout(() => {
            localStorage.removeItem("orderInfo");
            setCustomerOrderInfo(null); // Clear state as well
            console.log('orderInfo has been deleted after 1 hour');
        }, 60 * 60 * 1000); // 1 hour in milliseconds

        // Clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }
    }, [customerOrderInfo]);

    return (
        <>
            <GuestLayoutTwo auth={auth}>
                <Head title="LARA Pizza Corner" />

                <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                   
                   {customerOrderInfo?.order && customerOrderInfo?.order?.status != "Ready" && (
                     <OrderSatusShow customerOrderInfo={customerOrderInfo} />
                   )}
                  
                   
                   
                    <section className="bg-slate-200 dark:bg-gray-900">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  ">
                            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                    LARA Pizza Corner
                                </h2>
                                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam pariatur? Voluptatum sit animi vero labore sapiente sequi dignissimos explicabo! Quis tenetur voluptatum, quos labore officia deserunt eveniet obcaecati repellat velit, excepturi autem dolorem? Provident ipsam dolores quos placeat earum maiores hic? Provident quo soluta enim expedita quasi est? Aperiam!
                                </p>
                            </div>

                            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                                {pizzas.data.length > 0 &&
                                    pizzas.data.map((pizza) => (
                                        <div
                                            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                                            key={pizza.id}
                                        >
                                            <a href="#">
                                                <img
                                                    className="w-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg"
                                                    src={pizza.image}
                                                    alt="Bonnie Avatar"
                                                />
                                            </a>
                                            <div className="p-5">
                                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    <a href="#">{pizza.name}</a>
                                                </h3>
                                                <span className="text-gray-500 dark:text-gray-400">
                                                    <strong>Sizes:</strong>{" "}
                                                    {pizza.size.join(", ")}
                                                </span>
                                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                                    <strong>Price: </strong> TK.{" "}
                                                    {pizza.price}
                                                </p>
                                                <ul className="flex space-x-4 sm:mt-0">
                                                    <Link
                                                        href={route(
                                                            "buyPizza",
                                                            pizza.id
                                                        )}
                                                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                                    >
                                                        Buy Pizza
                                                    </Link>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                </div>
            </GuestLayoutTwo>
        </>
    );
}
