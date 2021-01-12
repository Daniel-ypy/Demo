import { User } from "../model/user";

export interface State {
  title: string;
  user: User;
  token: string;
}

export const state: State = {
  title: "",
  user: {
    userName: "",
    portrait: "",
    id: 0,
  },
  token: "",
};
