import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/taskService";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    }
  });
};
