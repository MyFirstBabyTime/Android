import apiDefault from ".."

export const loginApi = (id : string, pw : string) =>{
    return apiDefault().post('/login/parent', {id, pw})
}