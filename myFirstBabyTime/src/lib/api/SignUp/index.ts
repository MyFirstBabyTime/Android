import apiDefault from '../index';
import {ResDefault} from '../../payloads';

export const certifyPhone = (phone_number: string) => {
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certify-code`,
    {},
  );
};
export const certifyCode = (code :  string, phone_number : string) =>{
  return apiDefault().post<ResDefault>(
    `/phones/phone-number/${phone_number}/certification`,{certify_code : parseInt(code)}
  )
}

export const signUp  = (id : string, pw: string, name: string,phone_number: string) => {
  return apiDefault().post('/parents',{id,pw,name,phone_number})
}