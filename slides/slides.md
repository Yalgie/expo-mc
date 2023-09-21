---
background: https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2748&q=80
class: text-center
highlighter: shiki
lineNumbers: false
theme: dracula
drawings:
  persist: false
transition: slide-left
title: Expo MC
---

# Build Native iOS & Android Apps Easier with Expo

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/qr.png?alt=media&token=15f94888-e122-446e-a154-0a65df820129
---
# Hey 👋

I’m Dan! 

For the past 10 years, I've been navigating the software development waters. I've worked in a lot of different places, from government endeavors to the dynamic world of startups.

My tech journey has spanned the frontend, backend, dipped into React Native for native apps, and recently, I've been exploring the Web3 realm. I've always had this itch for learning and creating something neat!

__Got your eye on these slides?__

__Scan that QR code. Let's dive in!__

---
layout: image-right
image: https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2679&q=80
---

# Today's Game Plan

I've met quite a few developers with loads of experience, but the idea of building a native app still seems daunting to them.

No worries! That's why I'm here. My mission today is to debunk the myth that it's a complex beast. We'll embark on this journey starting from square one and cruise all the way to getting your app store-ready.

__Excited? Let's dive in!__



<!--
Quick heads up on what we're diving into:

- If you've played around with React, you'll spot some familiar terrain.
- We'll zoom out for a panoramic view of Expo. A massive part of this app stuff is being comfortable with build and knowing your way around the app stores
- Our roadmap will cover the entire development cycle, from conception to deployment.
- I'll highlight some nuances unique to this world – things that might initially trip you up.
- Fair warning: the build section will be more of a watch-and-learn rather than a hands-on exercise. But fret not, you'll grasp the essentials!
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/ios-android.png?alt=media&token=2f69ede4-dd2d-4d9f-9e7f-4b456454b4a7
---

# Native Development

- __Performance:__ Native apps have superior, consistent performance.
- __Deep OS Access:__ Direct use of all device and OS features.
- __Immediate Updates:__ Instant access to new platform features.
  
<br/>

#### Challenges:
- __Double Work:__ Two separate codebases to maintain.
- __Higher Costs:__ More resources for separate platform teams.
- __Skill Needs:__ Proficiency in multiple languages required.

<!-- 
To explain expo let's first look at traditional app development
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/rn.png?alt=media&token=04b12795-81b5-43e2-b4db-13e58360664f
---

# React Native

- __Cross-Platform Development:__ Write once and deploy on both iOS and Android.
- __JavaScript & React:__ Utilize familiar web development technologies.
  
<br/>

#### Some Limitations of React Native
- __Complex Setup:__ Development environments can be complex and messy.
- __Build Process:__ Building freact native can be complicated and time consuming

<!--

-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/expo-logo.png?alt=media&token=4fd0ee09-861c-4cad-8b9c-871999586baf
---

# Expo

- __Quick Start__: Instantly preview apps with the Expo Go app.
- __Easy Builds__: Create app binaries without Xcode or Android Studio.
- __OTA Updates__: Push updates without always using the app store process.
- __Managed Workflow__: Focus on coding, let Expo handle the config.

<!-- 

-->

---

# Let's Get Coding!

Alright, team! I've set things up so if you've got your laptops handy, you can code along with me. Just ensure you've got a couple of essentials on deck.

