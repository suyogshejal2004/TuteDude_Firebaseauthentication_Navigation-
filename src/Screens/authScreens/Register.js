import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
} from "react-native-rapi-ui";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register({ navigation }) {
  const { isDarkmode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setLoading(true);
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text
          fontWeight="bold"
          size="h3"
          style={{ alignSelf: "center", marginBottom: 30 }}
        >
          Register
        </Text>

        <Text>Email</Text>
        <TextInput
          containerStyle={{ marginBottom: 15 }}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Password</Text>
        <TextInput
          containerStyle={{ marginBottom: 15 }}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text>Confirm Password</Text>
        <TextInput
          containerStyle={{ marginBottom: 15 }}
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button text="Register" onPress={register} disabled={loading} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text size="sm" style={{ color: isDarkmode ? "#fff" : "#000" }}>
            Already have an account? Login here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
}
