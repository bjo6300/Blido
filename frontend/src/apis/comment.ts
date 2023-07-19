import { CommentType } from "../types/comment";
import baseAxios from "./baseAxios";

export const getComment = async (commentId: number) => {
  const res = await baseAxios.get<CommentType>(`comments/${commentId}`);
  return res;
};

export const postComment = async (
  commentForm: Omit<CommentType, "commentId" | "createdDate">
) => {
  const res = await baseAxios.post<CommentType>(`comments`, commentForm);
  return res;
};

export const deleteComment = async (commentId: number) => {
  const res = await baseAxios.delete<string>(`comments/${commentId}`);
  return res;
};

export const putComment = async (
  commentId: number,
  commentForm: Omit<CommentType, "commentId" | "createdDate">
) => {
  const res = await baseAxios.put<CommentType>(
    `comments/${commentId}`,
    commentForm
  );
  return res;
};

export const getCommentListLatest = async (presentationId: number) => {
  const res = await baseAxios.get<CommentType[]>(
    `comments/list/latest/${presentationId}`
  );
  return res;
};

export const getCommentListChecked = async (presentationId: number) => {
  const res = await baseAxios.get<CommentType[]>(
    `comments/list/checked/${presentationId}`
  );
  return res;
};

export const putCommentCheck = async (commentId: number) => {
  const res = await baseAxios.put<CommentType>(`comments/check/${commentId}`);
  return res;
};