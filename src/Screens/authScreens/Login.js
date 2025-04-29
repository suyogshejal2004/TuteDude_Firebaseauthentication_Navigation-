import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Layout,
  Button,
  Text,
  TextInput,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const Login = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
            }}
          >
            <Text size="h3" style={{ alignSelf: "center", marginBottom: 20 }}>
              Login
            </Text>
            <Text>Email</Text>
            <TextInput placeholder="Enter your email" />
            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={true}
            />
            <Button text="Continue" />

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text fontWeight="bold"> Register</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
              <TouchableOpacity
                onPress={() => setTheme(isDarkmode ? "light" : "dark")}
              >
                <Text>{isDarkmode ? "Light Mode" : "Dark Mode"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default Login;
