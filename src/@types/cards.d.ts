export type TMembers = {
  user: string
  name: string
}

export interface ICard {
  _id: string;
  title: string;
  description: string;
  background: string
  members: TMembers[];
  checklist?: [
    {
      text: string;
      complete: Boolean;
    }
  ];
  archived: Boolean;
  createdAt: Date;
  updatedAt: Date;
  deadline: string;
  priority: string;
}
