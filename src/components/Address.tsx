type Props = {
  name: string;
  location: string;
};

const Address = ({ name, location }: Props) => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:mr-auto cursor-pointer'>
      <div className='flex gap-2'>
        <span className='material-symbols-outlined font-extrabold text-orange sm:hidden'>
          pin_drop
        </span>
        <span className='font-bold sm:text-gray-medium sm:text-sm hover:text-orange sm:border-b-2'>
          {name}
        </span>
      </div>
      <span className='text-xs text-gray-light hover:opacity-75 truncate'>
        {location}
      </span>
      <span className='material-symbols-outlined hidden text-orange sm:inline'>
        expand_more
      </span>
    </div>
  );
};

export default Address;
