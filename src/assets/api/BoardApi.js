import { api } from "../../config/network";

export const getBoardList = async () => {
  const res = await api("/boards", "GET");
  return res;
};

export const postBoard = async (data) => {
  const res = await api("/boards", "POST", data);
  return res;
};
