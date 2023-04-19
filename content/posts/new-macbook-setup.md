---
title: 💻 new macbook setup
slug: new-macbook-setup
date: "2023-04-19"
topic: tech
tags: ["apple", "macbook"]
---

I recently got a new [M1 MacBook Pro][macbook-pro], and I wanted to document exactly how I set it up. I not only want to share this with you, but also use it as a reference for me in the future.

## 🔺 install updates

-   check for system updates
-   check for app store updates

## 🗑️ uninstall applications

-   garageband
-   imovie
-   numbers
-   keynote
-   pages

## 🎛️ adjust settings

-   Login to iCloud
-   Add bradgarropy@gmail.com to internet accounts (for mail and calendar)
-   Enable Touch ID
-   Change scroll direction
-   Setup mission control hot corners
-   Set dynamic wallpaper
-   Allow unlock with Apple Watch
-   Automatically hide and show the dock
-   Swap control and command keys on external keyboard
-   Change mouse speed and scrolling speed to fastest
-   Photos > view > show > uncheck shared with you
-   Photos > view > show hidden photo album
-   Messages > settings > iMessage > check enable messages in iCloud
-   Enable hey Siri
-   Safari > advanced > show developer
-   Podcasts > settings > general
    -   uncheck download when saving
    -   turn off automatic downloads
-   Finder
    -   Hide tags in sidebar
    -   show Mac hd in sidebar

## 📥 install applications

-   [chrome][chrome]

    -   sign in
    -   set as default browser

-   [discord][discord]
-   [elgato camera hub][elgato]
-   [elgato control center][elgato]
-   [elgato stream deck][elgato]
-   [elgato wave link][elgato]
-   [obs][obs]
-   [spotify][spotify]
-   [vscode][vscode]

    -   update
    -   sign in with github
    -   [install shell command][vscode-cli]

## 📦 development packages

-   [homebrew][homebrew]
-   [git][git]
-   [nvm][nvm]
-   [github cli][github-cli]
-   [netlify cli][netlify-cli]
-   [ngrok][ngrok]
-   [vercel cli][vercel-cli]

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
