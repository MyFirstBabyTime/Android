import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  setID,
  setPW,
  setCheckPW,
  setPhoneNumber,
  setCertificationNumber,
  setName,
  setBabyName,
} from '../../../redux/actions/SetUser/Login';
export const useSetUser = () => {
  const dispatch = useDispatch();
  const settingID = useCallback((id: string) => {
    // console.log(id)
    dispatch(setID(id));
  }, []);
  const settingPW = useCallback((pw: string) => {
    dispatch(setPW(pw));
  }, []);
  const settingCheckPW = useCallback((checkPw: string) => {
    dispatch(setCheckPW(checkPw));
  }, []);
  const settingPhoneNumber = useCallback((number: string) => {
    dispatch(setPhoneNumber(number));
  }, []);
  const settingCertificat = useCallback((number: string) => {
    dispatch(setCertificationNumber(number));
  }, []);
  const settingName = useCallback((name: string) => {
    dispatch(setName(name));
  }, []);
  const settingBabyName = useCallback((name: string) => {
    dispatch(setBabyName(name));
  }, []);
  return {
    settingID,
    settingPW,
    settingCheckPW,
    settingPhoneNumber,
    settingCertificat,
    settingName,
    settingBabyName,
  };
};
