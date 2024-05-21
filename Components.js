import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const Item = ({ title, style }) => (
  <View style={[style]}>
    <Text>{title}</Text>
  </View>
);
export const Dropdown = () => {
    const opacity = false
  const DATA = [
    {
      id: `${Math.random() * 1000}`,
      title: "First Item",
    },
    {
      id: `${Math.random() * 1000}`,
      title: "Second Item",
    },
    {
      id: `${Math.random() * 1000}`,
      title: "Third Item",
    },
  ];
  const renderDropdownListItem = ({ item }) => (
    <Item title={item.title} style={[styles.listItem]} />
  );

  return (
    <View style={{ position: "relative" }}>
      <Button color="#ffffff" style={[styles.dropdownBtn]}>
        Hello
      </Button>
      <View style={
      [styles.dropdownView], 
      {
      display: `${opacity === false ? "block": "none"}`
      }
      }>
        <FlatList
          data={DATA}
          renderItem={renderDropdownListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const colors = {
  blue: {
    b50: "#f0f9ff",
    b100: "#cffafe",
    b200: "#a5f3fc",
    b300: "#67e8f9",
    b400: "#22d3ee",
    b500: "#0e7490",
    b600: "#0d9488",
    b700: "#0e7490",
    b800: "#1d4ed8",
  },
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  dropdownBtn: {
    backgroundColor: `${colors.blue.b800}`,
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 5,
    paddingVertical: -3,
    textAlign: "center",
    alignItems: "center",
    height: 35,
  },
  dropdownView: {
    backgroundColor: "blue",
    minHeight: 200,
    minWidth: 150,
    position: "absolute",
    top: 50,
    left: 20,
    borderRadius: 5,
    paddingVertical: 5,
  },
  listItem: {
    backgroundColor: `${colors.blue.b50}`,
    height: 35,
    marginVertical: 0.25,
    justifyContent: "center",
    paddingLeft: 5,
  },
});
