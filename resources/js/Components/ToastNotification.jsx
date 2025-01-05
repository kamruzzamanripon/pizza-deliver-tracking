import { usePage } from '@inertiajs/react';
import { nanoid } from 'nanoid'; // Ensure you have this installed: npm install nanoid
import { useEffect, useState } from 'react';

const ToastNotification = () => {
    const { success, error } = usePage().props.toast; // Retrieve toast messages from props
    const [toasts, setToasts] = useState([]);
   
    // Function to add a toast message
    const addToast = (type, message) => {
        console.log('toasts message-22', message)
        const newToast = {
            key: nanoid(6),
            type,
            message,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        // Remove the toast after 10 seconds
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.key !== newToast.key));
        }, 5000); // 10 seconds
    };

    // Add success and error messages when the router finishes navigating
    useEffect(() => {
        if (success) {
            console.log('toasts message-44', success)
            addToast('success', success);
        }
        if (error) {
            addToast('error', error);
        }
        
    }, [success, error]);

    return (
        <div className="fixed top-0 right-0 m-4 space-y-2 z-50">
            {toasts.map((toast) => (
                <div
                    key={toast.key}
                    className={`px-4 py-2 rounded shadow-md ${
                        toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
};

export default ToastNotification;
