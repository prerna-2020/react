import BoardItems from "./BoardItems";
import { useBoardContext } from "./context/BoardContext";

function Board() {
  const { boardIndex, loading } = useBoardContext();

  return (
    <>
      <section className={` text-center roboto relative`}>
        <div className="w-60  mx-auto grid grid-cols-3 gap-1">
          {boardIndex &&
            boardIndex.map((item, index) => {
              return (
                <BoardItems
                  key={`item_${index}`}
                  itemIn={index}
                  itemVal={item}
                />
              );
            })}
        </div>

        {loading && (
          <div className="absolute top-0 left-0  bottom-0  bg-white opacity-50 right-0 flex justify-center items-center">
            <svg
              className="animate-spin h-8 w-8 text-violet-950"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Loading"
            >
              <circle
                className="opacity-50"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        )}
      </section>
    </>
  );
}

export default Board;
