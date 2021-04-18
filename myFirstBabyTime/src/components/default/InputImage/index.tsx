import React, {useState} from 'react';
import * as S from './style';
import DefaultImage from '../../../assets/DefaultImage/DefaultImage.png';
import {TouchableOpacity, TextInput} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
const InputImage = () => {
  const [image, setImage] = useState(DefaultImage);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      console.log(res);
      return res ? setImage(res) : setImage(DefaultImage);
    });
  };
  return (
    <S.Body>
      <S.Box>
        <TouchableOpacity onPress={pickImage}>
          <S.Image source={image} resizeMode="contain" />
        </TouchableOpacity>
        <S.Text>프로필 설정하기</S.Text>
      </S.Box>
    </S.Body>
  );
};

export default InputImage;
