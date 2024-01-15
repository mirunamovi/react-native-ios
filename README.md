# React-Native App 
The project entails a straightforward web/mobile application developed using React Native, JavaScript, and optionally, an Expo Server. 
It serves as an interface for my home thermostat, offering accessibility between users and the thermostat server, where the specific functionality details are stored.

## Run Locally - Not recommended; it won't work unless the device running the app and the server are connected to the same Wi-Fi network.

But I can provide the steps I had to make to get it done:

Create a project named YourProject
```bash
  npx create-expo-app YourProject
```
Navigate to the project directory
```bash
  cd YourProject
```
Install dependencies
npm install those:

![image](https://github.com/mirunamovi/react-native-ios/assets/90201953/3ab8ebe0-a528-4253-89d7-b0d215488673)


Start the App:
```bash
npx expo start
```

## To execute the application on an Android device...

Install eas
```bash
npm install -g eas-cli
```

Install SDK Platform Tools 
https://developer.android.com/tools/releases/platform-tools
Make sure you put the path of the SDK in the PATH from the System Properties / Environment Variables / User variables for YOUR_USER

Write this code in eas.json if it's mising:
```bash
"build": {
         ...
  "androidapk": {
        "android": {
          "buildType": "apk"
        }
    ...
}
```

Build the Android app: 
```bash
eas build --platform android --profile androidapk 
```
After building, you will receive a link in the terminal. Copy that URL into your browser, and it will download an SDK file.
Place the file on your Android device using a USB connection or simply enter the link into the Android device's browser for the download to begin.
Then you just simply install that sdk file and it should work fine.

For debugging you can use:
```bash
adb logcat
```

## Preview

![image](https://github.com/mirunamovi/react-native-ios/assets/90201953/a60bfcf3-b52b-4711-b31a-9d7a120938f5)
![image](https://github.com/mirunamovi/react-native-ios/assets/90201953/d51f2d46-59df-4059-9709-f2b9c3ba6836)







