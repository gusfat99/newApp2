import React, {useState} from 'react';
import { Button, View, FlatList } from 'react-native';
import styles from "./assets/styles";
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalsHandler = (enteredGoals) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoals} ]);
    setIsAddMode(false);
  }
  const onDeleteHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal)=>goal.id !== goalID);
    });
  };


  return (
    <View style={styles.container}>
      <Button title="ADD NEW GOAL" onPress={setIsAddMode.bind(this, true)}/>
      <GoalInput onAddGoal={addGoalsHandler} Visible={isAddMode} OnCancel = {setIsAddMode} />
      <FlatList keyExtractor={(item,index)=>item.id} data={courseGoals}  renderItem={itemData => ( 
        <GoalItem id={itemData.item.id} onDelete={onDeleteHandler} test={courseGoals} itemTitle={itemData.item.value} />
      )} >
        
      </FlatList>
    </View>
  );
}
