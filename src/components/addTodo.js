import React, {useState} from 'react';
import {
Text,
TextInput,
Button,
StyleSheet,
View,
TouchableOpacity,
} from 'react-native';

import {
  ButtonText,
  ButtonAdd,

 } from './styled-components';

export default function AddTodo({submitHandler} ){
  
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
               <TextInput 
                 placeholder='Nova tarefa'
                 onChangeText={changeHandler}
                /> 
            <ButtonAdd onPress={() => submitHandler(text) }>
                <ButtonText> ADICIONAR</ButtonText>
            </ButtonAdd>    

        </View>
    )
}
