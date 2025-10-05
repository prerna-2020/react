import { useCallback, useEffect, useMemo, useState } from "react";

function DbData() {
  const [count, setCount] = useState(0);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let newList = [];
    for (let i = 1; i <= 5; i++) {
      newList.push({ id: i, title: `data${i}` });
    }
    setDataList(newList);
  }, []);

  const listRender = useMemo(() => {
    return dataList.map((item, index) => {
      console.log("rendering...");
      return (
        <tr key={item.title}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      );
    });
  }, [dataList]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{listRender}</tbody>
      </table>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count :: {count}
      </button>
    </>
  );
}

export default DbData;
