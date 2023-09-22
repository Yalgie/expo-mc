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

Or type this URL [https://github.com/Yalgie/expo-mc](https://github.com/Yalgie/expo-mc)

<!--
Show of hands who has worked with React?
Started with Flash, AS3, jQuery
-->

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

- Split in 2 halves, High level Expo
- Build/Submit
- Mac, not 100% sure how windows will go, sims etc
- Build stage probs can't follow along
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/ios-android.png?alt=media&token=2f69ede4-dd2d-4d9f-9e7f-4b456454b4a7
---

# Native Platforms

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
2 main OSs
android java / kotlin
ios obc / swift
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
SAME WIFI
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

**iOS Setup**: [https://docs.expo.dev/workflow/ios-simulator/](https://docs.expo.dev/workflow/ios-simulator/)

**Android setup** [https://docs.expo.dev/workflow/android-studio-emulator/](https://docs.expo.dev/workflow/android-studio-emulator/)


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
- May see TouchableOpacity [https://reactnative.dev/docs/touchableopacity](https://reactnative.dev/docs/touchableopacity)
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
- No on press effect (opacity)
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

When developing in Expo, you'll come across two distinct types of warnings and errors: 

- **RedBox**

- _YellowBox_

These visual cues are immensely helpful in identifying and resolving issues in your application.

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
- run command first, then create
- open expo dev show new app created
- cli is not in package
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
- Talk a little about dev account, ios has a bunch of questions
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

<!--
Little recap

Built the app
-->

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
- Name taken
- You won't get access to these app stores until you setup your developer accounts
- Show IOS Identifier automagic creation
- Create new app in Connect
- Android signing key on first upload
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/transporter.png?alt=media&token=93ff1270-4c50-41d1-8452-ececb97a509e
---

# Uploading

While Expo is super handy with its automated `eas submit` feature for uploading app builds, there's value in mastering the manual way. Let's dive in!

Apple being apple, has a special app to upload things
- **Transporter**: [https://apps.apple.com/us/app/transporter/id1450874784](https://apps.apple.com/us/app/transporter/id1450874784)

Google keeps it breezy. Just drag, drop, and you're good to go with your builds! 🚀


<!-- 
- Explain eas submit
- Android signing key on first upload
- Upload the apps
- I won't submit these apps, they'll probably get declined for just having a button in them anyways
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/testflight.png?alt=media&token=5f1cd065-b4ac-4ed8-999b-12d49f1b2fbd
---

# Testing Before Releasing

Apple and Google make it super easy to give your app a trial run in a real-world setting before it goes live for everyone.

Apple's got [Testflight](https://apps.apple.com/us/app/testflight/id899247664) which is a standalone app users can download. Once invited, you'll receive updates and notifications about new versions to explore.

On the Google side, there isn't a standalone app. Instead, within the Google Play Console, you've got options like Internal, Closed, and Open Testing tracks. Just invite your testers and they can grab the app right from the Play Store.


<!-- 
Expo code differs from built code, it's possible for some issues to pop up during the build process 
It's also a great place to invite non-developers to test the app
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/expo-logo.png?alt=media&token=4fd0ee09-861c-4cad-8b9c-871999586baf
---

# OTA

Expo also provides an awesome feature called [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/), or also refferred to commonly as _Over the air (OTA)_ updates.

If you have updates to your live app, and you don't want to go through the build & submission process, you can use OTA updates. They push your updated code directly to your app.


<!-- 
- Native code won't work, just JS
- Worth still submitting through regular process if a large chunk of UI has changed or something
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/sreens.png?alt=media&token=9af66f33-9587-4c36-b86d-c9b75e3e40f7
---

# Store Assets & Metadata

A super common thing to happen when developing any app, is you spend weeks or months on your app and you're ready to release it. But when you go to submit you realise you need to create screenshots and come up with a catchy description for your app.

Overlooking these can inadvertently delay your app's release. Stay ahead, and ensure a timely launch!

<!-- 
- Logos, Splashscreen
- Run through an app screenshots
-->

---
layout: image-right
image: https://firebasestorage.googleapis.com/v0/b/yalgie-expo-mc.appspot.com/o/sentry.png?alt=media&token=db57b9c4-daf1-4940-a73d-e316be8d7ef0
--- 

# Errors & Analytics

In production, apps won't display RedBox or YellowBox. Instead, if there's an error, the app might simply crash.

For such unexpected moments, consider integrating tools like [Sentry](https://sentry.io/welcome/). They ensure that you receive detailed logs and alerts when your app faces issues in production.

While App stores offer basic analytics like installs and user activity, they remain siloed on their platforms. To consolidate and view all your metrics in one place, something like [Firebase](https://firebase.google.com/) or [Google Analytics](https://marketingplatform.google.com/about/analytics/) is a good choice.


<!-- 
Apple & Google provide basic analytics, but if you want to track more custom stuff look at google analytics or something similar, firebase etc
-->


---

# App Review Process

Once you submit your apps, a waiting game begins for approval. The duration can fluctuate — from mere hours to several days, and occasionally even weeks. Typically, the first submission takes the longest due to the thorough review involved. However, subsequent reviews are often quicker. Platforms like Apple and Google employ tools to assess the changes made, rather than revisiting the entire app.

If you're planning a specific release date, factor in this variable review timeline.

You have flexibility post-approval: choose between an automatic release or opt for manual control. Many developers prefer manual releases, ensuring simultaneous unveiling of both iOS and Android versions.

Rejection isn't the end of the world! Apple and Google provide detailed feedback on the issues. All that's required is addressing the concerns and resubmitting. Stay patient and persistent!

<!-- 

-->

---

# Developer Accounts

If you were interested in getting into some app dev, there are some financial commitments upfront.
 
Here's a quick rundown:

<br/>

**Apple Developer Program:** 

Cost: _$100 USD annually_.

Details: [Apple Developer Program Info](https://developer.apple.com/programs/)

<br/>

**Google Play Console:** 

Cost: _A one-time fee of $25 USD._

Details: [Google Play Console Info](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en)

<!--

-->

---

# App Monetization

When embarking on the app monetization journey, several considerations come into play, from GST registration to understanding platform-specific cuts. Here's a deeper dive into the key points:

- **Free Apps**: No GST registration needed for purely free apps.
- **Paid Apps**: Planning to charge users? Whether it's a one-time fee, in-app purchases, or subscriptions, you must register for GST.
- **Revenue Shares**: Apple and Google each take a 30% cut from paid app earnings. Keep this in mind when setting prices.
- **Small Business Perks**: Both platforms offer Small Business Programs which can reduce their take to 15%. A significant boost for qualifying developers.
- **Free Apps with Ads**: Earning from ads in your free apps? You're in luck; no GST registration is necessary.

<!--
- Even if you earn under the threshold, which is around 70k or something
- Why? Apple/google bill people on your behalf and they defintely earn over 70k.
- If you try to redirect to another site or open a iframe in your app in order to bypass apples revenue share, they'll often reject your app
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

---
layout: center
class: text-center
---
# Thanks!

Feel free to hit me up on [LinkedIn](https://www.linkedin.com/in/dyalg/) if you want to ask any questions you couldn't think of today. 

Happy coding! 🚀

<!--
- Skipped over a lot of stuff
-->