**Node**: [https://nodejs.org/en/download](https://nodejs.org/en/download)

_Fingers crossed you've got this bad boy installed already 🤞_

Not sure? Quick way to check: pop open your terminal and punch in the snippet below. A version number popping up means you're good to go.

```bash
node -v
```

**Expo Go App**: [https://expo.dev/client](https://expo.dev/client)

Expo Go allows you to run and test your apps without the fuss of dealing with simulators.

_A little tip: as we proceed, ensure that your laptop and phone share the same wifi connection. Let's get things rolling!_

<!--

-->

---

# App Setup

First off, launch a terminal and navigate (`cd`) to the directory where you'd like your app to reside.

```bash
cd path/to/your/desired/app/location
```

Next, initiate the `npx` command provided below. This action will prompt you to name your app. Once you provide a name, it will get busy installing all necessary packages for you.

```bash
npx create-expo-app

> What is your app named? … my-app
```

With that sorted, it's time to peek at your app's code. Open it up in your preferred IDE:

```bash
cd my-app
code .
```

_Just a side note: If you're more at ease doing all this within VS Code or another IDE, totally fine! Go with what works best for you._

---

# Diving into Expo (package.json)

Let's break down what's going on in the package.json of our Expo project.

```json {all|2-7|8-13|14-16|all} {lines:true}
// package.json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
},
"dependencies": {
  "expo": "~49.0.11",
  "expo-status-bar": "~1.6.0",
  "react": "18.2.0",
  "react-native": "0.72.4"
},
"devDependencies": {
  "@babel/core": "^7.20.0"
},
```

<!--
Scripts:
- These are your go-to commands to kick off your app in various environments.

Dependencies
- Here are the essential libraries and frameworks your app relies on. Note the Expo and React Native versions!

Dev Dependencies:
- These are mainly for development purposes. For example, Babel helps in transpiling your JS code.
-->

---

# Exploring Expo (App.js)

Diving into the App.js code, anyone with some React experience will find it quite familiar. 

```jsx {all|2-3|5,6,11,12|7,10|8|9|14-21|all} {lines:true}
// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

<!--
Imports:
- React Native offers a different set of components compared to web-based React, but the concept is similar.
- StatusBar: A component from Expo to tailor the device's status bar.
- StyleSheet, Text, View: Core React Native components. They're akin to CSS, paragraph tags, and divs from web-based React.

The Main Component:
- Just like in React, we have functional components. Our primary component here, App, returns JSX.
- View: Similar to a div in the web world, it's a container component.
- Text: The go-to component for displaying text.
- StatusBar: Adjusts the appearance of the device's status bar.

Styling:
- Just like how you'd use CSS in React, in React Native, we leverage StyleSheet.create() to define styles.

For those who've dabbled in React, this structure, the use of components, and the style of coding should indeed feel like home. 
-->

---

# Running Expo

Okay, now that we've had a little intro to Expo, let's jump in and get things moving. Boot up your terminal and enter this npm command.

_We saw this earlier in the package.json_

```bash
npm start
```

Once you do that, you'll be greeted with some options and, more importantly, a QR code. Whip out your phone and scan that QR code. And voila! The Expo Go app springs to life with your app.

Open the `App.js` file and make some changes to the `<Text />` component, save your file and watch the app hot reload!

```jsx
// App.js

// This is the original text you'll see
<Text>Open up App.js to start working on your app!</Text>

// Give this a shot
<Text>Hello World!</Text>
```

<!--
- You'll see other options like running on ios and android, ignore those for now i'll explain that a little later!
-->

---

# Expo Docs

Let's explore some of the expo docs.

**Expo StatusBar:** [https://docs.expo.dev/versions/latest/sdk/status-bar/](https://docs.expo.dev/versions/latest/sdk/status-bar/)

```jsx
// App.js
<StatusBar style="auto" />

<StatusBar style="light" />

<StatusBar style="dark" />
```

Most if not all expo components have a react native equivelant.

**React Native StatusBar:** [https://reactnative.dev/docs/statusbar](https://reactnative.dev/docs/statusbar)

<!--
- Exploring the docs
- Options
- Explain android/ios options
- Compare react native Status Bar
-->

---

# Simulators

You may have noticed some options like opening in a simulator earlier.

```bash
› Press a │ open Android
› Press i │ open iOS simulator
```

So, what's the deal with simulators? Well, they're tools by Apple and Google that let you run your app right on your computer. No need to have an actual device.

In order to install them however you need to download the development environments for iOS and Android. You very rarely, if at all need to actually open these apps when working with Expo.

**Xcode**: [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)

**Android Studio**: [hhttps://developer.android.com/studio](hhttps://developer.android.com/studio)

_Don't do this right now, they are pretty big downloads_

<!--
- Before diving into more stuff I just want to explain simulators
- Explain Mac for ios builds
- Don't download now, use Expo Go
- Show iOS and Android sims
- For the rest of the presentation though i'll use sims so I can show my screen easier
- run yarn ios
-->

---

# Adding Functionality

Add in the new code below. Reload your app and check out the console log in your terminal.

```jsx {1,3,6,7,8,9,13} {lines:true}
// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Boop")
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Click Me!" onPress={handlePress} />
      <StatusBar style="dark" />
    </View>
  );
}

...
```

<!--
- Again should feel the same as react
- Some stuff is a little different:
  - onPress vs onClick
  - console.log, alert works the same
-->

---

# Swapping Button w/ Pressable

The `<Button />` component can't be styled, so let's use the `<Pressable />` component.

```jsx {all}
<Button title="Click Me!" onPress={handlePress} />

