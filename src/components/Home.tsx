import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OutletCard, ShimmerRestaurant } from '.';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchRestaurantList } from '../redux/features/restaurants/restaurantSlice';
import { OUTLET } from '../utils/types';

const Home = () => {
  const [outlets, setOutlets] = useState<OUTLET[]>([]);

  const { data, isLoading, error, isSuccess } = useAppSelector(
    state => state.restaurants
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantList());
  }, []);

  useEffect(() => {
    let arr = [];
    for (const vendor of data.result.vendors) {
      const vendorOutlets = vendor.outlets;
      for (let i = 0; i < vendorOutlets.length; i++) {
        arr.push(vendorOutlets[i]);
      }
    }
    setOutlets(arr);
  }, [data, isSuccess]);

  return (
    <div className='my-20'>
      <div className='mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
        <div className='flex flex-col gap-8 md:flex-row md:flex-wrap'>
          {isSuccess && (
            <>
              {outlets.map((item: OUTLET) => (
                <Link to={`menu`} key={item.id}>
                  <OutletCard {...item} />
                </Link>
              ))}
            </>
          )}
          {isLoading && (
            <>
              {Array(16)
                .fill('')
                .map((_, index) => (
                  <ShimmerRestaurant key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
