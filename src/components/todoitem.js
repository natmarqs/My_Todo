import React from 'react';
import {
Text,
SafeAreaView,
TextInput,
TouchableOpacity,
FlatList,
StyleSheet,
View,
} from 'react-native';

import {
    TextItem,
  
   } from './styled-components';
  

export default function TodoItem({ item, pressHandler }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <TextItem> {item.text} </TextItem>
        </TouchableOpacity>
    )
}

