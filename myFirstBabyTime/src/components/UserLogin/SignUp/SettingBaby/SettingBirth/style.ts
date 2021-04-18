import styled from 'styled-components/native';

export const Body = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  margin-left: 25;
`;
export const Text = styled.Text`
  color: #8d8d8d;
`;
export const PickerBox = styled.View`
  height: 30%;
  margin-top: 15;
  display: flex;
  flex-direction: row;
`;

export const BorderPicker = styled.View`
  border: 1px solid #d2d2d2;
  border-radius: 5;
  margin-right:10;
`;

export const Picker = styled.Picker<{width: number}>`
  padding: 5px;
  width: ${props => props.width};
  height: 100%;
`;
