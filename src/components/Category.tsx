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
    <div className='flex flex-col justify-evenly items-stretch p-4 my-2'>
      <h2 className='text-xl font-semibold text-gray-ultra mb-2 capitalize border-b border-gray-dark pb-1'>
        {name}
      </h2>
      <div className='flex flex-wrap gap-8'>
        {items.map(item => {
          return <Item {...item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
