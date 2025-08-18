import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import User from "../screens/User";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const DrawerNavigatorContainer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: 'tomato',
        drawerActiveBackgroundColor: 'yellow',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerIcon: props => <Icon name="home" {...props} /> }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerIcon: props => <Icon name="body" {...props} /> }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{ drawerIcon: props => <Icon name="person-circle-outline" {...props} /> }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigatorContaner /> */}
      {/* <TabNavigatorContainer /> */}
      <DrawerNavigatorContainer />
    </NavigationContainer>
  );
};


const tab= createBottomTabNavigator();
const TabNavigatorContainer = () => {
  return (
    <tab.Navigator screenOptions={{ headerShown: true,tabBarActiveTintColor:'tomato',tabBarActiveBackgroundColor:'yellow'}} >
      <tab.Screen options={{tabBarBadge:3, tabBarIcon:(props)=><Icon name="home" {...props}/>}} name="Home" component={HomeStack} />
      <tab.Screen options={{tabBarIcon:(props)=><Icon name="body" {...props}/>}} name="Profile" component={Profile} />
      <tab.Screen options={{tabBarIcon:(props)=><Icon name="person-circle-outline" {...props}/>}} name="User" component={User} />

    </tab.Navigator>
  );
};

const Stack= createNativeStackNavigator();
const HomeStack=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    
  );
}

const StackNavigatorContaner=()=>{
    return(
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen options={{headerBackVisible:false, headerTitle:"HomeSweetHome",headerTintColor:"green"}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
    
  );
} 

export default Navigation