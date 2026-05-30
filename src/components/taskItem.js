import { useState } from "react";
import { useDeleteTask, useUpdateTask } from "../hooks/useTasks";

const TaskItem = ({ task, texts }) => {
  const { mutate: deleteTask } = useDeleteTask();
  const { mutate: updateTask } = useUpdateTask();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const toggleComplete = () => {
    updateTask({
      id: task._id,
      updates: { completed: !task.completed },
    });
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  const startEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    updateTask({
      id: task._id,
      updates: { text: editText },
    });
    setIsEditing(false);
  };

  // مدیریت کلیدهای کیبورد (Enter برای ذخیره و Escape برای لغو)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") {
      setEditText(task.text); // بازگرداندن متن قبلی
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus // برای اینکه بلافاصله فوکوس روی اینپوت برود
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <button onClick={saveEdit}>{texts.save}</button>
        ) : (
          <button onClick={startEdit}>{texts.edit}</button>
        )}
        <button onClick={handleDelete}>{texts.delete}</button>
      </div>
    </li>
  );
};

export default TaskItem;
