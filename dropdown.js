import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Button } from "react-native-paper";

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
    minWidth: 200,
    elevation: 5,
    position: "absolute",
    left: 0,
    top: 50
  },
});

const dropdown = ({ children }) => {
  const [opacity, setOpacity] = useState(false)
  console.log(opacity)
  return (
    <View>
     <Button onPress={()    =>{
          console.log(opacity)
          opacity ? setOpacity(false) : setOpacity(true)
        }}>
        <Text>Hello</Text>
      </Button>
        <Card style={[styles.card, {opacity: opacity ? 1 : 0}]}>{children}</Card>
    </View>
  );
};

export default dropdown;
