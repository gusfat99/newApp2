import React, {useState} from 'react';
import { Button, TextInput, Text, View, FlatList } from 'react-native';
import styles from "./assets/styles";

export default function App() {
  const  [enteredGoals, setEnteredGoals] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalsInputHandler = (enterdText) => {
    setEnteredGoals(enterdText);
  }
  const addGoalsHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoals} ]);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" style={styles.input} onChangeText={goalsInputHandler} />
        <Button title="ADD" onPress={addGoalsHandler} />
      </View>
      
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals}  renderItem={itemData => ( 
        <View style={styles.outputContainer}>
          <Text style={styles.textList}>{itemData.item.value}</Text>
        </View>
      )} >
        
      </FlatList>
    </View>
  );
}
