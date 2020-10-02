export class Question {
  id: string;
  text: string;
  answerId: string;
  category: Category;
}

export class Answer {
  id: string;
  label: string;
}

export enum Category {
  CITIES = 'CITIES',
  PIRATES = 'PIRATES',
  ANIMALS = 'ANIMALS',
}