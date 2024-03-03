import Button from "./Button";

export default function Pagination({
  handleNextPage,
  handlePrevPage,
  currentPage,
  disabled,
}) {
    const color = disabled ? "text-gray-400" : "text-black";
  return (
    <div>
      <div className="flex items-center justify-center">
        <Button onClick={handlePrevPage} disabled={disabled}>
          <svg
            className={`h-8 w-8 ${color} pointer`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Button>
        <span className={`${color}`}>
          {currentPage}
        </span>
        <Button onClick={handleNextPage} disabled={disabled}>
          <svg
            className={`h-8 w-8 ${color} pointer`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
