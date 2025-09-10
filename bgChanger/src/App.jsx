import { useState } from "react";
import ColorBtn from "./colorBtn";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen relative text-center"
        style={{ backgroundColor: color }}
      >
        <ColorBtn setColor={setColor} />
      </div>
    </>
  );
}

export default App;
