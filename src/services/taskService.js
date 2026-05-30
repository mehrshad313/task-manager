import api from "../lib/axios";

export const fetchTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};

export const createTask = async (text) => {
  const { data } = await api.post("/tasks", { text });
  return data;
};

export const updateTask = async ({ id, updates }) => {
  const { data } = await api.patch(`/tasks/${id}`, updates);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete(`/tasks/${id}`);
  return data;
};
