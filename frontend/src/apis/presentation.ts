import { PresentationType } from "../types/presentation";
import baseAxios from "./baseAxios";

export const getPresentation = async (id: number) => {
  const res = await baseAxios.get(`presentations/${id}`);
  return res.data;
};

export const postPresentation = async (presentationForm: PresentationType) => {
  const res = await baseAxios.post("presentations", presentationForm);
  return res.data;
};

export const putPresentation = async (id: number, presentation: any) => {
  const res = await baseAxios.put(`presentations/${id}`, presentation);
  return res.data;
};

export const deletePresentation = async (id: number) => {
  const res = await baseAxios.delete(`presentations/${id}`);
  return res.data;
};

export const getPresentationList = async () => {
    const res = await baseAxios.get("presentations/list?page=0&size=10");
    return res.data;
  };