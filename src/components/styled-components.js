import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
`;

export const Content = styled.View`
    padding: 40px;

`;

export const List = styled.View`
    margin-top:60;
    margin-left:20;
  `;

export const InputAdd = styled.Text`
    width: 85%;
    background: #fff;
    border-radius: 11px;
    padding: 0 15px;
    border: 2px solid #000;
    margin: 15px 0 8px 0;
    elevation: 6;
    
  `;

export const HeaderTodo = styled.View`
    height: 80;
    padding-top: 38;
    backgroundColor: black;
  `;

export const Title = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 20;
`;

export const TextItem = styled.Text`
    padding: 16px;
    margin-top: 16;
    border: 2px solid #000;
    border-radius: 10px;  
  `;

 export const ButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
  `;

export const ModalButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 400px 10px 10px 10px;

  ` ;

export const ButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 10px;
  padding: 3px 3px;
  height: 40px;
  width: 85%;
  margin: 10px 0px 5px 30px;
`;
