import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/tracksData.json");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return data;
}
