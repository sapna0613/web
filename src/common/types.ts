// Import required external types, if any
import { TFunction } from "react-i18next";  // ensure this import is used if necessary

// Define interfaces
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}

export interface MyType {
  property: string;
}

export type AnotherType = {
  id: number;
  name: string;
};

// Optional - Empty export to ensure TypeScript treats file as a module
export {};
