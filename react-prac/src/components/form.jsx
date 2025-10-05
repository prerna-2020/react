import { useEffect, useRef, useState } from "react";
function Form() {
  const inputRef = useRef();
  const audioRef = useRef();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputText}
        ref={inputRef}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <br />
      <audio src="audio/audio1.mp3" ref={audioRef} controls></audio>
      <button onClick={() => audioRef.current.play()}>Play audio</button>{" "}
      &nbsp;&nbsp;
      <button onClick={() => audioRef.current.pause()}>Pause audio</button>
    </>
  );
}

export default Form;
