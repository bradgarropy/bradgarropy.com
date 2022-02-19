---
title: ⏱ murphy
slug: murphy
date: "2020-10-13"
topic: coding
---

Recently my buddy [Todd Austin][todd] challenged me to do half a [murph][murph] every day for a week. I accepted, and quickly learned that counting reps and rounds while you're sweating and breathing heavy is not easy. So I did what every developer would do, I built an app.

[MURPHY][store] is a workout timer specifically designed for murph. It splits the workout into multiple rounds of pull ups, push ups, and squats, and tracks your time for each exercise. Registered users can save their workouts, view past workouts, and track their performance over time!

![murphy][ad]

I began building [MURPHY][store] as a learning experience, using a completely new technology stack. While new frameworks and tools are fun to explore, they definitely slowed me down in the beginning. Here's what I went with.

-   [Svelte][svelte]
-   [Tailwind][tailwind]
-   [FaunaDB][fauna]
-   [Netlify][netlify]
-   [Netlify Identity][identity]

I found [Svelte][svelte] very easy to work with, and animations were a breeze. [Tailwind][tailwind] was also very easy, except for the lack of `grid` properties. Lucky for me [v1.8][grid] released and added the missing properties. I still felt a bit weird every time I had to edit the `tailwind.config.js` file just to use a custom `grid` layout. [FaunaDB][fauna] is amazing, as was their developer relations team who provided me tons of help (shoutout [@databrecht][databrecht]). After getting over the `FQL` learning curve, I felt like I had super powers.

But one thing is for sure, I didn't feel powerful when using [Netlify Identity][identity] at all. For every one feature Identity gives you, it makes another difficult. For example, there is no way to differentiate a `login` event from a `signup` event. Morever, there's no way to tell if a user logged in with their username and password, or from a saved token.

In the end, this new tech stack got me to where I needed to go, and I learned a ton along the way. The process of taking a PWA to the [Google Play Store][store] was particularly challenging, but so incredibly rewarding to see my app somewhere so _official_.

If you want to improve your health, consider supporting me and purchasing [MURPHY][store]!

[databrecht]: https://twitter.com/databrecht
[grid]: https://tailwindcss.com/docs/release-notes#tailwind-css-v1-8
[todd]: https://twitter.com/austintoddj
[murph]: https://themurphchallenge.com/pages/the-workout
[ad]: /images/posts/murphy.png
[store]: https://play.google.com/store/apps/details?id=com.bradgarropy.murphy.twa
[svelte]: https://svelte.dev
[tailwind]: http://tailwindcss.com
[fauna]: https://fauna.com
[netlify]: https://netlify.com
[identity]: https://docs.netlify.com/visitor-access/identity
