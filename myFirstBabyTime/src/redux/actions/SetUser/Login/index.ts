

export const SET_ID = 'Login/SET_ID' as const;
export const SET_PW = 'Login/SET_PW' as const;
export const SET_CHECK_PW = 'Login/CHECK_PW' as const;
export const SET_PHONE_NUMBER = 'Login/PHONE_NUMBER' as const ;
export const SET_CERTIFICATION_NUMBER = 'Login/SET_CERTIFICATION_NUMBER' as const;
export const SET_NAME = 'Login/SET_NAME' as const ;
export const SET_BABY_NAME = 'Login/SET_BABY_NAME' as const;
export const SET_PROFILE_PICTURE = 'Login/SET_PROFILE_PICTURE' as const ;
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
type LoginAction =
  | ReturnType<typeof setID>
  | ReturnType<typeof setPW>
  | ReturnType<typeof setCheckPW>
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setCertificationNumber>
  | ReturnType<typeof setName>
  | ReturnType<typeof setBabyName>
  | ReturnType<typeof setProfilePciture>;

export default LoginAction;
