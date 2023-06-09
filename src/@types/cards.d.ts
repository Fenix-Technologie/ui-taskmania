export interface Card {
  _id: string;
  title: string;
  description: string;
  label: string;
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
}
