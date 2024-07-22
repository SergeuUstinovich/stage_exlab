export async function validateError(response: Response): Promise<Response> {
    if(!response.ok) {
        const errorObject = await response.json();
        const nonFieldErrors = errorObject.errors.non_field_errors || 'Возможны проблемы с сетью';
        throw new Error(nonFieldErrors);
    }
    return response
}

export async function validateErrorForgotEmail(response: Response): Promise<Response> {
    if(!response.ok) {
        const errorObject = await response.json();
        const nonFieldErrors = errorObject.errors || ['Возможны проблемы с сетью'];
        throw new Error(nonFieldErrors.join());
    }
    return response
}

export async function validateErrorConfirm(response: Response): Promise<Response> {
    if(!response.ok) {
        const errorObject = await response.json();
        const nonFieldErrors = errorObject.errors || 'Возможны проблемы с сетью';
        throw new Error(nonFieldErrors);
    }
    return response
}

export async function validateErrorConfirmPass(response: Response): Promise<Response> {
    if(!response.ok) {
        const errorObject = await response.json();
        const nonFieldErrors = errorObject.errors.errors || ['Возможны проблемы с сетью'];
        throw new Error(nonFieldErrors.join());
    }
    return response
}