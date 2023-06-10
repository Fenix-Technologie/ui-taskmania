import { ICard } from "./cards";

export interface IList {
  _id: string;
  title: string;
  cards?: ICard[];
  archived: Boolean;
}
