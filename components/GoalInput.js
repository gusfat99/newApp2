import React, { useState } from "react";
import {Button, View, TextInput } from "react-native";
import styles from '../assets/styles';

const GoalInput = (props) => {
    const [enteredGoals, setEnteredGoals] = useState('');
    const goalsInputHandler = (enterdText) => {
        setEnteredGoals(enterdText);
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder="Goals" style={styles.input} onChangeText={goalsInputHandler} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoals)} />
        </View>
    );
};

export default GoalInput;