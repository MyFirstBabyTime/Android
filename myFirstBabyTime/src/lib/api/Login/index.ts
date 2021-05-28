import apiDefault, {apiDefaultWithToken} from '..';

export const loginApi = async (id: string, pw: string) => {
  return await (await apiDefaultWithToken()).post('/login/parent', {id, pw});
};
