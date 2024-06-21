export function registerUser(first_name:string, email:string, password1:string, password2:string):Promise<object | undefined> {
    return fetch("api/auth/register/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({first_name, email, password1, password2})
    }).then( async (response) => {
        if(response.ok){
            return undefined;
        } 
        if(!response.ok) {
            const errorBody = await response.json();
            const errorMessage = errorBody?.errors.email || errorBody?.message || 'Возможны проблемы с сетью';
            return errorMessage
        }
        throw new Error("Ошибка сервера");
    }).catch((error) => {
        console.log(error)
    })
}

export function verifyEmail(code:string):Promise<object | undefined> {
    return fetch('api/auth/verify-email/', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({code})
    }).then( async (response) => {
        if(response.ok){
            return undefined;
        } 
        if(!response.ok) {
            const errorBody = await response.json();
            const errorMessage = errorBody?.errors.non_field_errors || errorBody?.message || 'Возможны проблемы с сетью';
            return errorMessage
        }
        throw new Error("Ошибка сервера");
    }).catch((error) => {
        console.log(error)
    })
}

// export async function ErrorRegist(url:string, data?:object):Promise<Response> {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
//     if (!response.ok) {
//         const errorBody = await response.json();
//         const errorMessage = errorBody?.status + " " + errorBody?.errors || errorBody?.message || 'Network response was not ok';
//         throw new Error(errorMessage);
//     }
//     return response.json()
// }