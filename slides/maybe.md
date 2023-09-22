
---

# Breaking Down Expo (app.json)

```json
{
  "expo": {
    "name": "she-codes-expo",
    "slug": "she-codes-expo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}

```
<!--
General Config:
- name & slug: The display name and the URL-friendly identifier of your app.
- version: The version number of your app.
- orientation: Specifies whether the app should be in portrait or landscape mode.
- icon: The app icon to be displayed on the home screen.
- userInterfaceStyle: Defines if the app should use a light or dark theme.

Splash Screen:
- Configures the splash screen that displays when the app launches.

Asset Patterns:
- Determines which assets should be bundled with the build.

Platform Specific Settings:
iOS:
- supportsTablet: Indicates whether your app is optimized for tablets.
Android:
- adaptiveIcon: Configuration for the adaptive icons on Android Oreo and above.
Web:
- favicon: Icon for browsers when your app is accessed on the web.
-->
---