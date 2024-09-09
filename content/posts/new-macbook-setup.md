---
title: 💻 new macbook setup
slug: new-macbook-setup
date: "2023-04-19"
topic: tech
tags: ["apple", "macbook"]
---

I recently got a new [M3 MacBook Pro][macbook-pro], and I wanted to document exactly how I set it up. Not only do I want to share this with you, but I also want to use it as a reference for myself in the future.

_Before setting up a new computer, I always [backup][backup] all of my previous settings._

## 🔺 install updates

-   Check for system updates
-   Check for app store updates

## 🗑️ uninstall applications

-   GarageBand
-   Keynote
-   Pages

## 🎛️ adjust settings

### icloud

-   Login to iCloud

![iCloud][icloud]

### sound

-   Set _Output_ to _Elgato Wave XLR_
-   Set _Input_ to _Wave Link Stream_

![Sound][sound]

### general

-   Language & Region
    -   Change _First day of week_ to _Monday_

![Lanuage & Region][language-and-region]

### siri & spotlight

-   Enable _Listen for "Hey Siri"_

![Siri & Spotlight][siri-and-spotlight]

### desktop & dock

-   Remove all applications from the dock
-   Enable _Automatically hide and show the Dock_
-   Setup _Mission Control_ hot corners

    |                   |                   |
    | ----------------- | ----------------- |
    | _Mission Control_ | _Mission Control_ |
    | _Desktop_         | _Desktop_         |

![Desktop & Dock][desktop-and-dock]

### wallpaper

-   Select _Dynamic_ wallpaper

![Wallpaper][wallpaper]

### touch id & password

-   Add fingerprint
-   Enable _Touch ID_
-   Allow unlocking with Apple Watch

![Touch ID & Password][touch-id-and-password]

### internet accounts

-   Add `bradgarropy@gmail.com` account
    -   Select _Mail_ and _Calendar_

![Internet Accounts][internet-accounts]

### keyboard

-   Keyboard Shortcuts > Modifier
    -   Swap the _Control_ and _Command_ keys on external keyboard

![Keyboard][keyboard]

### mouse

-   Increase _Tracking speed_ to _Fast_
-   Uncheck _Natural scrolling_
-   Increase _Scrolling speed_

![Mouse][mouse]

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
-   Elgato Control Center > Preferences > Startup
    -   Check _Open automatically on Log In_
-   Elgato Stream Deck > Preferences > Plugins
    -   [Apple Music][apple-music-plugin]
    -   [Control Center][control-center-plugin]
    -   [OBS Studio][obs-studio-plugin]
    -   [Wave Link][wave-link-plugin]
-   Elgato Wave Link > Configure Wave Link
    -   Add _Elgato Wave XLR_ as audio input
    -   Install [DeeGate][deegate]
    -   Set noise gate to `36db`

![Finder][finder]

## 📥 install applications

-   [Arc][arc]
    -   Sign in
    -   Set as default browser
-   [Raycast][raycast]
    -   [Replace Spotlight][raycast-hotkey]
-   [Discord][discord]
-   [Elgato Camera Hub][elgato]
-   [Elgato Control Center][elgato]
-   [Elgato Stream Deck][elgato]
-   [Elgato Wave Link][elgato]
-   [OBS][obs]
-   [vscode][vscode]
    -   Update
    -   Sign in with GitHub
    -   [Install shell command][vscode-cli]
-   [iMovie][imovie]

## 🖋️ fonts

-   [Cascadia Code][cascadia-code]

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

[macbook-pro]: https://amzn.to/3AW5abz
[backup]: https://bradgarropy.com/blog/backup-and-restore
[arc]: https://arc.net/download
[raycast]: https://www.raycast.com
[raycast-hotkey]: https://manual.raycast.com/hotkey
[vscode]: https://code.visualstudio.com/download
[discord]: https://discord.com/download
[obs]: https://obsproject.com/download
[elgato]: https://www.elgato.com/en/downloads
[homebrew]: https://brew.sh
[git]: https://git-scm.com
[nvm]: https://github.com/nvm-sh/nvm
[vercel-cli]: https://vercel.com/docs/cli
[github-cli]: https://cli.github.com
[netlify-cli]: https://www.netlify.com/products/cli
[ngrok]: https://ngrok.com
[vscode-cli]: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
[icloud]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/icloud.png
[siri-and-spotlight]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/siri-and-spotlight.png
[desktop-and-dock]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/desktop-and-dock.png
[wallpaper]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/wallpaper.png
[touch-id-and-password]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/touch-id-and-password.png
[internet-accounts]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/internet-accounts.png
[keyboard]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/keyboard.png
[mouse]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/mouse.png
[finder]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/finder.png
[cascadia-code]: https://github.com/microsoft/cascadia-code
[imovie]: https://apps.apple.com/us/app/imovie/id408981434
[language-and-region]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/language-and-region.png
[sound]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/sound.png
[apple-music-plugin]: https://marketplace.elgato.com/product/apple-music-719b94df-ee43-47b3-a7c0-a3ea176ebbec
[control-center-plugin]: https://marketplace.elgato.com/product/control-center-39a4fa43-1afe-457a-8a19-b5d386e77d53
[obs-studio-plugin]: https://marketplace.elgato.com/product/obs-studio-35615969-830f-45c9-ba0a-1a295bba7fec
[wave-link-plugin]: https://marketplace.elgato.com/product/wave-link-1baa435a-c623-406d-b53c-53338c6d95d3
[deegate]: https://dotec-audio.com/deegate.html
