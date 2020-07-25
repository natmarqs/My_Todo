import React, {useState} from 'react';
import {
Text,
SafeAreaView,
TextInput,
Button,
FlatList,
StyleSheet,
View,
Modal,
Alert,
TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
import {
    Container,
    List,
    Content,
    ModalButtonAdd,
    ButtonText,


 } from './components/styled-components';

export default function App(){
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([
   
  
  ]);
  
  const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      });
  }

  const submitHandler = (text) => {
    console.log('\n\n', {text}, '\n\n')
      setTodos((prevTodos)=> {
        return [
           ...prevTodos,
            {text: text, key: Math.random().toString() },
           
        ]
      })
      setModalVisible(false) 
  }
  console.log('\n\n', {todos}, '\n\n')
 

  return(
    <Container>
        <Header />
        
        <List>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem  item={item} pressHandler={pressHandler}/>
            )}
          />
        </List>

        <ModalButtonAdd activeOpacity={0.6} onPress={() => setModalVisible(true) }>
          <Icon name="pluscircle" size={40} color="black" />
         
        </ModalButtonAdd>   

        <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Item adicionado a lista!");
              }}
            >
               <Content>
                  <AddTodo submitHandler={submitHandler}/>
               </Content>

            </Modal>

    </Container>
  );

};

