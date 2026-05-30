import { useState } from "react";
import { useCreateTask } from "../hooks/useTasks";

const TaskInput = ({ placeholder, buttonText }) => {
  const [text, setText] = useState("");
  const { mutate: addTask } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TaskInput;