<Pressable onPress={onPress}>
  <Text>Click Me!</Text>
</Pressable>
```

While we're at it, let's create a new `Button.js` file and move our button logic there.

```jsx {all}
// Button.js
import React from "react";
import { Text, Pressable } from "react-native";

export default function Button({ onPress, title }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
```

<!--
- Button is not stylable
- Button renders diffeerently on android/ios [https://docs.expo.dev/ui-programming/react-native-styling-buttons/](https://docs.expo.dev/ui-programming/react-native-styling-buttons/)
- May see TouchableOpacity
-->

---

# Update App.js

Update `App.js` to import our new `<Button />` component, pass through the props and clean up the older imports.

```jsx {1,3,4,13}
// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function App() {
  const handlePress = () => {
    console.log("Boop");
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Hello World!" />
      <StatusBar style="dark" />
    </View>
  );
}

...
```

<!--

-->

---

# Styling Pressable

```jsx {1,3,7,8,9,13-23} {lines: true}
// Button.js
import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

export default function Button({ onPress, title }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "black",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
```

<!--
- Add Stylesheet and styles in
- paddingVertical/Horizontal vs left/right
- Update components with styles
- No on press effect
- Why? Can wrap anything so it doesn't have default styling, images etc
-->

---

# Styling Pressable Continued

The `<Pressable />` component, passes through the `pressed` state as a prop in it's styles. We can access this and do some dynamic styles

```jsx {6-12}
// Button.js
...

export default function Button({ onPress, title }) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

...
```

<!--

-->

---

# Alternative Styling

If inline styling isn't your jam, there's good news! Just as with web development, React Native offers a plethora of alternatives for styling.

Here a some popular options:

- **Styled Components:** [https://styled-components.com/](https://styled-components.com/)
- **Paper:** [https://reactnativepaper.com/](https://reactnativepaper.com/)
- **NativeBase:** [https://nativebase.io/](https://nativebase.io/)
- **Gluestack:** [https://gluestack.io/](https://gluestack.io/)

<!--
- Styled components can be used on the web too, open react native search
- NativeBase deprecating moving to gluestack
-->

---

# Understanding Expo Errors & Warnings

When developing in Expo, you'll come across two distinct types of warnings and errors: the **RedBox** and the _YellowBox_. These visual cues are immensely helpful in identifying and resolving issues in your application.

These warnings and errors are usually accompanied by a helpful message and stack trace to help you hunt down the issue at hand. 

**RedBox:** Means something fatal happened and crashed your app.

_YellowBox:_ Means something non-fatal. These won't crash your app, but they might affect performance, future compatibility or could result in a future crash occuring.

<!-- 
console.warn("This is a demo warning!");

throw Error;
-->
---

# Expo Application Services (EAS)

EAS is one of the biggest selling points for Expo. One of the biggest pain points with react native and native apps in general is the build process. Expo makes it a breeze.

In order to build our apps we need to have an expo account setup:

**Expo Dev:** [https://expo.dev/](https://expo.dev/)

We also need to have the `eas-cli` installed

```bash
npm install -g eas-cli
```

After installing the `eas-cli` run the `login` and `build:configure` commands below

```bash
eas login

eas build:configure
```

You should now have a `eas.json` file in your app directory. 

<!-- 
- open expo dev show new app created
-->

---

# Build Profiles

The `eas.json` file defines different build profiles. It let's us tell expo to build the app in a certain way.

**EAS JSON:** [https://docs.expo.dev/build/eas-json/](https://docs.expo.dev/build/eas-json/)

```json
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}

```

<!-- 
Development Profile: This is your work-in-progress mode. The developmentClient flag means we're using a client that supports live reloading and debugging. distribution set to "internal" implies that the build is for internal distribution, not ready for app stores.

Preview Profile: Kinda like a dress rehearsal. It's closer to the production build but still reserved for internal use. Useful for testing and last-minute checks.

Production Profile: Showtime! This is the build that's primed for the app stores, free of debuggers and all optimized.

- Explain Android APK vs AAB
- Apple AdHoc
- Simulator vs Device
- Provisioning Profiles
-->
---

# EAS Build

After we have our expo app configured we can trigger a build. Take note of the `Android application id` and `iOS bundle identifier` values.

```bash
eas build
```

```bash
? Select platform
❯   All
    Android
    iOS

