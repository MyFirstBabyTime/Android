export const SET_ID = 'Login/SET_ID' as const;
export const SET_PW = 'Login/SET_PW' as const;
export const SET_CHECK_PW = 'Login/CHECK_PW' as const;
export const SET_PHONE_NUMBER = 'Login/PHONE_NUMBER' as const;
export const SET_CERTIFICATION_NUMBER = 'Login/SET_CERTIFICATION_NUMBER' as const;
export const SET_NAME = 'Login/SET_NAME' as const;
export const SET_BABY_NAME = 'Login/SET_BABY_NAME' as const;
export const SET_PROFILE_PICTURE = 'Login/SET_PROFILE_PICTURE' as const;
export const SET_USER_UUID = 'Login/SET_USER_UUID' as const;
export const SET_BABY_DATE = 'Login/SET_BABY_DATE' as const;
export const SET_BABY_SEX = 'Login/SET_BABY_SEX' as const;
export const setID = (payload: string) => ({
  type: SET_ID,
  payload,
});
export const setPW = (payload: string) => ({
  type: SET_PW,
  payload,
});
export const setCheckPW = (payload: string) => ({
  type: SET_CHECK_PW,
  payload,
});
export const setPhoneNumber = (payload: string) => ({
  type: SET_PHONE_NUMBER,
  payload,
});
export const setCertificationNumber = (payload: string) => ({
  type: SET_CERTIFICATION_NUMBER,
  payload,
});
export const setName = (payload: string) => ({
  type: SET_NAME,
  payload,
});
export const setBabyName = (payload: string) => ({
  type: SET_BABY_NAME,
  payload,
});
export const setProfilePciture = (payload: object) => ({
  type: SET_PROFILE_PICTURE,
  payload,
});
export const setUserUUID = (payload: string) => ({
  type: SET_USER_UUID,
  payload,
});
export const setBabyDate = (payload: {key: string; contents: string}) => ({
  type: SET_BABY_DATE,
  payload,
});
export const setBabySex = (payload: string) => ({
  type: SET_BABY_SEX,
  payload,
});
type LoginAction =
  | ReturnType<typeof setID>
  | ReturnType<typeof setPW>
  | ReturnType<typeof setCheckPW>
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setCertificationNumber>
  | ReturnType<typeof setName>
  | ReturnType<typeof setBabyName>
  | ReturnType<typeof setProfilePciture>
  | ReturnType<typeof setUserUUID>
  | ReturnType<typeof setBabyDate>
  | ReturnType<typeof setBabySex>;
export default LoginAction;
