import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet,  View } from "react-native";
import {
  Layout,
  themeColor,
  TopNav,
  Text,
  useTheme,
} from "react-native-rapi-ui";

const SecondScreen = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent="Second Screen"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            color={isDarkmode ? themeColor.white : themeColor.black}
            size={20}
          />
        }
        rightAction={() => {
          setTheme(isDarkmode ? "light" : "dark");
        }}
      />
      <View style={style.container}>
        <Text fontWeight="bold">second screen</Text>
      </View>
    </Layout>
  );
};
export default SecondScreen;
const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});