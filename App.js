import React, { useState } from "react";
import { Dimensions, Text, View, SafeAreaView } from "react-native";
import { Appbar, StatusBar, Avatar, IconButton } from "react-native-paper";
import { Icon } from "react-native-material-ui";
import FontAwesome from "react-native-vector-icons/FontAwesome";

/*---File Imports ---*/
import BottomAppBar from "./app/components/BottomAppBar.js";
import Search from "./app/components/search.js"
import fs from "fs"
/*---Setting Window Props---*/
const window = Dimensions.get("window");

const App = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = useState(false)
  
  return (
    <SafeAreaView>
      
      <View style={{ height: window.height, width: window.width, background: "#e4e9f7" }}>
        <Appbar style={{ position: "absolute", top: 0, width: "100%", alignItems: "center", backgroundColor: "#e4e9f7", elevation: 0 }}>
          
          <View style={{ marginLeft: "auto", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <IconButton icon="magnify" onPress={() => setVisible(true) } />
            <IconButton icon="bell" onPress={() => {}} />
            <Avatar.Icon size={35} icon="account" />
          </View>
        </Appbar>

        <View style={{ height: 55 }} />
        <Search visible={visible} setVisible={setVisible}/>
        <BottomAppBar index={index} setterIndex={setIndex} />
      </View>
    </SafeAreaView>
  );
};

export default App;
