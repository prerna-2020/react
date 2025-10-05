import { useEffect, useState } from "react";

function useLocalStorage(keyToCheck, keyValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let fetchFromStore = localStorage.getItem(keyToCheck);
      return fetchFromStore ? JSON.parse(fetchFromStore) : keyValue;
    } catch (err) {
      console.log(err);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (keyValue) {
        localStorage.setItem(keyToCheck, JSON.stringify(keyValue));
        setStoredValue(keyValue);
      }
    } catch (error) {
      console.log("Error in saving item");
    }
  }, [keyToCheck, keyValue]);
}

export default useLocalStorage;
