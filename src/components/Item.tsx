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
  return (
    <div className=' px-4 py-8 flex gap-8 justify-between border-t border-gray-light'>
      <div className='flex flex-col gap-1'>
        <VegOrNonVeg isVeg={isVegetarian} />
        <p className='text-gray-medium font-medium'>{itemName}</p>
        <p className='text-sm text-gray'>₹{basePrice}</p>
        <p className='text-sm text-gray'>₹{sellingPrice}</p>
      </div>
      <div className='w-32 flex flex-col gap-0 items-center'>
        <img src={image} alt='menu-img' className='rounded-md w-full' />
      </div>
    </div>
  );
};

export default Item;
