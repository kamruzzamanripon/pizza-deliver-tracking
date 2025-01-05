import { useState } from "react";

const OrderTableStatus = () => {
    const [customerOrderInfo, setCustomerOrderInfo] = useState(JSON.parse(localStorage.getItem('orderInfo')) || null);

    return (
        <>
            <p className="text-lg mb-4 text-white">Order Information</p>
        <div className="relative overflow-x-auto bg-blue-400">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Date</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.order_date}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Pizza Item</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.pizza_name}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Quantity</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.quantity}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Pizza Size</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.size}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Pizza Toppings</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {customerOrderInfo?.order?.toppings 
                        ? (Array.isArray(customerOrderInfo.order.toppings)
                        ? customerOrderInfo.order.toppings.join(', ')
                        : JSON.parse(customerOrderInfo.order.toppings || '[]').join(', '))
                        : 'No toppings selected'}
                    </td>
                </tr> 
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Pizza Price</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.pizza_price}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Customer Name</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.user_name}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Customer address</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.address}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Payment Type</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">{customerOrderInfo?.order?.payment_type}</td>
                </tr>
                <tr className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-2">Total Pirce</th>
                    <td className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        Tk. {customerOrderInfo?.order?.total_price}
                        <small className="text-[9px] ml-2 text-red-500"> Other service Include</small>
                        </td>
                </tr>
                
            </table>
        </div>
        </>
    );
};

export default OrderTableStatus;
