import apiDefault, { apiDefaultWithToken } from '..';

export const settingBaby = async(
  name: string,
  birth: string,
  sex: string,
  profile_base64: string,
  parent_uuid,
) => {
  return (await apiDefaultWithToken()).post(`/parents/uuid/${parent_uuid}/children`, {
    name,
    birth,
    sex,
    profile_base64,
  });
};
