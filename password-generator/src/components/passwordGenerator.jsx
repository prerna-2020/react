import { useEffect, useState, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef();

  useEffect(() => {
    console.log("inside method");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl m-7 font-bold">Password Generator</h1>
      <div className="bg-gray-900 text-white p-6 my-7 mx-auto w-[500px] rounded-2xl">
        <div className="flex my-4">
          <input
            type="text"
            name="password"
            value={password}
            ref={passwordRef}
            className="bg-white border-0 py-3 px-4 w-99 rounded-tl-xl rounded-bl-xl focus:outline-0 text-orange-400 tracking-wider"
            readOnly
          />
          <button
            type="button"
            className="bg-orange-400 py-3 px-3 rounded-tr-xl rounded-br-xl"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <input
              type="range"
              name="length"
              value={length}
              className="mr-2 cursor-pointer"
              min="5"
              max="20"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length : {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="numbers"
              checked={numAllowed}
              className="mr-2 cursor-pointer"
              onChange={(e) => setNumAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="character"
              checked={charAllowed}
              className="mr-2 cursor-pointer"
              onChange={(e) => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
