import ToDoForm from "./todo/toDoForm";
import ToDoItem from "./todo/toDoItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state) => state.todos);
  const [filters] = useState(["All", "Pending", "Completed"]);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    if (!localStorage.getItem(todos))
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const handleFilterChange = (val) => {
  //   setCurrentFilter(val);
  //   if(val)
  // };

  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-center">
        <h1
          className="text-3xl py-6 text-white
        "
        >
          ToDos
        </h1>
        <div className="w-[650px] bg-white mx-auto rounded-2xl shadow-[2px 2px 5px black] shadow-white p-6">
          <ToDoForm />
          {todos.length > 0 && (
            <div className="flex items-center mt-3">
              <p className="text-gray-600 text-xs italic text-left flex-1">
                Mark All Completed
              </p>
              {filters && (
                <ul className="list-none flex justify-end items-center">
                  {filters.map((item, index) => {
                    return (
                      <li
                        key={item}
                        className="text-xs italic cursor-pointer"
                        onClick={() => setCurrentFilter(item)}
                      >
                        <span
                          className={`${
                            currentFilter === item
                              ? "text-gray-950 font-semibold"
                              : "text-gray-600 "
                          }`}
                        >
                          {item}
                        </span>
                        <span
                          className={`ml-1 ${
                            currentFilter === item
                              ? "text-gray-950 font-semibold"
                              : "text-gray-600 "
                          }`}
                        >
                          ({item === "All" && todos.length}
                          {item === "Pending" &&
                            todos.filter((todo) => todo.isCompleted === false)
                              .length}
                          {item === "Completed" &&
                            todos.filter((todo) => todo.isCompleted === true)
                              .length}
                          )
                        </span>
                        {index !== filters.length - 1 && (
                          <span className="mx-1">|</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
          {todos.length > 0 && (
            <ul className="my-5">
              {todos.map((todo) => {
                if (currentFilter === "All")
                  return <ToDoItem todo={todo} key={todo.id} />;
                else if (currentFilter === "Pending") {
                  if (todo.isCompleted === false)
                    return <ToDoItem todo={todo} key={todo.id} />;
                } else if (currentFilter === "Completed") {
                  if (todo.isCompleted === true)
                    return <ToDoItem todo={todo} key={todo.id} />;
                }
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
