import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./toDoSlice";

function ToDoForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    if (e.target.value) setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && task.trim() !== "") dispatch(addToDo(task));
    setTask("");
  };
  return (
    <>
      <div>
        <form
          className="flex items-center w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="todo"
            value={task}
            className="h-15 border-[1px] border-gray-300 text-gray-800 p-2 outline-0 border-r-0 flex-1 basis-full"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            className="bg-orange-500 py-2 px-4 h-15 cursor-pointer text-white"
            value="Add"
          />
        </form>
      </div>
    </>
  );
}

export default ToDoForm;
