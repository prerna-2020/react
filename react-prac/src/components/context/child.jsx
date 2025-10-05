import { useContext } from "react";
import { DataContext } from "../../App";

function Child() {
  const data = useContext(DataContext);
  return (
    <>
      <p>
        we are {data.lastName} from {data.country} who speaks {data.nativeLang}
      </p>
    </>
  );
}

export default Child;
