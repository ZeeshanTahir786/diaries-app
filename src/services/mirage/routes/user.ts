import { User } from "../../../interfaces/user.interface";
import { Request, Response } from "miragejs";
import { randomBytes } from "crypto";
import { handleErrorHandlers } from "../server";

const generateToken = () => randomBytes(8).toString("hex");

export interface AuthResponse {
  token: string;
  user: User;
}
const login = (schema: any, req: Request): AuthResponse | Response => {
  const { username, password } = JSON.parse(req.requestBody);
  const user = schema.users.findBy({ username });
  const token = generateToken();
  if (!user) {
    return handleErrorHandlers(null, "No user with that username exists");
  }
  if (!password) {
    return handleErrorHandlers(null, "Password is incorrect");
  }
  return {
    user: user.attrs as User,
    token,
  };
};
const signup = (schema: any, req: Request): AuthResponse | Response => {
  const data = JSON.parse(req.requestBody);
  const exUser = schema.users.findBy({ username: data.username });
  if (!exUser) {
    return handleErrorHandlers(
      null,
      "A user with that username already exists."
    );
  }
  const user = schema.users.create(data);
  const token = generateToken();
  return {
    user: user.attrs as User,
    token,
  };
};
export default {
  login,
  signup,
};
