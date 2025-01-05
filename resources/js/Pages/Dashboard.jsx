import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({newOrderListCount, doneOrderListCount, pizzaList}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex space-x-5 justify-around py-5">
                        <Link
                            href={route('pizzas.getOrderList')}
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Total New Order Arrive
                                </h5>
                                <p className="mb-3 font-normal text-green-700 dark:text-gray-400 text-[55px] text-center">
                                    {newOrderListCount ?? 0}
                                </p>
                            </div>
                        </Link>

                        <Link
                            href={route('pizzas.completeOrderList')}
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-full rounded-t-lg h-98 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                src="https://images.unsplash.com/photo-1707779491283-4989f727825f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Total Done Order
                                </h5>
                                <p className="mb-3 font-normal text-blue-700 dark:text-gray-400 text-[55px] text-center">
                                    {doneOrderListCount ?? 0}
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-center text-[30px] font-bold mb-2">Pizza List</h2>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            size
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pizzaList.data.length > 0 && pizzaList.data.map((pizza, index)=>(
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {pizza.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {pizza.size}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src={pizza.image} alt="" className="w-24 rounded-md" />
                                        </td>
                                        <td className="px-6 py-4">
                                            Tk. {pizza.price}
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination
                                className="mt-8"
                                links={pizzaList.links }
                                total={pizzaList.total}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
