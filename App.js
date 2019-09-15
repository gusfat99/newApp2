import React, {useState} from 'react';
import { Button, TextInput, Text, View, FlatList } from 'react-native';
import styles from "./assets/styles";
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalsHandler = (enteredGoals) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoals} ]);
  }


  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalsHandler} />
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals}  renderItem={itemData => ( 
        <GoalItem itemTitle={itemData.item.value} />
      )} >
        
      </FlatList>
    </View>
  );
}
