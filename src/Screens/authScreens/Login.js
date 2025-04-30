import React, { useState } from "react";
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LottieView from "lottie-react-native";


const Login = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigation to AppStack is handled by MainNavigator via AuthContext
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <Layout>
        <LottieView
    source={require("/Users/suyogshejal/React_Native_Navigation/src/login - 1746012031620.json")}
    autoPlay
    loop
    style={{
      width: 250,
      height: 240,
      alignSelf: "center",
     
    }}
  />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
            }}
          >
            <Text
              size="h3"
              style={{ alignSelf: "center", marginBottom: 20, padding: 20 }}
            >
              Login
            </Text>
            <Text style={{ padding: 10 }}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={{ marginTop: 15, padding: 10 }}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <View style={{ marginTop: 20 }}>
              <Button
                text={loading ? "Logging in..." : "Continue"}
                onPress={handleLogin}
                style={{ padding: 20 }}
                disabled={loading}
              />
            </View>

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

            <View style={{ marginTop: 10, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
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
