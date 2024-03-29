import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: "light" | "dark";
  variant?: "small" | "regular" | "large";
}

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  theme?: "light" | "dark";
  variant?: "small" | "regular" | "large";
}

export enum CourseTypeEnum {
  All = "All",
  Marketing = "Marketing",
  Management = "Management",
  Recruting = "Recruting",
  Design = "Design",
  Development = "Development",
}

export enum EventTypeEnum {
  All = "All",
  MasterClass = "Online master-class",
  Lecture = "Online lecture",
  Workshop = "Online workshop",
}

export enum BlogTabsTypeEnum {
  All = "All",
  Article = "Articles",
  Video = "Videos",
  Podcast = "Podcasts",
}

export interface ILesson {
  numberOfItem: string;
  head: string;
  text: string;
}

export interface ICourse {
  id: number | string;
  type: CourseTypeEnum;
  title: string;
  price: string | number;
  author: string;
  imgName: string;
}

export interface ICurator {
  coursesCount: number;
  job: string;
  name: string;
  rating: number;
  socialMediaLinks: string[];
  studentsCount: number;
  text: string;
}

export interface ISpeaker {
  job: string;
  name: string;
  socialMediaLinks: string[];
  text: string;
  companies: string[];
}

export interface ICourseContent {
  id: number;
  data: {
    about: string;
    curator: ICurator;
    discount: number;
    info: {
      date: string;
      duration: string;
      price: number;
    };
    listForWhom: string[];
    steps: IStepData[];
    title: string;
    whatWillULearn: {
      lessons: ILesson[];
    };
    willLearn: string[];
  };
}

interface ITheme {
  numberOfItem: string;
  head: string;
  text: string;
}

export interface IEventContent {
  id: number;
  data: {
    type: EventTypeEnum;
    title: string;
    info: {
      date: string;
      price: string | number;
    };
    themes: ITheme[];
    speaker: {
      name: string;
      job: string;
      text: string;
    };
    listForWhom: string[];
  };
}

export interface IEvent {
  id: number | string;
  date: {
    day: number | string;
    month: number | string;
    time: number | string;
  };
  text: {
    title: string;
  };
  type: EventTypeEnum;
}

export interface IDirectionData {
  imgUrlWithExtension: string;
  type: CourseTypeEnum;
  paragraph: ReactNode;
  button: ReactNode;
}

export interface ITeam {
  imgName: string;
  name: string;
  job: string;
  id: number;
}

export type PostType = "podcast" | "article" | "video";

export interface IBlogCard {
  type: PostType;
  imgName: string;
  details: {
    theme: CourseTypeEnum;
    date: string;
    duration: string;
  };
  title: string;
  p: string;
  id: number;
}

export interface IPostContent {
  type: PostType;
  theme: CourseTypeEnum;
  img: string;
  title: string;
  date: string;
  duration: string;
  author: Pick<ICurator, "name" | "job" | "socialMediaLinks">;
  content: string;
  tags: string[];
}

export interface IStepData {
  head: string;
  p: string;
}
