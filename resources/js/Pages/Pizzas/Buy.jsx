import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import GuestLayoutTwo from "@/Layouts/GuestLayoutTwo";
import { Head, useForm } from "@inertiajs/react";

const Buy = ({ auth, pizza }) => {
    const { data, setData, post, errors, processing, recentlySuccessful, setError } =
        useForm({
            size: "",
            crust: "",
            toppings: pizza.toppings,
            name: "",
            address: "",
            pizzaId: pizza.id,
            payment_type: "cash",
            quantity: 1,
            email: "", 
            mobile: "",
        });

    // Handle change for toppings checkboxes
    const handleToppingChange = (topping) => {
        // Check if topping is already selected
        if (data.toppings.includes(topping)) {
            // Remove the topping if it is already selected
            setData(
                "toppings",
                data.toppings.filter((t) => t !== topping)
            );
        } else {
            // Add the topping if it is not selected
            setData("toppings", [...data.toppings, topping]);
        }
    };

    const validateEmailOrMobile = () => {
        if (!data.email && !data.mobile) {
          // Set error messages using setError
          setError("email", "Email or mobile number is required.");
          setError("mobile", "Email or mobile number is required.");
          return false;
        }
    
        // Clear errors if validation passes
        setError("email", null);
        setError("mobile", null);
        return true;
      };

    const createOrder = (e) => {
        e.preventDefault();
        if (validateEmailOrMobile()) {
            post(route("buyPizzaByCash"), {
                onSuccess: () => {},
            });
        }
    };

    return (
        <>
            <GuestLayoutTwo auth={auth}>
                <Head title={pizza.name} />

                <section className="py-8 bg-slate-200 dark:bg-gray-900 antialiased">
                    <form
                        onSubmit={createOrder}
                        className="p-6 overflow-y-auto"
                    >
                        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                    <img
                                        className="w-full dark:hidden"
                                        src={pizza.image}
                                        alt=""
                                    />
                                    <img
                                        className="w-full hidden dark:block"
                                        src={pizza.image}
                                        alt=""
                                    />
                                </div>

                                <div className="mt-6 sm:mt-8 lg:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                        {pizza.name}
                                    </h1>
                                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                            TK {pizza.price}
                                        </p>

                                        {/* Rating and review */}
                                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                            <div className="flex items-center gap-1">
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                                (5.0)
                                            </p>
                                            <a
                                                href="#"
                                                className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                            >
                                                345 Reviews
                                            </a>
                                        </div>
                                        {/* End Rating and review */}
                                    </div>

                                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                    <div className="space-y-3">
                                        <div>
                                            <InputLabel
                                                htmlFor="size"
                                                value="Size"
                                            />

                                            <SelectInput
                                                id="size"
                                                className="mt-1 block w-full"
                                                options={pizza.size}
                                                value={data.size}
                                                onChange={(e) =>
                                                    setData(
                                                        "size",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.size}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="crust"
                                                value="Crust"
                                            />

                                            <SelectInput
                                                id="crust"
                                                className="mt-1 block w-full"
                                                options={pizza.crust}
                                                value={data.crust}
                                                onChange={(e) =>
                                                    setData(
                                                        "crust",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.crust}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="toppings"
                                                value="Toppings"
                                            />
                                            <div className="flex flex-wrap mt-2">
                                                {pizza.toppings.map(
                                                    (topping) => (
                                                        <label
                                                            key={topping}
                                                            className="mr-4 flex items-center"
                                                        >
                                                            <Checkbox
                                                                checked={data.toppings.includes(
                                                                    topping
                                                                )}
                                                                onChange={() =>
                                                                    handleToppingChange(
                                                                        topping
                                                                    )
                                                                }
                                                            />
                                                            <span className="ml-2">
                                                                {topping}
                                                            </span>
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                            <InputError
                                                className="mt-2"
                                                message={errors.toppings}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="quantity"
                                                value="Quantity"
                                            />

                                            <TextInput
                                                id="quantity"
                                                className="mt-1 block w-full"
                                                type="number"
                                                value={data.quantity}
                                                onChange={(e) =>
                                                    setData(
                                                        "quantity",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.name}
                                            />
                                        </div>
                                    </div>

                                    {/* User Information  */}
                                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                                    <div className="space-y-3">
                                        <div>
                                            <InputLabel
                                                htmlFor="customer_name"
                                                value="Customer Name"
                                            />

                                            <TextInput
                                                id="customer_name"
                                                className="mt-1 block w-full"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.name}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="customer_address"
                                                value="Customer Address"
                                            />

                                            <TextAreaInput
                                                id="customer_address"
                                                rows="6"
                                                className="mt-1 block w-full"
                                                value={data.address || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "address",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.address}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                for="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                className="mt-1 block w-full"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                for="mobile"
                                                value="Mobile"
                                            />

                                            <TextInput
                                                id="mobile"
                                                className="mt-1 block w-full"
                                                type="text"
                                                value={data.mobile}
                                                onChange={(e) =>
                                                    setData(
                                                        "mobile",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                className="mt-2"
                                                message={errors.mobile}
                                            />
                                        </div>
                                    </div>
                                    {/* End User Information  */}

                                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                                    {/* Payment Type */}
                                    <div className="flex flex-col space-y-3 mb-6">
                                        <label>
                                            <input
                                                checked
                                                type="radio"
                                                name="payment_method"
                                                value="cash"
                                                onChange={(e) =>
                                                    setData(
                                                        "payment_type",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span className="ml-2">
                                                By Cash
                                            </span>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="payment_method"
                                                value="stripe"
                                                onChange={(e) =>
                                                    setData(
                                                        "payment_type",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <span className="ml-2">
                                                By Stripe
                                            </span>
                                        </label>
                                    </div>
                                    {/* End Payment Type */}

                                    <div>
                                        <button
                                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-36"
                                            disabled={processing}
                                        >
                                            Buy Pizza
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </GuestLayoutTwo>
        </>
    );
};

export default Buy;
