# React Native News App for Android and iOS

---

![screenshot](assets/news-sc.png)

## How to run

- `npm i`
- `npm start`

Follow the instructions on the screen to run the app on your device or emulator. Also to run the eslint and prettier checks run `npm run lint` and to auto-fix linting issues run `npm run lint:fix`

## Description

This app is built using the Expo framework. It uses the [News API](https://newsapi.org/) to fetch news articles from various sources. The app prompts you to enter an API key, which is then securely stored in the app's local storage. It achieves this by using Expo's [SecureStore](https://docs.expo.io/versions/latest/sdk/securestore/) module.
On tapping a news card item, the app opens a WebView to display the full article.
