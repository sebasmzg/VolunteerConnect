import { PUsers } from "@/app/core/application/port/users.port";
import { HttpClient } from "../utils";
import {
  IUserResponse
} from "@/app/core/application/dto/users/user-response.dto";
import { IRegisterResponse } from "@/app/core/application/dto/users/user-register-response.dto";

export class UsersServices implements PUsers {
  private clientHttp: HttpClient;
  private basePath: string = "users";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getUsers(): Promise<IUserResponse> {
    return await this.clientHttp.get(
      this.basePath
    );
  }

  async createUser(formData: FormData): Promise<IRegisterResponse> {
    return await this.clientHttp.post(this.basePath, formData);
  }

}
