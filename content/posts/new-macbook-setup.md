---
title: 💻 new macbook setup
slug: new-macbook-setup
date: "2023-04-19"
topic: tech
tags: ["apple", "macbook"]
---

I recently got a new [M1 MacBook Pro][macbook-pro], and I wanted to document exactly how I set it up. I not only want to share this with you, but also use it as a reference for me in the future.

## 🔺 install updates

-   Check for system updates
-   Check for app store updates

## 🗑️ uninstall applications

-   GarageBand
-   iMovie
-   Keynote
-   Numbers
-   Pages

## 🎛️ adjust settings

### icloud

-   Login to iCloud

### siri & spotlight

-   Enable _Listen for "Hey Siri"_

### desktop & dock

-   Enable _Automatically hide and show the Dock_
-   Setup _Mission Control_ hot corners

    |                   |                   |
    | ----------------- | ----------------- |
    | _Mission Control_ | _Mission Control_ |
    | _Desktop_         | _Desktop_         |

### wallpaper

-   Select _Dynamic_ wallpaper

### touch id & password

-   Enable _Touch ID_
-   Allow unlocking with Apple Watch

### internet accounts

-   Add `bradgarropy@gmail.com` account

    -   Select _Mail_ and _Calendar_

### keyboard

-   _Keyboard Shortcuts_ > _Modifier_
    -   Swap the _Control_ and _Command_ keys on external keyboard

### mouse

-   Increase _Tracking speed_ to _Fast_
-   Uncheck _Natural scrolling_
-   Increase _Scrolling speed_

### applications

-   Photos > View > Show
    -   Uncheck _Shared with You_
-   Photos > View
    -   Check _Show Hidden Photo Album_
-   Messages > Settings > iMessage
    -   Check _Enable Messages in iCloud_
-   Safari > Settings > Advanced
    -   Check _Show Develop menu in menu bar_
-   Podcasts > Settings > General
    -   Uncheck _Download When Saving_
    -   Select _Off_ for _Automatically Download_
-   Podcasts > Settings > Playback
    -   Select _Stop when an episode ends_
-   Finder > Settings > Tags
    -   Delete all tags
-   Finder > Settings > Sidebar
    -   Select _Hard Disks_

## 📥 install applications

-   [Google Chrome][chrome]

    -   Sign in
    -   Set as default browser

-   [Discord][discord]
-   [Elgato Camera Hub][elgato]
-   [Elgato Control Center][elgato]
-   [Elgato Stream Deck][elgato]
-   [Elgato Wave Link][elgato]
-   [OBS][obs]
-   [Spotify][spotify]
-   [vscode][vscode]

    -   Update
    -   Sign in with GitHub
    -   [Install shell command][vscode-cli]

## 📦 development packages

-   [homebrew][homebrew]
-   [git][git]
-   [nvm][nvm]
-   [GitHub CLI][github-cli]
-   [Netlify CLI][netlify-cli]
-   [ngrok][ngrok]
-   [Vercel CLI][vercel-cli]

```zsh
# brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
brew install gh
brew install ngrok/ngrok/ngrok

# npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
npm install --global netlify-cli
npm install --global vercel
```

[macbook-pro]: https://www.apple.com/macbook-pro
[chrome]: https://www.google.com/chrome/dr/download
[vscode]: https://code.visualstudio.com/download
[discord]: https://discord.com/download
[obs]: https://obsproject.com/download
[spotify]: https://www.spotify.com/us/download
[elgato]: https://www.elgato.com/en/downloads
[homebrew]: https://brew.sh
[git]: https://git-scm.com
[nvm]: https://github.com/nvm-sh/nvm
[vercel-cli]: https://vercel.com/docs/cli
[github-cli]: https://cli.github.com
[netlify-cli]: https://www.netlify.com/products/cli
[ngrok]: https://ngrok.com
[vscode-cli]: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
