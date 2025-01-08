import { TFunction } from "react-i18next";

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  image?: {
    url: string;
    width?: number;
    height?: number;
    horizontalAlign?: "left" | "center" | "right";
    verticalAlign?: "top" | "center" | "bottom";
    scale?: number;
    rotation?: number;
  };
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
