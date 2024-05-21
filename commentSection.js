import React, { useState, Component } from 'react';
import {
 FlatList,
 Dimensions,
 StatusBar,
 StyleSheet,
 View,
} from 'react-native';

import {
 ActivityIndicator,
 Appbar,
 Avatar,
 Badge,
 BottomNavigation,
 Button,
 Caption,
 Card,
 Checkbox,
 Chip,
 Colors,
 DataTable,
 Dialog,
 Divider,
 Drawer,
 FAB,
 Headline,
 HelperText,
 IconButton,
 List,
 Menu,
 Modal,
 Paragraph,
 Portal,
 ProgressBar,
 Provider,
 RadioButton,
 Searchbar,
 Snackbar,
 Subheading,
 Surface,
 Switch,
 Text,
 TextInput,
 Title,
 ToggleButton,
 TouchableRipple,
} from 'react-native-paper';

const DATA = [
 {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
 },
 {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
 },
 {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
 },
 {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
 },
 {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
 },
 {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
 },

 {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
 },
 {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
 },
 {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
 },
];

const Item = ({ title }) => (
 <View style={styles.item}>
  <Avatar.Icon
   rounded
   icon="account"
   type="font-awesome"
   color="red"
   size={40}
  />

  <View style={{ marginLeft: 2.5, paddingLeft: 2.5 }}>
   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Title style={{ fontSize: 15 }}>Wilsome Agatha</Title>
    <Text style={{ fontSize: 13, marginLeft: 'auto' }}>
    4/6/24
    </Text>
   </View>
   <View>
   <Text></Text>
   </View>
  </View>
 </View>
);
const window = Dimensions.get('window');
const DialogExample = () => {
 const [modalVisible, setModalVisible] = useState(false);

 const showDialog = () => setModalVisible(true);

 const hideDialog = () => setModalVisible(false);
 const renderItem = ({ item }) => <Item title={item.title} />;
 return (
  <Provider>
   <View>
    <Button onPress={showDialog}>Show Dialog</Button>
    <Portal>
     <Dialog
      style={{ left: -15, (width: window.width - 100) }}
      visible={modalVisible}
      onDismiss={hideDialog}
     >
      <Dialog.Title>Comments</Dialog.Title>
      <Dialog.Content>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       />
      </Dialog.Content>
      <Dialog.Actions>
       <Button onPress={hideDialog}>Done</Button>
      </Dialog.Actions>
     </Dialog>
    </Portal>
   </View>
  </Provider>
 );
};

export default DialogExample;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
 },
 item: {
  backgroundColor: '#f9c2ff',
  paddingHorizontal: 3,
  marginVertical: 8,
  marginHorizontal: 4,
  flexDirection: 'row',
  alignItems: 'center',
 },
 title: {
  fontSize: 32,
 },
});
