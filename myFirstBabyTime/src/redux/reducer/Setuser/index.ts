import LoginAction, {
  SET_ID,
  SET_PW,
  SET_CHECK_PW,
  SET_PHONE_NUMBER,
  SET_CERTIFICATION_NUMBER,
  SET_NAME,
  SET_BABY_NAME,
  SET_PROFILE_PICTURE,
  SET_USER_UUID,
  SET_BABY_DATE,
  SET_BABY_SEX,
} from '../../actions/SetUser/Login';
export interface initalInterface {
  userID: string;
  userPW: string;
  userCheckPW: string;
  userPhoneNumber: string;
  userCertificationNumber: string;
  userName: string;
  userBabyName: string;
  userPicture: object;
  userUUID: string;
  babySex: string;
  babyYear: string;
  babyMonth: string;
  babyDate: string;
}
const initialState = {
  userID: '',
  userPW: '',
  userCheckPW: '',
  userPhoneNumber: '',
  userCertificationNumber: '',
  userName: '',
  userBabyName: '',
  userPicture: {},
  userUUID: '',
  babySex: '',
  babyYear: '',
  babyMonth: '',
  babyDate: ' ',
};
const setUserState = (
  state: initalInterface = initialState,
  action: LoginAction,
) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case SET_PW:
      return {
        ...state,
        userPW: action.payload,
      };
    case SET_CHECK_PW:
      return {
        ...state,
        userCheckPW: action.payload,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        userPhoneNumber: action.payload,
      };
    case SET_CERTIFICATION_NUMBER:
      return {
        ...state,
        userCertificationNumber: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SET_BABY_NAME:
      return {
        ...state,
        userBabyName: action.payload,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        userPicture: action.payload,
      };
    case SET_USER_UUID:
      return {
        ...state,
        userUUID: action.payload,
      };
    case SET_BABY_DATE:
      return {
        ...state,
        [action.payload.key]: action.payload.contents,
      };
    case SET_BABY_SEX:
      return {
        ...state,
        babySex: action.payload,
      };
    default:
      return state;
  }
};

export default setUserState;
