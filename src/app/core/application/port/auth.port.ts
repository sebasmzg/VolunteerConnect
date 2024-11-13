import { ILoginResponse } from "../dto/auth/login-request.dto";
import { ILoginRequest } from "../dto/auth/login-response.dto";


export interface PAuth {
    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para iniciar sesión
     */
    login(req: ILoginRequest): Promise<ILoginResponse>
}