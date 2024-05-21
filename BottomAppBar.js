import React, { useState } from 'react';
import {
 Dimensions,
 Text,
 View,
} from 'react-native';
import {
 BottomNavigation,
 FAB,
 IconButton,
} from 'react-native-paper';

/*---File Imports ---*/
import GroupsScreen from '../screens/GroupsScreen.js'
import EventsScreen from '../screens/EventsScreen.js'
import HomeScreen from '../screens/HomeScreen.js'
import LearnScreen from '../screens/LearnScreen.js';
import UpdatesScreen from '../screens/UpdatesScreen.js';
import AccountScreen from '../screens/AccountScreen.js';


/*---Screen Initialization*/
const HomeRouteScreen = () => <AccountScreen />;
const LearnRouteScreen = () => <LearnScreen />;
const EventsRouteScreen = () => <EventsScreen />;
const GroupsRouteScreen = () => <GroupsScreen />;
const UpdatesRouteScreen = () => <UpdatesScreen />;

/*---Setting Window Props---*/
const window = Dimensions.get('window');

const BottomAppBar = ({ index, setterIndex }) => {
 const [text, setText] = useState('');
 const [routes] = React.useState([
  {
   key: 'home',
   title: 'Home',
   icon: 'home-variant',
  },
  { 
    key: 'learn', 
    title: 'Learn', 
    icon: 'book-variant'     
  },
  {
    key: 'events',
    title: 'Events',
    icon: 'shape-plus'
  },
  { 
    key: 'groups', 
    title: 'Groups', 
    icon: 'account-group' 
    
  },
  {
   key: 'updates',
   title: 'Updates',
   icon: 'update',
  },
 ]);

 const renderScene = BottomNavigation.SceneMap({
  home: HomeRouteScreen,
  learn: LearnRouteScreen,
  events: EventsRouteScreen,
  groups: GroupsRouteScreen,
  updates: UpdatesRouteScreen,
 });

 return (
    <BottomNavigation
     style={{ width: '100%'}} 
      barStyle={{ backgroundColor: "#e4e9f7"}}
      activeColor= "black"
     navigationState={{ index, routes }}
     onIndexChange={setterIndex}
     renderScene={renderScene}
    />
 );
};

export default BottomAppBar;
