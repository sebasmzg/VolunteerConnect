export interface IUserRegister {
    email: string;
    password: string;
    name: string;
    role: "organizer" | "volunteer";
    photo?: File;
}
