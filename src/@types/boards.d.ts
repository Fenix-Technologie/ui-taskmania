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
  title: string;
  description: string;
  lists: string[];
  activity: TactivityBoard[];
  backgroundURL: string;
  members: TmembersBoard[];
  createdAt: Date;
  updatedAt: Date;
}
