# TuteDude_Firebaseauthentication_Navigation-


### 📁 `README.md`

```markdown
# React Native Navigation App 🚀

This is a React Native mobile application built using **Expo**, featuring:

- ✅ React Navigation with Stack and Bottom Tabs
- ✅ Theme switching (Light/Dark) using `react-native-rapi-ui`
- ✅ Persistent storage using `@react-native-async-storage/async-storage`
- ✅ Firebase integration support
- ✅ Modular screen structure (Home & Profile screens)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required Expo Dependencies

```bash
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-safe-area-context expo-font @expo/vector-icons expo-asset
```

### 4. Navigation Dependencies

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

### 5. UI Framework (Rapi UI)

```bash
npm install react-native-rapi-ui
```

### 6. Async Storage

```bash
npm install @react-native-async-storage/async-storage
```

### 7. Firebase SDK

```bash
npm install firebase
```

---

## 🧭 Navigation Setup

- `@react-navigation/native`: Core navigation container
- `@react-navigation/native-stack`: Native stack screens (Home, Profile)
- `@react-navigation/bottom-tabs`: Bottom tab navigation

---

## 🌙 Dark Mode Support

Handled using `react-native-rapi-ui`'s `useTheme()` hook.  
The app dynamically switches between light and dark themes via the top right icon.

---

## 🏗 Project Structure

```
React_Native_Navigation/
│
├── App.js
├── firebaseConfig.js
├── src/
│   ├── Navigator/
│   │   └── AppNavigator.js
│   ├── Screens/
│   │   ├── Home.js
│   │   └── Profile.js
```

---

## 🔐 Firebase Setup

Create a file `firebaseConfig.js` and add your Firebase config:

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "1:XXXX:web:XXXXXX"
};

export const app = initializeApp(firebaseConfig);
```

---

## 🚀 Run the App

```bash
npx expo start
```

Scan the QR code using your Expo Go app to launch on Android/iOS.

---

## ✨ Features Implemented

- [x] Stack Navigation
- [x] Bottom Tab Navigation
- [x] Dark Mode Toggle
- [x] UI built with Rapi UI
- [x] Async Storage integration
- [x] Firebase setup included

---

## 👨‍💻 Author

**Suyog Shejal**  
[LinkedIn](https://www.linkedin.com/in/suyog-shejal-8637a3316) • [GitHub](https://github.com/suyogshejal2004)

---


