import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View, Alert } from "react-native";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import LottieView from "lottie-react-native";
const ForgotPassword = ({ navigation }) => {
  const { isDarkmode } = useTheme();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset email sent. Check your inbox.", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <Layout>
        <LottieView
          source={require("/Users/suyogshejal/React_Native_Navigation/src/Animations/forgotPassword.json")}
          autoPlay
          loop
          style={{ width: 200, height: 200, alignSelf: "center" }} // optional
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            marginBottom: 90,
          }}
        >
          <View
            style={{
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text size="h3" style={{ alignSelf: "center", marginBottom: 0,  }}>
              Forgot Password
            </Text>

            <Text style={{padding:10}}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Button
              text={loading ? "Sending..." : "Send Reset Link"}
              onPress={handleResetPassword}
              style={{ marginTop: 20 }}
              disabled={loading}
            />

            <Button
              text="Back to Login"
              status="info"
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
