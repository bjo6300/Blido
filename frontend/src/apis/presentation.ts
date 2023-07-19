import { PresentationType } from "../types/presentation";
import baseAxios from "./baseAxios";

// 단일 presentation 정보 API
export const getPresentation = async (id: number) => {
  const res = await baseAxios.get<PresentationType>(`presentations/${id}`);
  return res;
};

export const postPresentation = async (
  presentationForm: Omit<PresentationType, "id">
) => {
  const res = await baseAxios.post<PresentationType>(
    "presentations",
    presentationForm
  );
  return res;
};

export const putPresentation = async (
  id: number,
  presentationForm: Omit<PresentationType, "id">
) => {
  const res = await baseAxios.put<PresentationType>(
    `presentations/${id}`,
    presentationForm
  );
  return res;
};

export const deletePresentation = async (id: number) => {
  const res = await baseAxios.delete<string>(`presentations/${id}`);
  return res;
};

// 복수 presentation 정보 API
export const getPresentationList = async () => {
  const page = 0;
  const size = 10;

  const res = await baseAxios.get<PresentationType[]>(
    `presentations/list?page=${page}&size=${size}`
  );
  return res;
};