interface CheckBlankInterface {
  userID?: string;
  userPW?: string;
  userCheckPW?: string;
  userPhoneNumber?: string;
  userCertificationNumber?: string;
  userName?: string;
  userBabyName?: string;
}

export const checkIsNotBlank = (obj: object): boolean => {
  for (let i in obj) {
    if (obj[i] === '') {
      throw i;
    }
  }
  return true;
};