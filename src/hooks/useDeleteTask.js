import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../services/taskService";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    }
  });
};
