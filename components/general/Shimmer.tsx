const ShimmerCard = () => {
  return (
    <div className="animate-pulse p-2 border border-gray-200 rounded-md">
      <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};
export default ShimmerCard;
