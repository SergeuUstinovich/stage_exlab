export function validateError(error: any): Promise<never> {
    if(error.response) {
        const nonFieldErrors = error.response.data.errors.non_field_errors || ['Возникла ошибка'];
        throw new Error(nonFieldErrors.join(' '));
    }
    throw new Error('Возникла неизвестная ошибка');
}

export function validateErrorForgotEmail(error: any): Promise<never> {
    if(error.response) {
        const nonFieldErrors = error.response.data.errors || 'Возможны проблемы с сетью';
        throw new Error(nonFieldErrors);
    }
    throw new Error('Возникла неизвестная ошибка');
}