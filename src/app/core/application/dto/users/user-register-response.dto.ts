import { IUser } from "./user.dto";

export interface IRegisterResponse {
    statusCode: number;
    message:    string;
    data:       IUser;
}