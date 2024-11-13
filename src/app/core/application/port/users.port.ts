import { IRegisterResponse } from "../dto/users/user-register-response.dto"
import { IUserRegister } from "../dto/users/user-request.dto"
import { IUserResponse, UserData } from "../dto/users/user-response.dto"
import { IUser } from "../dto/users/user.dto"

export interface PUsers {
    /**
     * Fetches the list of users.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the users response.
     */
    getUsers(page: number, size: number): Promise<IUserResponse>


    /**
     * Creates a new user.
     * @param user The user to create.
     * @returns A promise that resolves to the created user.
     */
    createUser(user: IUserRegister): Promise<IRegisterResponse>

    /**
     * Updates a user.
     * @param id The id of the user to update.
     * @param user The user to update.
     * @returns A promise that resolves to the updated user.
     */
    updateUser(id: number, user: IUser): Promise<UserData>

}