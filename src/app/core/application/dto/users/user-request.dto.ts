export interface IUserRegister {
    email: string;
    password: string;
    name: string;
    role: "organizer" | "participant";
    photo: File;
}
