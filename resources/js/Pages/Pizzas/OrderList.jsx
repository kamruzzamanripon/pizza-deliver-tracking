import Tabs from "@/Components/Tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import BakingOrderTable from "./Partials/BakingOrderTable";
import CheckingOrderTable from "./Partials/CheckingOrderTable";
import GetOrderTable from "./Partials/GetOrderTable";
import PreppingOrderTable from "./Partials/PreppingOrderTable";
import ReadyOrderTable from "./Partials/ReadyOrderTable";

const All = ({ auth, orderList }) => {
    const [responseOrderList, setResponseOrderList] = useState([]);

    const { props } = usePage();
    // Available tabs
    const tabs = [
        { id: 0, name: "New Order", component: GetOrderTable },
        { id: 1, name: "Prepping Order", component: PreppingOrderTable },
        { id: 2, name: "Baking Order", component: BakingOrderTable },
        { id: 3, name: "Checking Order", component: CheckingOrderTable },
        { id: 4, name: "Ready Order", component: ReadyOrderTable },
    ];

    const [currentTab, setCurrentTab] = useState(tabs[0]);
    console.log("orlerList-888", currentTab);

    // Handle tab change
    const currentTabChange = (newTab) => {
        // Call the appropriate route based on the tab name
        if (newTab.id === 0) {
            router.get(
                route("pizzas.getOrderList"),
                {},
                { preserveState: true, replace: true }
            );
        } else if (newTab.id === 1) {
            router.get(
                route("pizzas.preppingOrderList"),
                {},
                { preserveState: true, replace: true }
            );
        } else if (newTab.id === 2) {
            router.get(
                route("pizzas.bakingOrderList"),
                {},
                { preserveState: true, replace: true }
            );
        } else if (newTab.id === 3) {
            router.get(
                route("pizzas.checkingOrderList"),
                {},
                { preserveState: true, replace: true }
            );
        } else if (newTab.id === 4) {
            router.get(
                route("pizzas.completeOrderList"),
                {},
                { preserveState: true, replace: true }
            );
        }
        console.log("TabChange", newTab);
        setCurrentTab(newTab);
    };

    const CurrentComponent = currentTab.component;

    useEffect(() => {
        // Transform the data into an array if needed
        if (props.orderList) {
            setResponseOrderList(
                Array.isArray(props.orderList)
                    ? props.orderList
                    : [props.orderList]
            );
        }
    }, [props.orderList]);

    useEffect(() => {
        //console.log("orderLise-999", orderList.data[0].status);
        if (
            orderList.data.length > 0 &&
            orderList.data[0].status == "Prepping"
        ) {
            setCurrentTab(tabs[1]);
        } else if (
            orderList.data.length > 0 &&
            orderList.data[0].status == "Baking"
        ) {
            setCurrentTab(tabs[2]);
        } else if (
            orderList.data.length > 0 &&
            orderList.data[0].status == "Checking"
        ) {
            setCurrentTab(tabs[3]);
        } else if (
            orderList.data.length > 0 &&
            orderList.data[0].status == "Ready"
        ) {
            setCurrentTab(tabs[4]);
        } else if (
            orderList.data.length > 0 &&
            orderList.data[0].status == "Ordered"
        ) {
            setCurrentTab(tabs[0]);
        }
    }, [orderList]);

    return (
        <>
            <Head title="Attendance History page" />
            <AuthenticatedLayout>
                <div>
                    {/* Attendance Table */}
                    <div className="my-8 mx-3 md:mx-10">
                        {/* Tabs */}
                        <div className="mt-4">
                            <ul className="flex space-x-4 text-black cursor-pointer py-2">
                                <Tabs
                                    tabs={tabs}
                                    currentTab={currentTab}
                                    onUpdateTab={currentTabChange}
                                />
                            </ul>
                            <div className="w-full mx-auto">
                                {/* Render the component without using ref */}
                                <CurrentComponent
                                    responseOrderList={responseOrderList}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Attendance Table */}
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default All;
