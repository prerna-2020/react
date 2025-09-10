function ColorBtn({ setColor }) {
  const colorList = [
    "black",
    "purple",
    "pink",
    "orange",
    "red",
    "blue",
    "green",
    "lightblue",
    "olive",
  ];

  return (
    <div
      className="absolute bottom-10 py-2 px-3 text-center bg-gray-800 shadow-lg shadow-gray-600 rounded-xl mx-50 left-0 right-0
    "
    >
      {colorList.map((item) => {
        return (
          <button
            key={item}
            className=" text-white py-1 px-3 rounded-lg text-sm cursor-pointer capitalize mx-3 my-2 outline-1 outline-white border-0 outline-offset-3"
            style={{ backgroundColor: item }}
            onClick={() => setColor(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ColorBtn;
