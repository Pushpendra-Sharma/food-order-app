const ShimmerMenu = () => {
  return (
    <div className="my-2 p-4 flex gap-8 justify-between items-center animate-pulse">
      <div className="flex-col flex gap-1 w-11/12 max-w-sm">
        <div className="bg-gray-shimmer h-5 w-5" />
        <div className="bg-gray-shimmer h-4 w-4/5 mt-2 rounded" />
        <div className="bg-gray-shimmer h-4 w-3/5 mb-2 rounded" />
        <div className="bg-gray-shimmer h-3 w-16 rounded" />
      </div>
      <div className="w-32 aspect-square bg-gray-shimmer rounded-md" />
    </div>
  );
};

export default ShimmerMenu;
