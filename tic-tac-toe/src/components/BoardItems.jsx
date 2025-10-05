import { useBoardContext } from "./context/BoardContext";
function BoardItems({ itemIn, itemVal }) {
  const { onTileClick, currentUser, userSelect, cpuSelect, winner } =
    useBoardContext();
  return (
    <>
      <button
        className={`w-full h-20  bg-violet-200 capitalize box-border text-2xl flex items-center justify-center ${
          itemVal === "" && currentUser !== "" && winner === ""
            ? "cursor-pointer"
            : "cursor-not-allowed"
        } ${itemVal === "X" ? " text-[#016630]" : " text-[#f43416]"}`}
        onClick={
          itemVal === "" && currentUser !== "" && winner === ""
            ? (e) =>
                onTileClick(
                  itemIn,
                  currentUser === "user" ? userSelect : cpuSelect
                )
            : undefined
        }
        title={itemVal}
        alt={`Tile ${itemIn + 1}, marked with ${itemVal || "empty"}`}
        aria-label={`Tile ${itemIn + 1}, marked with ${itemVal || "empty"}`}
      >
        {itemVal}
      </button>
    </>
  );
}

export default BoardItems;
