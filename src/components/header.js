import React from 'react';
import {
Text,
SafeAreaView,
TextInput,
Button,
StyleSheet,
View,
} from 'react-native';
import {
    HeaderTodo,
    Title,
  
   } from './styled-components';
  

export default function Header(){
    return(
    <View > 
        <HeaderTodo>
            <Title>Minhas Tarefas</Title> 
        </HeaderTodo>
        
    </View>
    )
}

