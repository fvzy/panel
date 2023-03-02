import { LoginResponse } from '@/api/auth/login';
import http from '@/api/http';

export interface RegisterData {
    username: string;
    password: string;
    email: string;
    nameFirst: string;
    nameLast: string;
    recaptchaData?: string | null;
}

export default ({ username, password, email, nameFirst, nameLast, recaptchaData }: RegisterData): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        http.post('/auth/register', {
            username,
            password,
            email,
            nameFirst,
            nameLast,
            'g-recaptcha-response': recaptchaData,
        })
            .then(response => {
                if (!(response.data instanceof Object)) {
                    return reject(new Error('An error occurred while processing the register request.'));
                }

                return resolve({
                    complete: response.data.data.complete,
                    intended: response.data.data.intended || undefined,
                    confirmationToken: response.data.data.confirmation_token || undefined,
                });
            })
            .catch(reject);
    });
};
