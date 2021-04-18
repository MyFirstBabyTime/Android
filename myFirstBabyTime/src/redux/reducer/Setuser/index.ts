import LoginAction, {
  SET_ID,
  SET_PW,
  SET_CHECK_PW,
  SET_PHONE_NUMBER,
  SET_CERTIFICATION_NUMBER,
  SET_NAME,
  SET_BABY_NAME,
} from '../../actions/SetUser/Login';

export interface initalInterface {
  userID: string;
  userPW: string;
  userCheckPW: string;
  userPhoneNumber: string;
  userCertificationNumber: string;
  userName: string;
  userBabyName: string;
}
const initialState = {
  userID: '',
  userPW: '',
  userCheckPW: '',
  userPhoneNumber: '',
  userCertificationNumber: '',
  userName: '',
  userBabyName: '',
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
    default:
      return state;
  }
};

export default setUserState;
