export async function errorMessage(response:Response):Promise<object | undefined> {
    if(response.ok){
        return undefined;
    } 
    if(!response.ok) {
        const errorBody = await response.json();
        const errorMessage = errorBody?.errors.non_field_errors || 'Возможны проблемы с сетью';
        return errorMessage
    }
    throw new Error("Ошибка сервера");
}