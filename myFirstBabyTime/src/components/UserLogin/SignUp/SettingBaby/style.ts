import styled from 'styled-components/native';

export const MainBody = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const Body = styled.View`
  width: 100%;
  height: 70%;
`;
export const Box = styled.View`
    margin-top:60;
  width: 100%;
  height: 2%;
  background-color: white;
`;

export const LoginButton = styled.TouchableOpacity<{color: string}>`
  margin: 0 auto;

  margin-top: 20;
  background-color: ${props => props.color};
  color: white;
  width: 80%;
  height: 50;
  border: 1px solid;
  border-color: ${props => (props.color === 'white' ? '#D0463B' : 'white')};
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: 20;
  font-weight: bold;
`;

export const AddTextBox = styled.View`
    width:80%;
    margin:0 auto;
    margin-top: 60;
    flex:1;
`
export const AddText = styled.Text`
    margin:0 auto;
`