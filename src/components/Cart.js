import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">
                <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-green-100 border-black" onClick={handleClearCart}>Clear Cart</button>
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    )
}

export default Cart;