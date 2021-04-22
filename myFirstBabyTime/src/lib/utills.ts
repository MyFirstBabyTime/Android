interface CheckBlankInterface {
  userID?: string;
  userPW?: string;
  userCheckPW?: string;
  userPhoneNumber?: string;
  userCertificationNumber?: string;
  userName?: string;
  userBabyName?: string;
}

export const checkIsNotBlank = (obj: any): boolean => {
  for (let i in obj) {
    if (obj[i] === '') {
      throw i;
    }
  }
  return true;
};
// export const checkIsNotBlank = (obj: object): boolean => {
//   const propertys: string[] = Object.keys(obj);
//   propertys.forEach((property: string) => {
//     if (obj[property] === "") {
//       throw property;
//     }
//   });

//   return true;
// };
