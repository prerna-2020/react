import ToDoForm from "./todo/toDoForm";
import ToDoItem from "./todo/toDoItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { markUnmarkAll } from "./todo/toDoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filters] = useState(["All", "Pending", "Completed"]);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    if (!localStorage.getItem(todos))
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-center">
        <h1
          className="text-3xl py-6 text-white
        "
        >
          ToDos
        </h1>
        <div className="w-full md:w-[650px] bg-white mx-auto md:rounded-2xl shadow-[2px 2px 5px black] shadow-white py-6 px-3 lg:p-6">
          <ToDoForm />
          {todos.length > 0 && (
            <div className="flex items-center mt-3 w-full justify-between">
              <div>
                <button
                  type="button"
                  className="py-1 px-1 md:px-4 border-[1px] md:border-2 border-orange-500  text-orange-500 italic text-xs text-center  mr-2 md:mr-4 font-semibold cursor-pointer"
                  onClick={() => dispatch(markUnmarkAll("markAll"))}
                >
                  Mark All
                </button>
                <button
                  type="button"
                  className="py-1 px-1 md:px-4 border-[1px] md:border-2 border-orange-500 text-orange-500 italic text-xs text-center md:mr-4 font-semibold cursor-pointer"
                  onClick={() => dispatch(markUnmarkAll("unmarkAll"))}
                >
                  Unmark All
                </button>
              </div>
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
            <ul className="my-5 ml-auto">
              {todos
                .filter((todo) => {
                  if (currentFilter === "All") return todo;
                  if (currentFilter === "Pending") return !todo.isCompleted;
                  if (currentFilter === "Completed") return todo.isCompleted;
                })
                .map((todo) => {
                  return <ToDoItem todo={todo} key={todo.id} />;
                })}
            </ul>
          )}
          {todos.length == 0 && (
            <p className="py-8 text-sm text-gray-400 "> No Task Added</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
