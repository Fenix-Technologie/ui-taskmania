import { IList } from "./list";
import { IUser } from "./user";

export type TactivityBoard = {
  text: string;
  date: Date;
};

export type TmembersBoard = {
  user: IUser;
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
