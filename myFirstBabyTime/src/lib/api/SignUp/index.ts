import apiDefault from '../index';
import {ResDefault} from '../../payloads';

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
  const profile: FormData = new FormData();
  profile.append('profile', {
    name: profileImg['fileName'],
    uri: profileImg['uri'],
    type: profileImg['type'] || 'image/jpeg',
  });
  // profile.append('profile', profileImg['uri']);
  profile.append('id', id);
  profile.append('pw', pw);
  profile.append('name', name);
  profile.append('phone_number', phone_number);
  return apiDefault().post('/parents', profile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// data:image/jpeg;base64,
