import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import styles from "./assets/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View>
       
      </View>
    </View>
  );
}
