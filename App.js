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
  const onDeleteHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal)=>goal.id !== goalID);
    });
  };


  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalsHandler} />
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals}  renderItem={itemData => ( 
        <GoalItem id={itemData.item.id} onDelete={onDeleteHandler} test={courseGoals} itemTitle={itemData.item.value} />
      )} >
        
      </FlatList>
    </View>
  );
}
