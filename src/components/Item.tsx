import { ITEM } from '../utils/types';
import { VegOrNonVeg } from './';

const Item = ({
  id,
  itemName,
  description,
  basePrice,
  sellingPrice,
  taxRate,
  isVegetarian,
  image,
  neonUrl,
  cuisine,
  schedules,
  customisations,
}: ITEM) => {
  let quantityInCart = 5;
  return (
    <div className='p-4 flex flex-col md:flex-row gap-4 justify-between shadow-md rounded-md'>
      <div className=''>
        <div className='flex gap-2 py-2'>
          <VegOrNonVeg isVeg={isVegetarian} />
          <p className='font-semibold'>{itemName}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-gray-medium text-xs'>{description}</p>
          <p className='text-sm'>Base price: ₹{basePrice}</p>
          <p className='text-sm'>Tax: ₹{taxRate}</p>
          <p className='text-sm text-gray-dark font-bold'>
            Final Price: ₹{sellingPrice}
          </p>
          <p className='text-sm'>{cuisine}</p>
        </div>
      </div>
      <div className='w-64 flex flex-col items-center'>
        <img src={image} alt='menu-img' className='rounded-md w-full' />
        <div className='relative bottom-4 w-24 bg-white shadow-md rounded text-green'>
          {quantityInCart > 0 ? (
            <div className='flex justify-between font-bold w-full'>
              <button className='text-gray py-2 px-4'>
                -
              </button>
              <span className='py-2'>{quantityInCart}</span>
              <button className='py-2 px-4'>
                +
              </button>
            </div>
          ) : (
            <button className='text-center w-full p-2'>
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
