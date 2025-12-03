export const ShimmerDetail = () => {
  return (
    <div className="animate-pulse p-4 max-w-4xl mx-auto">
      <div className="bg-gray-300 h-6 w-20 mb-4"></div>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="bg-gray-300 h-80 w-64"></div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="bg-gray-300 h-6 w-20 mb-4"></div>
            <div className="bg-gray-300 h-20 mb-3"></div>
            <div className="bg-gray-300 h-6 w-10 mb-1"></div>
            <div className="bg-gray-300 h-6 w-52 mb-1"></div>
            <div className="bg-gray-300 h-6 w-52 mb-1"></div>
            <div className="bg-gray-300 h-6 w-52 mb-1"></div>
            <div className="bg-gray-300 h-6 w-52 mb-4"></div>
            <div className="bg-gray-300 h-6 w-20 mb-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
