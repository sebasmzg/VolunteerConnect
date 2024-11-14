export interface IUserResponse {
    statusCode: number;
    message:    string;
    data:       UserData[];
}

export interface UserData {
    id:       number;
    email:    string;
    password: string;
    name:     string;
    role:     Role;
    photo:    null | string;
}

export enum Role {
    Organizer = "organizer",
}

export interface Organizer {
    id:    number;
    email: string;
    role:  string;
}