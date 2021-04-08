import styled from 'styled-components/native';

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
export const test = styled.Text<{color: string}>`
  color: ${props => props.color};
      font-size: 20;
  font-weight: bold;
`