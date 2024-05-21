import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Avatar,
  Title,
  Surface,
  Paragraph,
  IconButton,
  Card,
} from "react-native-paper";
import CardBtn from "../components/CardBtn.js";

const SettingScreen = () => {
  return (
    <View style={{ width: "100%", paddingBottom: 30 }}>
      <View
style={{ height: 55, backgroundColor: "#e4e9f7", paddingLeft: 20, justifyContent: "center" }}> 
        <Title style={{fontSize: 25}}>Settings </Title>
        </View>
      <Surface style={{ padding: 7 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
              paddingVertical: 10,
              marginBottom: 25,
            }}
          >
            <Avatar.Text label="ER" size={42.5} />
            <View
              style={{ justifyContent: "center", paddingLeft: 15, flex: 5 }}
            >
              <Title style={{ fontSize: 17, maxHeight: 35 }}>
                Egesa Raymond
              </Title>
              <Paragraph style={{ fontSize: 11, maxHeight: 30 }}>
                egesaraymond644@gmail.com
              </Paragraph>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 0.3,
              }}
            >
              <IconButton icon="logout" />
            </View>
          </View>

          <Card style={{ paddingBottom: 60 }}>
            <CardBtn title="Starred Messages" icon="android-messages" color="#0000ee99"/>
            <CardBtn title="Linked Devices" icon="cellphone" color="#FFF53C"/>
            <View style={{ height: 10 }} />
            <CardBtn title="Accounts" icon="account" color="#365CD9" />
            <CardBtn title="Appearance" icon="palette-swatch" color= "#FFC5F9" />
            <CardBtn title="Sound and Notifications" icon="bell" color="#823EFF" />
            <CardBtn title="Language and Speech" icon="google-translate" color= "#FFA24C" />
            <CardBtn title="Terms and Privacy Policy" color="#57AD78" />
            <View style={{ height: 10 }} />
            <CardBtn title="Help and FAQ" icon="help-circle-outline" color= "#D06D63"/>
          </Card>
        </ScrollView>
      </Surface>
    </View>
  );
};

export default SettingScreen;
