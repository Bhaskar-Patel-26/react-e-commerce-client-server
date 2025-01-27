import { useSelector } from "react-redux";

const OrderSummary = () => {
  const products = useSelector((store) => store.cart.products);
  const {tax, taxRate, totalPrice, grandTotal, selectedItems} = useSelector((store) => store.cart)
  return (
    <div className="bg-primary-light mt-5 rounded text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-2xl font-bold text-text-dark ">Order Summary</h2>
        <p className="text-text-dark mt-2">Selected Items: {selectedItems}</p>
        <p className="text-text-dark mt-2">Total Price: {totalPrice.toFixed(2)}</p>
        <p className="text-text-dark mt-2">Tax: {taxRate*100}%: ${tax.toFixed(2)}</p>
        <h3 className="font-bold">GrandTotal: ${grandTotal.toFixed(2)}</h3>
        <div>
            <button className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4">
                <span className="mr-2">Clear Cart</span>
                <i className="ri-delete-bin-7-line"></i>
            </button>
            <button className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center">
                <span className="mr-2">Proceed Checkout</span>
                <i className="ri-bank-card-line"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
