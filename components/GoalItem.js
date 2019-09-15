import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import  styles from "../assets/styles";

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.outputContainer}>
                <Text style={styles.textList}>{props.itemTitle} {console.log(props.test)}</Text>
            </View>
        </TouchableOpacity> 
    );
};
export default GoalItem;