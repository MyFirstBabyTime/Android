import apiDefault from '../index';
import {ResDefault} from '../../payloads';
export const setUserSignUp = (
  id: number,
  pw: number,
  name: string,
  phone_number: number,
) => {
  return apiDefault().post<ResDefault>('/parents', {});
};
export const certifyPhone = (phone_number: string) => {
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certify-code`,
    {},
  );
};
export const certifyCode = (code :  string, phone_number : string) =>{
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certification`,{paresInt(code)}
  )
}