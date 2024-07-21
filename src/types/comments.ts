import { User } from './user.ts';

type Comments = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type { Comments };
