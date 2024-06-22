import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useMutate = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ url, body }: { url: string; body: object }) => {
      const response = await axios.post(url, body);
      return response.data;
    },
  });

  return { mutate };
};
