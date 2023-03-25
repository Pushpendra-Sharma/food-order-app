type RATING = {
  rating: number;
  ratingCount: number;
};

const Rating = ({ rating, ratingCount }: RATING) => {
  let color = '';

  if (rating >= 4) color = 'green';
  else if (rating >= 3) color = 'orange-light';
  else if (rating >= 2) color = 'orange-pale';
  else color = 'red';

  return (
    <div className={`flex gap-2 items-center md:py-0.5`}>
      <div className={`bg-${color} text-white px-2`}>
        <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-xs'>
          star
        </span>
        <span className='text-xs font-normal'>{rating}</span>
      </div>
      <span className='text-xs text-gray-light'>•</span>
      <span className='text-xs font-normal px-2'>Ratings: {ratingCount}</span>
    </div>
  );
};

export default Rating;
