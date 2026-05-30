import React from "react";
import "./App.css";

import TaskList from "./components/taskList";
import TaskInput from "./components/taskInput";
import FilterButtons from "./components/FilterButtons";

import useUIStore from "./store/uiStore";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { language, setLanguage, filter } = useUIStore();

  const { data: tasks = [], isLoading, error } = useTasks();

  const texts = {
  fa: {
    title: "مدیریت تسک",
    addTask: "اضافه کردن تسک",
    placeholder: "تسک جدید را وارد کنید",
    noTasks: "هیچ تسکی وجود ندارد",
    language: "زبان",
    // بخش جدید:
    filters: { all: "همه", active: "انجام نشده", completed: "انجام شده" },
    actions: { edit: "ویرایش", delete: "حذف", save: "ذخیره" }
  },
  en: {
    title: "Task Manager",
    addTask: "Add Task",
    placeholder: "Enter a new task",
    noTasks: "No tasks found",
    language: "Language",
    // بخش جدید:
    filters: { all: "All", active: "Active", completed: "Completed" },
    actions: { edit: "Edit", delete: "Delete", save: "Save" }
  },
};


  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks</p>;

  return (
    <div className="app">
      <div className="language-switcher">
        <label>{texts[language].language}: </label>
        <button onClick={() => setLanguage("fa")}>فارسی</button>
        <button onClick={() => setLanguage("en")}>English</button>
      </div>

      <h1>{texts[language].title}</h1>

      <TaskInput
        placeholder={texts[language].placeholder}
        buttonText={texts[language].addTask}
      />

      <FilterButtons />

<TaskList
  tasks={filteredTasks}
  noTasksText={texts[language].noTasks}
  texts={texts[language].actions} // اینجا آبجکت دکمه‌های Edit و Delete ارسال می‌شود
/>

    </div>
  );
}

export default App;
