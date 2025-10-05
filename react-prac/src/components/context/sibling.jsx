import { useContext } from "react";
import { DataContext } from "../../App";

function Sibling() {
  const data = useContext(DataContext);
  return (
    <>
      <p>
        I am a sibling from {data.country}, speaks {data.nativeLang}{" "}
      </p>
    </>
  );
}

export default Sibling;
