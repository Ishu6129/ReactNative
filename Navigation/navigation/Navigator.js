import AllNews from "../screens/AllNews";
import LatestNews from "../screens/LatestNews";
import NewsItem from "../screens/NewsItem";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { AppScreens, AppStackContainer } from "../utils/Constants";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationController = () => {
  return (
    <NavigationContainer>
      <TabNavigatorContainer />
    </NavigationContainer>
  );
};

const TabNavigatorContainer = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen options={{tabBarIcon:(props)=><Icon name="newspaper-outline" {...props}/>}} name={AppStackContainer.LatestNews} component={LatestNewsStack}/>
      <Tab.Screen options={{tabBarIcon:(props)=><Icon name="list-outline" {...props}/>}} name={AppStackContainer.AllNews} component={AllNewsStack} />
    </Tab.Navigator>
  );
};

const AllNewsStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name={AppScreens.AllNews} component={AllNews} />
      <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
    </Stack.Navigator>
  );
};

const LatestNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.LatestNews} component={LatestNews} />
      <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
    </Stack.Navigator>
  );
};

export default NavigationController;
