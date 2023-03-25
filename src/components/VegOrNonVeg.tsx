const VegOrNonVeg = ({ isVeg }: { isVeg: boolean }) => {
  if (isVeg) {
    return (
      <div className='w-5 h-5 text-center align-middle border-2 p-0.5 border-green'>
        <div className='w-3 h-3 rounded-full bg-green' />
      </div>
    );
  }

  return (
    <div className='w-5 h-5 text-center align-middle border-2 p-0.5 border-red'>
      <div className='w-3 h-3 rounded-full bg-red' />
    </div>
  );
};

export default VegOrNonVeg;
