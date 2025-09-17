import { useDispatch } from "react-redux";
import { removeToDo, updateToDo, toggleIsComplete } from "./toDoSlice";
import { useState } from "react";

function ToDoItem({ todo }) {
  const dispatch = useDispatch();

  const [toggleInput, setToggleInput] = useState(false);
  const [currItem, setCurrItem] = useState(todo.text);

  const handleTodoUpdate = () => {
    dispatch(updateToDo({ id: todo.id, text: currItem }));
    setToggleInput(false);
  };

  return (
    <li className="flex justify-center items-center">
      <input
        type="checkbox"
        name="todoComplete"
        className="cursor-pointer mr-3"
        checked={todo.isCompleted}
        onChange={(e) =>
          dispatch(
            toggleIsComplete({ id: todo.id, isCompleted: e.target.checked })
          )
        }
      />

      <input
        type="text"
        name="todoItem"
        className={`flex-2 border-0 p-2 capitalize ${
          toggleInput ? "outline-1" : "outline-0"
        } ${
          todo.isCompleted ? "line-through text-gray-400" : "text-gray-800 "
        }`}
        value={currItem}
        readOnly={toggleInput ? false : true}
        onChange={(e) => setCurrItem(e.target.value)}
      />
      {todo.isCompleted === false &&
        (toggleInput ? (
          <button
            className="mx-4 cursor-pointer text-green-800 font-extrabold"
            onClick={handleTodoUpdate}
          >
            &#x2713;
          </button>
        ) : (
          <button
            className="mx-4 cursor-pointer"
            onClick={() => setToggleInput(true)}
          >
            &#x2712;
          </button>
        ))}
      <button
        className="cursor-pointer"
        onClick={() => dispatch(removeToDo(todo.id))}
      >
        &#x274C;
      </button>
    </li>
  );
}

export default ToDoItem;
