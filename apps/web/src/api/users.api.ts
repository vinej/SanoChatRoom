import { api } from "./client";

export interface User {
  id: number;
  name: string;
}

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await api.get<User[]>("/users");
    return data;
  },
};
