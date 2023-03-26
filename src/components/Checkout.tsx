import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { Item } from './';
import {
  addItem,
  clear,
  placeOrder,
  removeItem,
} from '../redux/features/cart/cartSlice';
import { calculateTotal } from '../utils/helper';

const Checkout = () => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  const { totalPrice } = calculateTotal(cartItemsArray);

  const { isSuccess, status, result, message } = useSelector(
    (state: RootState) => state.cart.order
  );

  const handleOrder = () => {
    dispatch(placeOrder());
    dispatch(clear());
  };

  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36 h-full'>
      {status === 'success' ? (
        <div className='flex flex-col gap-6 justify-between items-center m-4 p-4 h-full'>
          <div className='mb-2 font-bold text-2xl'>Order Details</div>
          <div className='font-bold'>Order ID: {result.orderId}</div>
          <span className='material-symbols-outlined text-green text-8xl border-8 border-green border-dotted rounded-full aspect-square w-36 p-4'>
            done_outline
          </span>
          <p className='text-green font-bold'>{message}</p>
          <Link to='/'>
            <span className='border border-orange p-6 py-1 rounded-lg bg-orange text-white'>
              Home
            </span>
          </Link>
        </div>
      ) : (
        <>
          <div className='flex gap-1 justify-between items-center m-4 shadow-sm rounded p-4'>
            <button
              className='px-4 py-1 rounded-lg bg-gray-light text-white'
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
            <span className=''>Items in cart: {cartItemsArray.length}</span>
            <span className=''>Total Price: ₹{totalPrice.toFixed(0)}</span>
            <button
              className='border border-orange p-4 py-1 rounded-lg bg-orange disabled:opacity-80 text-white'
              onClick={handleOrder}
              disabled={cartItemsArray.length === 0}
            >
              Place Order
            </button>
          </div>
          <div className='p-4'>
            {cartItemsArray.map(obj => {
              const { item, quantity } = obj;
              return (
                <Item
                  key={item.id}
                  {...item}
                  addToCart={() => dispatch(addItem(item))}
                  removeFromCart={() => dispatch(removeItem(item))}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
