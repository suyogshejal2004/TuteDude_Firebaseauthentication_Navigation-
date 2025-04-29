import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Linking } from "react-native";
import {
  Layout,
  SectionContent,
  Section,
  Button,
  TopNav,
  useTheme,
  themeColor,
  Text
} from "react-native-rapi-ui";
import SecondScreen from "../Screens/Secondscreen";
const Home =({navigation})=>{
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View style={styles.container}>
        <Section>
          <SectionContent style={styles.SectionContent}>
            <Text style={styles.text}>Component Made With Rapi UI</Text>
            <Button
              style={{ marginBottom: 10 }}
              status="info"
              text="Rapi Docs"
              onPress={() => {
                Linking.openURL("https://rapi-ui.kikiding.space/");
              }}
            />
            <Button
              style={{ marginBottom: 10 }}
              status="success"
              text="Go To Second Screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
            />
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ?"success":"danger"}
              onPress={()=>{
                setTheme(isDarkmode ? "light" : "dark");
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  SectionContent:{

  },
  text: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  buttoun1:{color:themeColor.primary},
  buttoun2:{},
  buttoun3:{},
});
