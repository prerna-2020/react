import { useEffect, useState } from "react";

export default function Timer() {
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(
      () => setNowTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <p>{nowTime}</p>
    </>
  );
}
