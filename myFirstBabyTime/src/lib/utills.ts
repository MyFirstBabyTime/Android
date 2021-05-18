import {Alert} from 'react-native';

interface CheckBlankInterface {
  userID?: {userID: string; min: number; max: number};
  userPW?: {userPW: string; min: number; max: number};
  userCheckPW?: {userCheckPW: string; min: number; max: number};
  userPhoneNumber?: {userPhoneNumber: string; min: number; max: number};
  userCertificationNumber?: {
    userCertificationNumber: string;
    min: number;
    max: number;
  };
  userName?: {userName: string; min: number; max: number};
  userBabyName?: {userBabyName: string; min: number; max: number};
}

interface AlertInterface {
  title: string;
  subTitle?: string;
  cancleText?: string;
  canclePressFunc?: () => void;
  successText?: string;
  successPressFunc?: () => void;
}

export const checkIsNotBlank = (obj: CheckBlankInterface): boolean => {
  for (let i in obj) {
    if (obj[i][i].length < obj[i].min || obj[i][i].length > obj[i].max) throw i;
  }
  return true;
};

export const alertHandler = (alertTextObj: AlertInterface) => {
  Alert.alert(alertTextObj.title, alertTextObj.subTitle, [
    {
      text: alertTextObj.cancleText,
      onPress: alertTextObj.canclePressFunc,
    },
    {text: alertTextObj.successText, onPress: alertTextObj.successPressFunc},
  ]);
};
