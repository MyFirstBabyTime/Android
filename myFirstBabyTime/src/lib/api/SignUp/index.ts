import apiDefault from '../index';
import {ResDefault} from '../../payloads';
import {SignUpRes} from '../../payloads/SignUpPayload';
export const certifyPhone = (phone_number: string) => {
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certify-code`,
    {},
  );
};
export const certifyCode = (code: string, phone_number: string) => {
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certification`,
    {certify_code: parseInt(code)},
  );
};

export const signUp = (
  id: string,
  pw: string,
  name: string,
  phone_number: string,
  profileImg: object,
) => {
  return apiDefault().post<SignUpRes>('/parents', {
    id,
    pw,
    name,
    phone_number,
    profile_base64: `data:image/png;base64,${profileImg['base64']}`,
  });
};

export const checkOverlapId = (parent_id) =>{
  return apiDefault().get(`/parents/id/${parent_id}/existence`);
}