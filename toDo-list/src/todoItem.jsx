function ToDoItem({ item, handleStatusChange }) {
  return (
    <li key={item.id} className={item.status == true ? "doneTask" : ""}>
      <input
        type="checkbox"
        name="taskCheck"
        checked={item.status}
        onChange={(e) => handleStatusChange(e, item.id)}
      />
      {item.name}
    </li>
  );
}

export default ToDoItem;
