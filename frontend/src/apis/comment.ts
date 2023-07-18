import { CommentType } from "../types/comment";
import baseAxios from "./baseAxios";

export const getComments = async (commentId: number) => {
  const res = await baseAxios.get(`comments/${commentId}`);
  return res;
};

export const postComment = async (commentForm: CommentType) => {
  const res = await baseAxios.post(`comments`, commentForm);
  return res;
};

export const deleteComment = async (commentId: number) => {
  const res = await baseAxios.delete(`comments/${commentId}`);
  return res;
};

export const putComment = async (
  commentId: number,
  commentForm: CommentType
) => {
  const res = await baseAxios.put(`comments/${commentId}`, commentForm);
  return res;
};

export const getCommentListLatest = async (presentationId: number) => {
  const res = await baseAxios.get(`comments/list/latest/${presentationId}`);
  return res;
};

export const getCommentListChecked = async (presentationId: number) => {
  const res = await baseAxios.get(`comments/list/checked/${presentationId}`);
  return res;
};

export const putCommentCheck = async (commentId: number) => {
  const res = await baseAxios.put(`comments/check/${commentId}`);
  return res;
};