import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Paragraph,
  Title,
  FAB,
} from "react-native-paper";
import UpdateCard from "../components/UpdateCard.js";
 const images = [
   "e1ae634b-06eb-435e-a9cf-aed9e23318e9.jpg",
   "29fc6673-9c95-4db2-97f1-190676cb134b.jpg", 
   "1c4649b6-dd27-4e1b-bc13-199903440139.jpg"]
const UpdatesScreen = () => {
  return (
    <View style={{ width: "100%", paddingHorizontal: 10, paddingTop: 20 }}>
      <View></View>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 0 }}
        medium
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
      <ScrollView>
        <UpdateCard
          image={images[0]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[1]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[2]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[2]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[0]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[2]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[1]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
                <UpdateCard
          image={images[1]}
          like={true}
          favourited={false}
          avatar={""}
          username={"John Howark"}
          numberOfPeopleSeen={45}
          title={"Tomato Hybrid Growing"}
          message={
            "A better astonishing ground breaking approach of growing tomatoes"
          }
          numberOfLikes={0}
          numberOfComments={0}
          numberOfShares={0}
        />
      </ScrollView>
    </View>
  );
};

export default UpdatesScreen;