📝  Android application id Learn more
✔ What would you like your Android application id to be? … com.yalgie.shecodesexpo

🤖 Android build

...

📝  iOS Bundle Identifier Learn more
✔ What would you like your iOS bundle identifier to be? … com.yalgie.shecodesexpo

🍏 iOS build
```


<!--
- open expo dev show app
- can't really follow along after this point
- notice the bundle ids
- explain standard bundle IDs are reversed domain names usually
-->

---
layout: center
class: text-center
---
# Break Time

<!-- 
  Let's take a little break while that builds
-->

---

# Revisting app.json

After running `eas build:configure` expo created a project for us. The `extra.eas.projectId` refers to that project.

After running the previous `eas build` command, the app.json has been updated with the relevant details tied to your app.

```json {5,8,12}
{
  "expo": {
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yalgie.shecodesexpo"
    },
    "android": {
      "package": "com.yalgie.shecodesexpo"
    },
    "extra": {
      "eas": {
        "projectId": "XXXX"
      }
    }
  }
}

```

---

# App Stores & App Scaffolding

Before we can upload our apps, we need to do setup some scaffolding in the app stores.

### Apple

**App Store Connect:** [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/)

**Apple Developer Account:** [https://developer.apple.com/account](https://developer.apple.com/account)

When we ran the `eas build` command for ios, Expo created an app identifier for us. We just need to create a new App and point to the bundle ID. After that we'll be able to upload the app.

### Google

**Google Play Console:** [https://play.google.com/console/about/](https://play.google.com/console/about/)

Google doesn't require a application/bundle ID on app creation. It will just use the ID from the first app that is uploaded.

<!-- 
- You won't get access to these app stores until you setup your developer accounts
- Show IOS Identifier automagic creation
- Create new app in Connect
- Android signing key on first upload
-->

---

# Testing

Apple and Google both have ways to test the app in a production-like state before actually releasing the app.

Apple uses __Testflight__ which is a standalone app users can download to their phones or devices and after being invited to test the app, they will recieve updates and notifications of new builds for them to download.

Google doesn't have a standalone app but in the Google Play Console you can create Internal, Closed and Open Testing tracks where you can invite people to test your builds.


<!-- 
Expo code differs from built code, it's possible for some issues to pop up during the build process 
It's also a great place to invite non-developers to test the app
-->


---

# Uploading & EAS Submit

https://apps.apple.com/us/app/transporter/id1450874784?mt=12

<!-- 
- Android signing key on first upload
- Assets, images, screenshots, etc
-->
---


# App Review Process

After submitting apps for approval you need to wait for your app to get approved. This can unfortunately vary from a couple of hours to 3-4 days to even weeks at times. Generally speaking on your first submission it will take the longest as there is a lot of stuff to review. Most subsequent reviews tend to take less time as Apple and Google have tools in place to check what code has changed and they just review your changes as to the entire app again.

This is something to keep in mind if you want to schedule a release date for your app. 

It is also possible to automatically release upon approval, or to manually release your app upon approval. It's pretty common to do a manual release so you can wait to release both the iOS and Android versions at the same time after they have both been approved.

If your app gets rejected it's not a big deal, Apple and Android usually give in depth instructions and details as to what was rejected and to why and give solutions to resolve it. You just need to fix up your changes and re upload/submit.

<!-- 

-->

---

# Costs

Here are some costs to be aware of if you were interested in creating apps.

<br/>

**Apple Developer Program:** 

Cost: _$100 USD (yearly)_

Info: [https://developer.apple.com/programs](https://developer.apple.com/programs/)

<br/>

**Google Play Console:** 

Cost: _$25 USD (one off fee)_

Info: [https://support.google.com/googleplay/android-developer](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en)

<!--

-->

---

# GST

- If you just want to upload free apps you can do so without registering for GST.
- if you want to make a paid app, whether it's a one off purchase, in app purchases or subscriptions, you need to register for GST.
- Apple and Google take a 30% cut of your paid apps.
- There are new _Small Business Programs_ for apple and android that bring their cut down to 15%.
- You can do free apps with ads without registering for GST

<!--
- Even if you earn under the threshold, which is around 70k or something
- Why? Apple/google bill people on your behalf and they defintely earn over 70k.
-->

---
layout: center
class: text-center
---
# Questions

<!--
- If we have time
- Notifications
- Asst State Counter
- Expo Router
-->