import React, { useState } from "react";
import { Modal, View, Text } from "react-native";
import { Button, Divider, IconButton, Image, Card } from "react-native-paper";

const PopScreen = () => {
  const [popScreenOpen, setPopScreenOpen] = useState(false);
  const paths = "file:///data/user/0/com.actualwave.reactnativeplayground/cache/ImagePicker/";
  return (
    <View>
      <Button onPress={() => setPopScreenOpen(true)}>Open Modal</Button>
      <Modal
        visible={popScreenOpen}
        animationType="slide" //transparent={true}
      >
        <View>
          <IconButton icon="close" onPress={() => setPopScreenOpen(false)} />
          <Divider />
          <View style={{ marginTop: 15 }}>
          <Card.Cover

        source={{

          uri: paths + "29fc6673-9c95-4db2-97f1-190676cb134b.jpg",

        }}
      />
          <Text>Hello</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopScreen;
