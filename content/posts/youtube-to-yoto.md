---
title: 🎧 youtube to yoto
slug: youtube-to-yoto
date: "2026-02-24"
topic: coding
tags: ["yoto", "cloudflare"]
---

After getting [Yoto][yoto] players for the kids this Christmas, I realized that buying cards from Yoto would become way too expensive. I also realized that there is plenty of _free_ music on [YouTube][youtube]. So I set off to rebuild the Yoto app with a tighter YouTube integration.

Check it out for yourself at [yoto.bradgarropy.com][my-yoto]!

![yoto-cards][yoto-cards]

## 🎶 what it does

The application is a complete rebuild of the existing [My Yotoplay][yotoplay] site. It offers all the same features like card creation, track uploads, and icon selection. But the main draw is that it can upload videos and playlists directly from YouTube!

It also includes the entire selection of icons from [Yoto Icons][yoto-icons] built in. And one of my personal favorite features, it can automatically assign numberical icons corresponding to each track.

I've been using it for the past few weeks to manage my kids' Yoto playlists and it's been working like a charm. You login with your own Yoto account, and you'll see all of your existing cards and tracks. Then you can manage them in a much cleaner, streamlined experience. No [MYO Studio][myo-studio] required!

![yoto-card][yoto-card]

## 🧱 tech stack

I chose a tech stack that I am comfortable with so I could use AI and stay fairly hands off with the code. The application is built with the following tech.

- [React][react]
- [TypeScript][typescript]
- [React Router][react-router]
- [Shadcn][shadcn]
- [Tailwind][tailwind]
- [Lucide][lucide]
- [Yoto SDK][yoto-sdk]
- [Cloudflare Workers][workers]
- [Cloudflare Sandboxes][sandboxes]

I deployed the application to [Cloudflare Workers][workers], and I'm using a [Cloudflare Sandbox][sandboxes] for the stuff that requires a real server, like running [yt-dlp][yt-dlp] to download audio from YouTube videos. The [Yoto SDK][yoto-sdk] made it trivial to set up authentication, which I store in a cookie, and interact with their API.

![yoto-architecture][yoto-architecture]

A typical track import looks something like the diagram below. I'm using [Server Sent Events][sse] to show progress as tracks are downloading, uploading, and transcoding. I run them all in parallel on the same sanbox, but if I wanted to I could spin up independent sandboxes for each track to really improve efficiency.

![yoto-request][yoto-request]

The sketchiest part of the app was integrating [Yoto Icons][yoto-icons] into the icon search. They don't offer an API, so I resorted to scraping the HTML of their search results to return icons. This can definitely be optimized in the future by scraping their entire icon set every day, or by begging the developer to create a public API.

## 🤖 built with ai

I decided to build this project completely with AI. I used [OpenCode][opencode] with the `Claude Opus 4.5` model and stayed out of the editor except to look at the changes the agent was making.

I started with `Plan` mode and had a very long conversation back and forth with the agent to clarify my requirements and determine an approach. Then I had it write out all of the details to a `plan.md` file that I committed at the root of the repository. Finally I switched over to `Build` mode and iterated on the plan.

For each task I would start a new session. Every time I started a session I would instruct the agent to read the `plan.md` file and then work on the next task. I kept the plan updated throughout the project and treated it as a living document. I feel like this gave each session a solid set of context to start from.

Opus really knocked this out of the park. The only area of the project where it really struggled was how to show progress when uploading tracks. This section took a good amount of prompting from me to make it feel just right.

## 📢 your feedback

Now all that's left is to enjoy what I built! Head over to [yoto.bradgarropy.com][my-yoto] and give it a try. Let me know if you find any issues, or if you have any feature requests. I hope you like it!

[yoto]: https://us.yotoplay.com
[youtube]: https://youtube.com
[yotoplay]: https://my.yotoplay.com
[yoto-icons]: https://yotoicons.com
[myo-studio]: https://chromewebstore.google.com/detail/olloopaapdodegpcacjmgdjaphggfgoj
[yoto-cards]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/yoto-cards.png
[yoto-card]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/yoto-card.png
[yoto-architecture]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/yoto-architecture.png
[yoto-request]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/yoto-request.png
[opencode]: https://opencode.ai
[react]: https://react.dev
[typescript]: https://typescriptlang.org
[react-router]: https://reactrouter.com
[shadcn]: https://ui.shadcn.com
[tailwind]: https://tailwindcss.com
[lucide]: https://lucide.dev
[yoto-sdk]: https://npmjs.com/package/@yotoplay/yoto-sdk
[workers]: https://workers.cloudflare.com
[sandboxes]: https://sandbox.cloudflare.com
[yt-dlp]: https://github.com/yt-dlp/yt-dlp
[sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[my-yoto]: https://yoto.bradgarropy.com
