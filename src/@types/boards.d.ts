import { IList } from "./list";

export type TactivityBoard = {
  text: string;
  date: Date;
};

export type TmembersBoard = {
  _id: string;
  user: string;
  name: string;
  role: string;
};

export interface Iboard {
  _id: string;
  title: string;
  description: string;
  lists: IList[];
  activity: TactivityBoard[];
  backgroundURL: string;
  members: TmembersBoard[];
  createdAt: Date;
  updatedAt: Date;
}
