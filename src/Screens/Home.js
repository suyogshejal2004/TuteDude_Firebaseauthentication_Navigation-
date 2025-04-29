import React from "react";
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
  Text,
} from "react-native-rapi-ui";
import { getAuth, signOut } from "firebase/auth";

const Home = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      // AuthProvider and MainNavigator will handle redirect to Login
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

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
              status={isDarkmode ? "success" : "danger"}
              onPress={() => {
                setTheme(isDarkmode ? "light" : "dark");
              }}
              style={{ marginBottom: 10 }}
            />
            <Button
              text="Sign Out"
              status="danger"
              onPress={handleSignOut}
              style={{ marginBottom: 10 }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  SectionContent: {},
  text: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
  },
});

export default Home;
