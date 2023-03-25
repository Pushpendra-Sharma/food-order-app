import { CATEGORY } from '../utils/types';
import { Item } from './';

const Category = ({
  name,
  showExpanded,
  foodType,
  viewType,
  items,
}: CATEGORY) => {
  return (
    <div className='flex flex-col justify-evenly items-stretch px-4 mt-2'>
      <div className='flex justify-between py-4 mb-4'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold text-gray-ultra mb-2 capitalize'>
            {name}
          </h2>
        </div>
        <div className='flex flex-col justify-around p-2 border-gray-light border-[1px] rounded-md text-center shadow'>
          <span className='text-gray text-xs p-1'>Food type: {foodType}</span>
        </div>
      </div>
      <div className='flex flex-wrap gap-8'>
        {items.map(item => {
          return <Item {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
