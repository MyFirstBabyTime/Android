import React, {useEffect, useState} from 'react';
import * as S from './style';
import {useDispatch} from 'react-redux';
import DefaultImage from '../../../assets/DefaultImage/DefaultImage.png';
import {TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {setProfilePciture} from '../../../redux/actions/SetUser/Login';
const InputImage = () => {
  const [inputImg, setInputImg] = useState<object>(DefaultImage);
  const dispatch = useDispatch();
  const pickImage = e => {
    console.log(e.target);
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, res => {
      if (res.didCancel) setInputImg(DefaultImage);
      else setInputImg(res);
    });
  }; //인풋 이미지 변경
  useEffect(() => {
    dispatch(setProfilePciture(inputImg));
  }, [inputImg]);
  return (
    <S.Body>
      <S.Box>
        <TouchableOpacity onPress={pickImage}>
          <S.Image source={inputImg} resizeMode="contain" />
        </TouchableOpacity>
        <S.Text>프로필 설정하기</S.Text>
      </S.Box>
    </S.Body>
  );
};

export default InputImage;
