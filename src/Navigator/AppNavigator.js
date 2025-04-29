import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import About from "../Screens/About";
import Profile from "../Screens/Profile";
import SecondScreen from "../Screens/Secondscreen";
import Login from "../Screens/authScreens/Login";
import ForgotPassword from "../Screens/authScreens/ForgotPassword";
import Register from "../Screens/authScreens/Register";
import Loading from "../Screens/utils/Loading";

import TabBarIcon from "../Components/TabBarIcon";
import TabBarText from "../Components/TabBarText";
import { useTheme, themeColor } from "react-native-rapi-ui";
import { AuthContext } from "../AuthoContext/AuthProvider";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : themeColor.white,
          backgroundColor: isDarkmode ? themeColor.dark100 : themeColor.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => <TabBarText title="Home" />,
          tabBarIcon: () => <TabBarIcon icon="home" />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: () => <TabBarText title="About" />,
          tabBarIcon: () => <TabBarIcon icon="information-circle" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => <TabBarText title="Profile" />,
          tabBarIcon: () => <TabBarIcon icon="person" />,
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="SecondScreen" component={SecondScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  const { user } = useContext(AuthContext);

  if (user === undefined) return <Loading />; // show loading while auth is being checked

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
