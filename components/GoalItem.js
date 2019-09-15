import React, { useState } from "react";
import { Text, View } from "react-native";
import  styles from "../assets/styles";

const GoalItem = (props) => {
    return (
        <View style={styles.outputContainer}>
            <Text style={styles.textList}>{props.itemTitle}</Text>
        </View>
    );
};
export default GoalItem;