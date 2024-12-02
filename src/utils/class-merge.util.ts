import { clsx, type ClassValue } from "clsx";

export const cn = (...classNames: ClassValue[]) => {
  return clsx(classNames);
};
