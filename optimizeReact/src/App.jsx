import { useEffect, useRef, useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [resultData, setResultData] = useState(null);
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setResultData(null);
    setInputVal(value);

    // Clear previous timer
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Set new debounce timer
    debounceRef.current = setTimeout(() => {
      fetchFunction(inputVal);
    }, 1000);
  };

  async function fetchFunction(query) {
    let filteredRes = null;
    const result = await fetch("data/products.json");
    const data = await result.json();

    filteredRes = data.products.filter((item) =>
      item.title.match(new RegExp(query, "i"))
    );

    setResultData(filteredRes);
  }

  return (
    <>
      <div className="main">
        <input
          type="search"
          name="searchText"
          value={inputVal}
          onInput={(e) => handleChange(e)}
        />
        {resultData && (
          <div className="showResults">
            {resultData.map((item) => {
              return <p key={item.title}>{item.title}</p>;
            })}
          </div>
        )}
        {inputVal && !resultData && <p>No result found!!</p>}
      </div>
    </>
  );
}

export default App;
