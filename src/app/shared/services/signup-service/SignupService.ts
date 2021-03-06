import { AxiosError } from "axios";
import { IRequestResult } from "../../interfaces/IRequestResult";
import { Api } from "../axios-config/AxiosConfig";

interface UserSignup {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const signup = async (user: UserSignup): Promise<IRequestResult> => {
    try {
        await Api.post('/SignUp', user);
        return { success: true };
    } catch (error) {
        const errors = error as AxiosError;
        
        const result: IRequestResult = { success: false, messages: [] };

        if (errors.response?.data) {
            errors.response.data.errors?.FirstName?.forEach((fieldError: string) => {
                result.messages?.push(fieldError)
            });

            errors.response.data.errors?.LastName?.forEach((fieldError: string) => {
                result.messages?.push(fieldError)
            });

            errors.response.data.errors?.Email?.forEach((fieldError: string) => {
                result.messages?.push(fieldError)
            });

            errors.response.data.errors?.Password?.forEach((fieldError: string) => {
                result.messages?.push(fieldError)
            });
        }

        return result;
    }
}

export const SignupService = {
    signup
}
