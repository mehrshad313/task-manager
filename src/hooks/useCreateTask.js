import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/taskService";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
