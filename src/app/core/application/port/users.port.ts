import { IRegisterResponse } from "../dto/users/user-register-response.dto"
import { IUserResponse, UserData } from "../dto/users/user-response.dto"

export interface PUsers {
    /**
     * Fetches the list of users.
     * @returns A promise that resolves to the users response.
     */
    getUsers(): Promise<IUserResponse>


    /**
     * Creates a new user.
     * @param user The user to create.
     * @returns A promise that resolves to the created user.
     */
    createUser(formData: FormData): Promise<IRegisterResponse>

}