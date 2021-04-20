import styled from 'styled-components/native';

export const Body = styled.View`
margin-top:5%;
  width: 100%;
  height: 20%;
`;
export const IdBox = styled.View`
  height: 30%;
  display: flex;
  justify-content: center;
`;
export const IdTitle = styled.Text<{color : string}>`
  font-size: 15px;
  color: ${props => props.color};
  margin-left: 25;
`;
export const Line = styled.View<{backgroundColor : string}>`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  height: 1.7;
`;
export const Input = styled.TextInput`
  width: 88%;
  height: 100%;
  padding: 10px;
  padding-left: 25;
  font-size: 15px;

`;
export const EndLine = styled.View<{backgroundColor : string}>`
  background-color: ${props => props.backgroundColor};
  width: 100%;

  height: 0.5;
`;
export const Box = styled.View`
  display:flex;
  flex-direction:row;
  width:100%;
  height: 45%;
`
