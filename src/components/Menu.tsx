import { useEffect, useState } from 'react';
import { fetchMenuDetails } from '../redux/features/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { CATEGORY } from '../utils/types';
import { Category, ShimmerMenu } from './';

const Menu = () => {
  const { data, isLoading, error, isSuccess } = useAppSelector(
    state => state.menu
  );

  const [categoryItems, setCategoryItems] = useState<CATEGORY[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMenuDetails());
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      setCategoryItems(Object.values(data.result.categories));
    }
  }, [isSuccess]);

  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36'>
      {isLoading && (
        <div className='flex flex-col items-stretch'>
          {Array(16)
            .fill('')
            .map((_, index) => (
              <ShimmerMenu key={index} />
            ))}
        </div>
      )}
      {isSuccess && (
        <div className='flex flex-wrap items-stretch '>
          {categoryItems.map(category => (
            <Category {...category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
