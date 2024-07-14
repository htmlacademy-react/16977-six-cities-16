import { User } from './user.ts';

type Authorization = {
  'email': string;
  'token': string;
};

type AuthorizedUser = Authorization | User;

export type { AuthorizedUser };
