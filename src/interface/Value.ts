import { UserAuth } from "./UserAuth";

export interface Value {
  user: UserAuth|null;
  logout: () => void;
  setUser: (values: UserAuth|null) => void;
}
