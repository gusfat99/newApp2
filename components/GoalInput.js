import React, { useState } from "react";
import {Button, View, TextInput, Modal } from "react-native";
import styles from '../assets/styles';

const GoalInput = (props) => {
    const [enteredGoals, setEnteredGoals] = useState('');
    const goalsInputHandler = (enterdText) => {
        setEnteredGoals(enterdText);
    }

    const onAddGoalHandler = () => {
        if (enteredGoals.length === 0) {
            return alert('Goals Not Empty');
        }
        props.onAddGoal(enteredGoals);
    }
    const OnCancelHandler = () => {
        props.OnCancel(false);
    }

    return(
        <Modal visible={props.Visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Goals" style={styles.input} onChangeText={goalsInputHandler} />
                <View style={{flexDirection: 'row', width:"40%", justifyContent:"space-between"}}>
                    <Button title="CANCEL" onPress={OnCancelHandler} color="red" />
                    <Button title="ADD" onPress={onAddGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;