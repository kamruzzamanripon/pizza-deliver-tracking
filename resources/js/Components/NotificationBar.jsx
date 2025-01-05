import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const NotificationBar = () => {
    const dataBaseNotifications = usePage().props.notifications;
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setNotifications(dataBaseNotifications);
    }, [dataBaseNotifications]);

    useEffect(() => {
        window.Echo.channel("payments").listen("PaymentSuccessful", (e) => {
            console.log("notification", e);

            const newNotification = {
                data: JSON.stringify({
                    order_id: e.message.order_id,
                    quantity: e.message.quantity,
                    total_price: e.message.total_price,
                }),
            };

            const newOrderId = e.message.order_id;

            // Use a callback function to access the latest state of notifications
            setNotifications((prevNotifications) => {
                const isDuplicate = prevNotifications.some((notification) => {
                    const parsedData = JSON.parse(notification.data);
                    return parsedData.order_id === newOrderId;
                });

                // If it's a duplicate, return the previous state
                if (isDuplicate) {
                    return prevNotifications;
                }

                // If not a duplicate, add the new notification
                return [...prevNotifications, newNotification];
            });
        });
    }, [notifications]);
    return (
        <div className="hidden sm:flex sm:items-center sm:ms-6">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <span className="w-5 h-5 bg-red-600 text-white rounded-md">  {notifications.length}</span>
                        Options
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="-mr-1 h-5 w-5 text-gray-400"
                        />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1  h-96 overflow-auto">
                        <div>
                        {notifications.length > 0 &&
                            notifications.map((notification, index) => {
                                const parsedData = JSON.parse(
                                    notification.data
                                );
                                return (
                                    <MenuItem key={index}>
                                        <Link
                                             //href={route('pizzas.editOrderStatus', [parsedData.order_id], { notification: true })}
                                             href={`/pizzas/order-status/${parsedData.order_id}?notificationStatus=true`}
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                            Order No: {parsedData.order_id} ||
                                            Quantity: {parsedData.quantity} ||
                                            Quantity: {parsedData.total_price}
                                        </Link>
                                    </MenuItem>
                                );
                            })}
                        </div>
                        <hr />
                        {notifications.length > 0 && (
                            <div className="flex justify-center mt-3">
                            <Link href={route('markAllNotification')} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Mark all Notification</Link>
                            </div>
                        )}
                            
                    </div>
                </MenuItems>
            </Menu>
        </div>
    );
};

export default NotificationBar;
