import { useState, createContext } from "react";
import GrandParent from "./components/context/grandparent";
import Counter from "./components/counter";
import Timer from "./components/timer";
import DbData from "./components/dbData";
import Form from "./components/form";

export const DataContext = createContext();

function App() {
  const [data] = useState({
    lastName: "Thakkar",
    religion: "Punjabi",
    nativeLang: "Punjabi",
    country: "Canada",
  });

  return (
    <>
      <h2>useState() Hook</h2>
      <Counter />
      <h2>useEffect() Hook</h2>
      <Timer />
      <h2>useContext() Hook</h2>
      <DataContext.Provider value={data}>
        <GrandParent />
      </DataContext.Provider>
      <h2>useMemo() Hook</h2>
      <DbData />
      <h2>useRef() Hook</h2>
      <Form />
    </>
  );
}

export default App;
