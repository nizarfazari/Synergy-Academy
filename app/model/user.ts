import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  username!: string;
  email!: string;
  password!: string;
  token!: string;
}

export type Users = ModelObject<UserModel>;

export function UserResponse(user: Users) {
  return {
    token: user.token,
    email: user.email,
  };
}
