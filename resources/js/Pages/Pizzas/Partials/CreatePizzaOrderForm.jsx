import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CreatePizzaOrderForm() {
    const [previewImage, setPreviewImage] = useState("");
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            image: "",
            size: [],
            crust: [],
            toppings: [],
            price: "",
        });

    function handleImageChange(event) {
        const file = event.target.files[0];

        setPreviewImage(URL.createObjectURL(file));
        data.image = file;
    }

    // Handle checkbox change for multiple selections
    const handleCheckboxChange = (e, key) => {
        const value = e.target.value;
        if (e.target.checked) {
            // Add the value to the array
            setData(key, [...data[key], value]);
        } else {
            // Remove the value from the array
            setData(
                key,
                data[key].filter((item) => item !== value)
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log("formData", data);
        post(route("pizzas.pizzaStore"));
    };

    const statusOptions = [
        "Ordered",
        "Prepping",
        "Baking",
        "Checking",
        "Ready",
    ];

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Pizza Create Form
                </h2>
                <hr />
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                
                {/* Name input field */}
                <div>
                    <InputLabel htmlFor="pizza_name" value="Pizza Name" />

                    <TextInput
                        id="pizza_name"
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>
                {/* End Name input field */}

                {/* Image input field */}
                <div>
                    <input type="file" onChange={handleImageChange} required />
                    {previewImage && (
                        <div className="border-2 p-2 rounded-md mt-4 ">
                            <p className="text-center font-bold">
                                Selected Image
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src={previewImage}
                                    alt="Selected Image Preview"
                                    class="w-36 mt-2 rounded-md"
                                />
                            </div>
                        </div>
                    )}
                </div>
                {/* End Image input field */}

                {/* Checkbox input Field  */}
                <div className="flex space-x-8">
                    {/* Size Checkboxes */}
                    <div>
                        <InputLabel htmlFor="size" value="Size" />
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Large"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "size")
                                }
                                required
                            />
                            <span className="ml-2"> Large </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Medium"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "size")
                                }
                            />
                            <span className="ml-2"> Medium </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Small"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "size")
                                }
                            />
                            <span className="ml-2"> Small </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Extra-Large"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "size")
                                }
                            />
                            <span className="ml-2"> Extra-Large </span>
                        </label>
                    </div>

                    {/* Crust Checkboxes */}
                    <div>
                        <InputLabel htmlFor="crust" value="Crust" />
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Normal"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "crust")
                                }
                                required
                            />
                            <span className="ml-2"> Normal </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Thick"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "crust")
                                }
                            />
                            <span className="ml-2"> Thick </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Stuffed"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "crust")
                                }
                            />
                            <span className="ml-2"> Stuffed </span>
                        </label>
                        <label className="mr-4 flex items-center">
                            <Checkbox
                                value="Garlic"
                                onChange={(e) =>
                                    handleCheckboxChange(e, "crust")
                                }
                            />
                            <span className="ml-2"> Garlic </span>
                        </label>
                    </div>

                    {/* Toppings Checkboxes */}
                    <div>
                        <InputLabel htmlFor="toppings" value="Toppings" />
                        <div className="flex">
                            <div>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Jalapenos"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                        required
                                    />
                                    <span className="ml-2"> Jalapenos </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Chicken"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Chicken </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Beef"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Beef </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Garlic"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Onion </span>
                                </label>
                            </div>
                            <div>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Sausage"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Sausage </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Green Peppers"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2">
                                        {" "}
                                        Green Peppers{" "}
                                    </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Pepperoni"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Pepperoni </span>
                                </label>
                                <label className="mr-4 flex items-center">
                                    <Checkbox
                                        value="Anchovies"
                                        onChange={(e) =>
                                            handleCheckboxChange(e, "toppings")
                                        }
                                    />
                                    <span className="ml-2"> Anchovies </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Checkbox input Field  */}

                {/* Price input field  */}
                <div>
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        className="mt-1 block w-full"
                        type="number"
                        onChange={(e) => setData("price", e.target.value)}
                    />
                </div>
                {/* End Price input field  */}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Save Changes
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
