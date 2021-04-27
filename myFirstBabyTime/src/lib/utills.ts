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

export const checkIsNotBlank = (obj: CheckBlankInterface): boolean => {
  for (let i in obj) {
    if (obj[i][i].length < obj[i].min || obj[i][i].length > obj[i].max) throw i;
  }
  return true;
};
