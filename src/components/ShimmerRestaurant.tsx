const ShimmerRestaurant = () => {
  return (
    <div className="border border-white rounded p-4 shadow h-28 flex gap-4 items-center animate-pulse md:w-72 md:h-96 md:flex-col">
      <div className="w-24 h-24 bg-gray-shimmer rounded-md md:w-64 md:h-40" />
      <div className="flex-col flex gap-2 md:gap-4 w-full max-w-sm">
        <div className="bg-gray-shimmer h-4 rounded" />
        <div className="h-4 flex gap-2 w-full md:hidden">
          <div className="bg-gray-shimmer h-3 w-1/2 rounded" />
          <div className="bg-gray-shimmer h-3 w-1/2 rounded" />
        </div>
        <div className="bg-gray-shimmer h-3 rounded" />
        <div className="h-4 flex gap-2 w-full">
          <div className="bg-gray-shimmer h-3 w-1/2 rounded md:w-1/3" />
          <div className="bg-gray-shimmer h-3 w-1/2 rounded md:w-1/3" />
          <div className="bg-gray-shimmer h-3 w-1/3 rounded hidden md:block" />
        </div>
        <div className="hidden md:block bg-gray-shimmer h-6 rounded" />
        <div className="hidden md:block bg-gray-shimmer h-4 rounded" />
      </div>
    </div>
  );
};

export default ShimmerRestaurant;
