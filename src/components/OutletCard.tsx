import { Rating } from '.';
import defaultImage from '../assets/default.jpg';
import { OUTLET } from '../utils/types';

const OutletCard = ({
  id,
  vendorId,
  name,
  ratingValue,
  ratingCount,
  prepaid,
  orderByTime,
  cuisines,
  logo,
  minOrderValue,
  deliveryCharge,
  speciality,
  specialityImg,
}: OUTLET) => {
  return (
    <div className='flex gap-4 items-center md:items-stretch w-full md:w-72 md:flex-col p-4 hover:shadow-md border border-white hover:border-[#d3d5df]'>
      <div className='w-24 h-24 relative md:w-64 md:h-40'>
        <img
          src={logo ? logo : defaultImage}
          alt='restaurant-img'
          className='w-[88px] h-24 md:h-full md:w-full rounded-md md:rounded-none'
        />
      </div>
      <div className='flex flex-col w-full md:gap-1'>
        <div className='font-semibold md:font-medium text-gray-ultra text-[15px] md:text-[17px] truncate w-36 md:w-full'>
          {name}
        </div>
        <div className='text-[13px] text-gray-light font-light hidden md:block'>
          {cuisines.join(', ')}
        </div>
        <Rating rating={ratingValue} ratingCount={ratingCount} />
        <div className='flex md:justify-between items-center gap-1 font-semibold mt-1'>
          {deliveryCharge > 0 ? (
            <span className='text-brown text-sm '>₹{deliveryCharge}</span>
          ) : (
            <span className='text-green text-sm'>Free Delivery</span>
          )}
          <span className='text-xs text-gray-light'>•</span>
          <span className='text-xs text-gray-light'>
            MIN ORDER ₹{minOrderValue}
          </span>
        </div>
        <div className='w-36 font-extralight text-[13px] text-gray-light truncate overflow-hidden mt-0.5 md:hidden'>
          {cuisines.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default OutletCard;
