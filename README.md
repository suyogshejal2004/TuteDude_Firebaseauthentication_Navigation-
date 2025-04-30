# TuteDude_Firebaseauthentication_Navigation-


# React Native Firebase Authentication App

This is a React Native mobile application built using Expo that implements Firebase authentication, including Email/Password login, registration, password reset, and user navigation. It features a modern and responsive UI using [react-native-rapi-ui](https://rapi-ui.kikiding.space/) and includes tab-based navigation, auth state management with Context API, and smooth animations using Lottie.

## 🚀 Features

- ✅ Firebase Authentication (Login, Register, Forgot Password)
- ✅ React Navigation (Stack + Bottom Tabs)
- ✅ Context API for global auth state
- ✅ Lottie animations for login and reset password screens
- ✅ Dark and Light theme support (Rapi UI)

## 📱 Screenshots

![Image](https://github.com/user-attachments/assets/4af0819c-96f1-4206-b34c-d34c19414092)

![Image](https://github.com/user-attachments/assets/3bef532e-5dd0-451a-b97b-a53d48fba68a)

![Image](https://github.com/user-attachments/assets/914a913a-2cbf-4764-a42c-4fffdcf1809c)

## 🛠️ Tech Stack

- React Native (Expo)
- Firebase Auth
- React Navigation
- React Native Rapi UI
- Lottie for Animations
- Context API (for Auth Flow)

## 🔧 Setup & Installation

### Prerequisites

- Node.js and npm
- Expo CLI installed globally
- Firebase project setup

### Steps

1. Clone the repository:

```bash
git clone https://github.com/suyogshejal2004/TuteDude_Firebaseauthentication_Navigation-.git
cd react-native-firebase-auth-app
```

2. Install dependencies:

```bash
npm install
```

3. Firebase Setup:

In `firebase.js` or `AuthProvider.js`, update the config:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

4. Run the app:

```bash
npx expo start
```

Scan the QR code using Expo Go or run it on an emulator.

## 📂 Project Structure

```
src/
├── Animations/         # Lottie JSON files
├── AuthoContext/       # AuthProvider with Firebase logic
├── Components/         # Custom TabBar components
├── Screens/
│   ├── authScreens/    # Login, Register, Forgot Password
│   ├── utils/          # Loading indicator, etc.
│   └── Home, About, Profile, etc.
├── firebase.js         # Firebase config
App.js
```

## 🧠 Auth Flow Summary

- `AuthProvider.js` listens to `onAuthStateChanged` to detect login/logout.
- Navigation is conditionally rendered using `MainNavigator.js`.
- Authenticated users are shown the app (via Tabs), while others see the login/register stack.
- Forgot password uses Firebase's `sendPasswordResetEmail`.

## 🙌 Contributing

If you'd like to improve this project, feel free to fork and open a pull request.

## 📬 Contact

- **Author:** Suyog Shejal  
- **GitHub:** [@suyogshejal2004](https://github.com/suyogshejal2004)  
- **Email:** suyogshejal2004@gmail.com  
- **LinkedIn:** [Suyog Shejal](https://www.linkedin.com/in/suyog-shejal-8637a3316)



---

> Built with ❤️ by Suyog Shejal using React Native and Firebase
```

