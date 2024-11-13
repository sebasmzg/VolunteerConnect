import { RegisterForm } from "../organism/user/RegisterForm"

export const RegisterTemplate = () => {
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-slate-400">
                <RegisterForm />
            </div>
        </div>
    )
}