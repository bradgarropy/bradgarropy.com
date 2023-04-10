---
title: 📷 elgato cam link macbook issues
slug: elgato-cam-link-macbook-issues
date: "2023-04-03"
topic: tech
tags: ["elgato", "macbook"]
---

I recently got an M1 MacBook Pro and found that my [Elgato Cam Link 4k][camlink] was available as a camera source, but not showing any output.

I fixed it by going to the Elgato [downloads][downloads] page and downloading the Camera Hub application. After installing the application, I clicked the icon in the toolbar and selected _Configure Camera Hub_. Then I command clicked (⌘) the menu with the slider icon to open the advanced settings and chose _Isochronous_ for the _USB Transfer Mode_.

![elgato camera hub][elgato-camera-hub]

So far so good, that fixed any camera issues I had!

[forum]: https://talk.macpowerusers.com/t/elgato-cam-link-freezing-m1-mac/28132/2
[elgato-camera-hub]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/elgato-camera-hub.jpg
[camlink]: https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?tag=bradgarropy00-20
[downloads]: https://www.elgato.com/en/downloads
