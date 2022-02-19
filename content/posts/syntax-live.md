---
title: 🎥 syntax live
slug: syntax-live
date: "2020-11-11"
topic: coding
---

My all time favorite web development podcast is [Syntax][podcast], hosted by [Scott Tolinski][scott] and [Wes Bos][wes]. They put on a [300th episode spectacular][episode] where listeners were invited onto the show to participate!

And lucky me I got to go first! Scott remembered how to pronounce my name and I impressed Wes with my preparedness. So other than a minor audio glitch, things kicked off well. I chose to do three of the four segments: Potluck Question, Sick Pick, Shameless Plug.

https://youtu.be/W7y03fsqHJw?t=2503

## 🥘 Potluck Question

_Is [GraphQL Playground][playground] in production considered insecure due to introspection?_

Scott and Wes both disable GraphQL Playground in production. And as it turns out, [Apollo][apollo] disables GraphQL Playground in production environments by default. One listener added that their products allows GraphQL Playground only from a VPN. That's essentially how we addressed the issue at [Adobe][adobe], by creating a new authenticated route for GraphQL Playground to ensure users have authorization first.

## 🤮 Sick Pick

_[5.11 TacTec Plate Carrier][sick-pick]_

I knew I wanted to plug [MURPHY][shameless-plug], so I sick picked this plate carrier to go along with it. The 5.11 TacTec adds some extra resistance to my pull ups, push ups, and cardio. It also fits like a glove and doesn't restrict movement at all. Although the it's pretty expensive, I use the 5.11 TacTec every day and I'm definitely getting my money's worth.

## 🔌 Shameless Plug

_[MURPHY][shameless-plug]_

After just releasing MURPHY how could I _not_ plug it?! I gave the back story on why I chose to create it, and shared the tech stack I used to build it. Scott was interested in the process of releasing a [PWA][pwa] to the Google Play Store, so I spent a bit time of talking about the process and tools.

It was great seeing [Scott][scott] and [Wes][wes] again, and I'm honored to have been the first guest on the [live show][episode]! Thank y'all so much for doing [Syntax][podcast], it not only educates me and keeps me up to date with web development, but it's also super entertaining. You've built an incredible community that I'm proud to be a part of!

[pwa]: https://web.dev/progressive-web-apps
[adobe]: https://adobe.com
[apollo]: https://apollographql.com
[shameless-plug]: https://play.google.com/store/apps/details?id=com.bradgarropy.murphy.twa
[playground]: https://github.com/graphql/graphql-playground
[sick-pick]: https://roguefitness.com/5-11-tactical-vests
[scott]: https://twitter.com/stolinski
[wes]: https://twitter.com/wesbos
[podcast]: https://syntax.fm
[episode]: https://syntax.fm/show/300/300th-live-show-spectacular
[video]: https://youtube.com/watch?v=W7y03fsqHJw&t=2503
