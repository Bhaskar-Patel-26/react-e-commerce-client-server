import { useDispatch } from "react-redux";
import OrderSummary from "./OrderSummary";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";

const CartModal = ({ products, isCartOpen, onClose }) => {
    const dispatch = useDispatch();

    const handleQuantity = (type, id) => {
        dispatch(updateQuantity({type, id}))
    };

    const handleRemoveProduct = (e, id) => {
        e.preventDefault()
        dispatch(removeFromCart({id}))
    }
  return (
    <div className={`fixed z-[1000] inset-8 ${
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{transition: 'opacity 300ms'}}>
      <div
        className={`fixed right-0 top-0 md:w-1/2 w-full bg-neutral-100 h-full overflow-y-auto transition-transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      >
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={() => onClose()}
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="ri-xrp-fill font-bold p-1"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="cart-items absolute top-10 right-0">
        {
            products.length === 0 ? (<div>Your Cart is empty</div>) : (
                products.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4">
                        <div className="flex items-center">
                            <span className="mr-4 px-1 bg-primary text-white rounded-full">0{index+1}</span>
                            <img src={item.image} className="size-12 object-cover mr-4" alt="" />
                            <div>
                                <h5 className="text-lg font-medium">{item.name}</h5>
                                <p className="text-gray-600 text-sm">${Number(item.price).toFixed(2)}</p>
                            </div>
                            <div className="flex flex-row items-center justify-end md:justify-start mt-2">
                                <button onClick={()=> handleQuantity('decrement', item.id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8 mr-3">-</button>
                                <span>{item.quantity}</span>
                                <button onClick={()=> handleQuantity('increment', item.id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-3">+</button>
                                <div className="ml-5">
                                    <button onClick={(e) => handleRemoveProduct(e, item.id)} className="text-red-500 hover:text-red-800 mt-4">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )
        }
      <OrderSummary />
      </div>
    </div>
  );
};

export default CartModal;
