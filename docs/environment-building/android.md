# Androidのエミュレータ環境構築

[参考](https://dev.to/mochafreddo/setting-up-and-managing-android-emulators-on-macos-with-homebrew-3fg0)

Homebrewを使う場合。

## Install Android Command Line Tools

```sh
brew install --cask android-commandlinetools
```

## Set Up Environment Variables

```sh
open ~/.zshrc
```

```sh
export ANDROID_HOME=/opt/homebrew/share/android-commandlinetools
export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$PATH
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

## Download Required System Images

```sh
sdkmanager "platform-tools" "emulator" "platforms;android-34" "system-images;android-34;google_apis_playstore;arm64-v8a"
```

## Create an AVD

```sh
avdmanager create avd -n Pixel_6_Pro_API_34_PlayStore_ARM -k "system-images;android-34;google_apis_playstore;arm64-v8a" --device "pixel_6_pro"
```

## (option): Run the Emulator

```sh
emulator -avd Pixel_6_Pro_API_34_PlayStore_ARM -gpu on -skin 1440x3120
```
