import { Link } from '@inertiajs/react';

const OrderSatusShow = ({customerOrderInfo}) => {
    return (
        <div className="text-center bg-yellow-400">
           Thanks to Order Pizza. You can see your's Order status this link  &nbsp; 
           <Link 
            className="text-red-500" 
            href={customerOrderInfo.order.order_status_url} 
            target='_blank'
            rel="noopener noreferrer"
           >Order Status</Link>
        </div>
    );
};

export default OrderSatusShow;