type RATING = {
  rating: number;
  ratingCount: number;
};

const Rating = ({ rating, ratingCount }: RATING) => {
  if (rating >= 4) {
    return (
      <div className='flex md:justify-between items-center gap-1 font-semibold mt-1 md:mt-3.5 md:border-[#e9e9eb] md:border-y py-1 md:py-3'>
        <div className='flex gap-1 items-center bg-green text-white px-2 md:py-0.5'>
          <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
            star
          </span>
          <span className='text-xs font-normal'>{rating}</span>
        </div>
        <span className='text-xs text-gray-light'>•</span>
        <span className='text-xs font-normal px-2'>Ratings: {ratingCount}</span>
      </div>
    );
  } else if (rating >= 3) {
    return (
      <div className='flex md:justify-between items-center gap-1 font-semibold mt-1 md:mt-3.5 md:border-[#e9e9eb] md:border-y py-1 md:py-3'>
        <div className='flex gap-1 items-center bg-orange-light text-white px-2 md:py-0.5'>
          <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
            star
          </span>
          <span className='text-xs font-normal'>{rating}</span>
        </div>
        <span className='text-xs text-gray-light'>•</span>
        <span className='text-xs font-normal px-2'>Ratings: {ratingCount}</span>
      </div>
    );
  } else if (rating >= 2) {
    return (
      <div className='flex md:justify-between items-center gap-1 font-semibold mt-1 md:mt-3.5 md:border-[#e9e9eb] md:border-y py-1 md:py-3'>
        <div className='flex gap-1 items-center bg-orange-pale text-white px-2 md:py-0.5'>
          <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
            star
          </span>
          <span className='text-xs font-normal'>{rating}</span>
        </div>
        <span className='text-xs text-gray-light'>•</span>
        <span className='text-xs font-normal px-2'>Ratings: {ratingCount}</span>
      </div>
    );
  } else {
    return (
      <div className='flex md:justify-between items-center gap-1 font-semibold mt-1 md:mt-3.5 md:border-[#e9e9eb] md:border-y py-1 md:py-3'>
        <div className='flex gap-1 items-center bg-red text-white px-2 md:py-0.5'>
          <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
            star
          </span>
          <span className='text-xs font-normal'>{rating}</span>
        </div>
        <span className='text-xs text-gray-light'>•</span>
        <span className='text-xs font-normal px-2'>Ratings: {ratingCount}</span>
      </div>
    );
  }
};

export default Rating;
