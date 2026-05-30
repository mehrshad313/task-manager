import TaskItem from "./taskItem";

const TaskList = ({ tasks, noTasksText, texts }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">{noTasksText}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} texts={texts} />
      ))}
    </ul>
  );
};

export default TaskList;
