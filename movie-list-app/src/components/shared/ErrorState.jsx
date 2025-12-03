export const ErrorState = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20" data-testid="error-state">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
      </svg>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};
