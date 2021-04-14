import styled from 'styled-components/native';
export const MainBody = styled.View`
  width:100%;
  height:100%;
  background-color:white;
`
export const Body = styled.View`
  width: 100%;
  height: 70%;
  background-color: white;
`;
export const Header = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.Image`
  height: 40;
  width: 40;
`;
export const Title = styled.Text`
  font-size: 22;
  font-weight: bold;
  margin-top: 15;
  
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
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.Text<{color: string}>`
  color: ${props => props.color};
  font-size: 20;
  font-weight: bold;
`;
