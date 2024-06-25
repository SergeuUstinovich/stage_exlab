export async function validateResponse(response: Response): Promise<Response> {
    if(!response.ok) {
        const errorObject = await response.json();
        const nonFieldErrors = errorObject.errors.non_field_errors || 'Возможны проблемы с сетью';
        throw new Error(nonFieldErrors);
    }
    return response
}