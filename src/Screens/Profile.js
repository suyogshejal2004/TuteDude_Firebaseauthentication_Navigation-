import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Layout,
  Text,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";


const Profile = () => {
  const { isDarkmode } = useTheme();

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
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
          },
        ]}
      >
        <Text size="h3" style={styles.title}>
          Profile
        </Text>
       
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    width: "80%",
  },
});

export default Profile;
