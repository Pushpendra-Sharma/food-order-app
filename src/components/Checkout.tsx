import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { Item } from './';
import { addItem, clear, removeItem } from '../redux/features/cart/cartSlice';
import { calculateTotal } from '../utils/helper';

const Checkout = () => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  
  const {totalPrice}=calculateTotal(cartItemsArray)

  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36'>
      <div className='flex gap-1 justify-between m-4 shadow-sm rounded p-4'>
        <span className=''>Items in cart: {cartItemsArray.length}</span>
        <span className=''>Total Price: ₹{totalPrice.toFixed(0)}</span>
        <button
          className='border border-orange px-4 py-1 rounded-lg bg-orange'
          onClick={() => dispatch(clear())}
        >
          Clear
        </button>
      </div>
      <div className='p-2'>
        {cartItemsArray.map(obj => {
          const { item, quantity } = obj;
          return (
            <Item
              {...item}
              addToCart={() => dispatch(addItem(item))}
              removeFromCart={() => dispatch(removeItem(item))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
