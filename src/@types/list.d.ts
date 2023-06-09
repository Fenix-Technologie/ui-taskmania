import { Card } from "./cards";

export interface IList {
  _id: string;
  title: string;
  cards?: Card[];
  archived: Boolean;
}
