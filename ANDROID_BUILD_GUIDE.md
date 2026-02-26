# OffyrDeals Kochi - Android Build Instructions

This project has been updated with Kochi-specific offers and INR (₹) currency. It is ready for Android deployment via Capacitor.

## Prerequisites
To generate the APK, you need:
1. **Android Studio** installed.
2. **Java JDK (8 or 11)** installed.
3. **Android SDK** configured.

## Steps to Build APK
1. Open a terminal in this folder.
2. Run `npm install` to install Capacitor.
3. Run `npx cap add android` (adds the Android project folder).
4. Run `npx cap copy` (syncs the web code to Android).
5. Run `npx cap open android`. This will open the project in **Android Studio**.
6. In Android Studio, go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
7. Once finished, a notification will appear with a "Locate" link to your `app-debug.apk`.

## Features Updated
- **Location**: Kochi, Kerala
- **Currency**: INR (₹)
- **Vendors**: LuLu Mall, Paragon, Reliance Digital, etc.
- **Design**: Premium Coral palette, Google Fonts (Outfit).
