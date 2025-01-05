import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";

const PreppingOrderTable = ({responseOrderList}) => {
    return (
        <div className="p-4 bg-white border-b border-gray-200 dark:border-b-0 dark:bg-gray-900">
            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden border rounded-lg dark:border-gray-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-900/50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Order No
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Pizza Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Size
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Crust
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Topping
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Picture
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-200">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                                {responseOrderList[0]?.data.length > 0 ? (
                                        responseOrderList[0].data.map((orderList, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList.order_id}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList.pizza_name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList.size}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList.crust}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList?.toppings}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    {orderList.quantity}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                    <img src={orderList.pizza_iamge} alt="pizza" className="w-14 rounded-md" />
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
                                                <Link
                                                        href={route(
                                                            "pizzas.editOrderStatus",
                                                            orderList.order_id
                                                        )}
                                                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                                    >
                                                         Pizza
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="py-4 text-sm text-center text-gray-500 dark:text-gray-200"
                                            >
                                                No users found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Pagination
                links={responseOrderList[0]?.meta.links ? responseOrderList[0]?.meta.links : []}
                total={responseOrderList[0]?.meta.total}
            />
        </div>
    );
};

export default PreppingOrderTable;
