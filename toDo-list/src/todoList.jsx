import { useState } from "react";
import ToDoItem from "./todoItem";

function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    let idVal = "task" + (taskList.length + 1);

    if (task !== "")
      setTaskList([...taskList, { id: idVal, name: task, status: false }]);
    else alert("enter task");
    setTask("");
  };

  const handleStatusChange = (e, id) => {
    console.log("change to fulfill", e.target.checked, e);
    taskList.map((item) => {
      if (item.id == id) {
        item.status = e.target.checked;
        console.log("item", item);

        setTaskList([...taskList]);
      }
    });
  };

  return (
    <div className="main">
      <h2>To-Do-List</h2>
      <div className="inputArea">
        <textarea
          name="task"
          is="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        ></textarea>
        <button type="button" name="addTask" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="showTask">
        <p>
          <span>
            {taskList.length > 0 ? "Pending Task :" : "No Task Added"}
          </span>
          <span>
            {taskList.length > 0
              ? taskList.filter((item) => item.status != true).length
              : ""}
          </span>
        </p>
        <ul className="taskItem">
          {taskList.map((item, index) => {
            return (
              <ToDoItem
                item={item}
                key={index}
                handleStatusChange={handleStatusChange}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
