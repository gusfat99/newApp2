import React, {useState} from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import styles from "./assets/styles";

export default function App() {
  const  [enteredGoals, setEnteredGoals] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalsInputHandler = (enterdText) => {
    setEnteredGoals(enterdText);
  }
  const addGoalsHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoals]);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" style={styles.input} onChangeText={goalsInputHandler} />
        <Button title="ADD" onPress={addGoalsHandler} />
      </View>
      <View>
        {courseGoals.map((courseGoal) => 
            <View>
              <Text>{courseGoal}</Text>
            </View>
          )}
      </View>
    </View>
  );
}
