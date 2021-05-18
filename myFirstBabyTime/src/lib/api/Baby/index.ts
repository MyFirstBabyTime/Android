import apiDefault from '..';

export const settingBaby = (
  name: string,
  birth: string,
  sex: string,
  profile_base64: string,
  parent_uuid,
) => {
  return apiDefault().post(`/parents/uuid/${parent_uuid}/children`, {
    name,
    birth,
    sex,
    profile_base64,
  });
};
