import React from "react";

export interface emailInputProps {
  label: string;
  placeholder: string;
  type: string;
  setValue: Function;
}

export interface emailInputPropsFade {
  id?: string;
  label?: string;
  placeholder: string;
  type: string;
  setValue?: Function;
  value?: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface pwInputProps {
  id: string;
  label?: string;
  placeholder: string;
  setValue?: Function;
  value: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface searchInputProps {
  placeholder: string;
  type: string;
  setValue: Function;
}

export interface dropDownProps {
  label: string;
  placeholder: string;
  type: string;
  data: {
    id: number;
    name: string;
  }[];
  value?: string;
  setValue: Function;
  iClass?: string;
}

export interface dropDownPropsFade {
  label: string;
  placeholder: string;
  type: string;
  data: any;
  setValue: Function;
  value: any;
  error?: string;
}

export interface sidebarLink {
  id: number;
  title: String;
  route: String;
}

export interface incubateeData {
  name: string;
  LGA: string;
  phoneNumber: number;
  status: string;
  date: string;
  time: string;
}

export interface loginDetails {
  request: string;
  access: string;
}

export interface fileUploadProps {
  label: string;
  setSelectedImage: Function;
}

export interface fetchType {
  method: string;
  url: string;
  // headers?: {}
}

export interface signUpType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface loginType {
  email: string;
  password: string;
  confirmPassword: string;
}

export type statusType = "pending" | "done" | "failed";

export interface IndicatorProps {
  text: string;
  status: statusType;
}

export interface courseData {
  id: string;
  videos: string;
  title: string;
  isCompleted: boolean;
  instructor: string;
  total: number;
  completed: number;
  photo: string;
}

export interface onboardingPanelProps {
  data: courseData[];
  action: () => void;
  loading: boolean;
  // setIsPlaying :  Function;
  // setCurrentId: Function;
}

export interface SWWType {
  action?: () => void;
  actionText?: string;
  message?: string;
}

export interface CardData {
  data: courseData;
  action: () => void;
}

export interface CourseProps {
  ongoing: courseData[];
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: React.ReactNode;
}

export interface UserDetails {
  id: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: string | null;
  photo: string | null;
  user_type: string | null;
  phone_number: string | null;
}

export interface AnalyticsCardProps {
  count: number;
  label: string;
  icon: string;
  to: string;
}

interface result {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}
interface annResult {
  id: number;
  title: string;
  message: string;
  date: string;
}

export interface TableProps {
  data: {
    results: result[];
  };
  loading: boolean;
}

export interface AnnouncementTableProps {
  data: {
    results: annResult[];
  };
  loading: boolean;
  action: (message: string) => void;
}

export interface button {
  cta?:() => void;
  text: string;
  pClass?: string;
  btnClass?: string;
  image?:string;
}


export interface socialType{
  data: {
    id: number;
    text: string;
    to: string;
    image: 'string';
    description: string;
    channel: string;
  },
  btnClass?: string;
}

export interface ImageData {
  art: string;
  title:  string;
  description: string;
  cta?: () => void;
}

export interface ImageProps {
  data: ImageData;
  button?: button;
}

export interface NavProps {
  language?: string;
  text: string;
  route: string;
  action?: () => void;
  classes?: string;
  pClass?: string
}