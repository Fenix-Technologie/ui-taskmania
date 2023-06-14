export interface ICard {
  _id: string;
  title: string;
  description: string;
  background: string
  members: [
    {
      user: string;
      name: string;
    }
  ];
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
