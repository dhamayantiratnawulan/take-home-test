export const ShimmerCard = () => {
  return (
    <div className="animate-pulse p-4 border rounded-lg w-full" data-testid="shimmer-card">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
    </div>
  );
};
