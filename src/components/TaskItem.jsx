function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        onClick={() => toggleTask(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
    </li>
  );
}

export default TaskItem;