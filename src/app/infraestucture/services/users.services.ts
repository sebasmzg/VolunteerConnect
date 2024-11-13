import { PUsers } from "@/app/core/application/port/users.port";
import { HttpClient } from "../utils";
import {
  IUserResponse,
  UserData,
} from "@/app/core/application/dto/users/user-response.dto";
import { IUserRegister } from "@/app/core/application/dto/users/user-request.dto";
import { IRegisterResponse } from "@/app/core/application/dto/users/user-register-response.dto";
import { IUser } from "@/app/core/application/dto/users/user.dto";

export class UsersServices implements PUsers {
  private clientHttp: HttpClient;
  private basePath: string = "users";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getUsers(page: number, size: number): Promise<IUserResponse> {
    return await this.clientHttp.get(
      `${this.basePath}?page=${page}&size=${size}`
    );
  }

  async createUser(formData: FormData): Promise<IRegisterResponse> {
    return await this.clientHttp.post(this.basePath, formData);
  }

  async updateUser(id: number, user: IUser): Promise<UserData> {
    return await this.clientHttp.put(this.basePath, id, user);
  }
}
