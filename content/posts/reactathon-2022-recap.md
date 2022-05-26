---
title: ⚛️ reactathon 2022 recap
slug: reactathon-2022-recap
date: "2022-05-10"
topic: coding
---

Over the past few days I was lucky enough to attend [Reactathon][reactathon] thanks to [Atlassian][atlassian]! The conference was held in Berkeley, California at the [Bruns Ampitheater][bruns-ampitheater], which was absolutely gorgeous! Reactathon is a conference focused on frontend web development, React, JavaScript, and the frameworks and tools that support it.

![reactathon stage][reactathon-stage]

[Lee Robinson][lee-robinson] kicked off the conference by emphasizing just how foundational [React][react] is in web development. However, React isn’t the complete solution, it is just the foundation. Meta frameworks like [Next.js][next] and [Remix][remix] provide much needed opinions around the primitive tools. [Lydia Hallie][lydia-hallie] later detailed all of the rendering patterns that [Vercel][vercel] supports. From CSR to SSR, and even ISR and DSR, there are so many options (and acronyms). Her [blog post][rendering] captures all of these in great detail.

![reactathon vercel][reactathon-vercel]

[Shruti Kapoor][shruti-kapoor] taught us all about [React 18][react-18], the new APIs, and what the upgrade path looks like. As it turns out, React 18 is faster out of the box, and can be upgraded in an afternoon. [David Khourshid][david-khourshid] later went into more detail about what problems you might run into when using `StrictMode` to unlock concurrency in React 18. For instance, the `useEffect` hook will be run multiple times, and we should change our perspectives on the purpose of `useEffect` to think about it only for data synchronization.

[Jenn Creighton][jenn-creighton] explained effective methods of debugging asynchronous JavaScript. [Swizec Teller][swizec-teller] proclaimed that the modern backend is a JavaScript function thanks to serverless deployments. [Michael Chan][michael-chan] demonstrated just how complicated a single component can be when you take into account all of its variations, like loading states, error states, viewport sizes, authorization, user abilities, locations, and more.

[Kent C. Dodds][kent-c-dodds] began by explaining what exactly edge servers are and why they matter to frontend developers, and then showed how [Remix][remix] takes advantage of them to improve performance. [Ryan Florence][ryan-florence] spoke about when you should fetch your data, and what you need to know before doing so. He explained that you really only need the URL and the user’s authentication state to determine what needs to be fetched. With this knowledge, fetches can be initiated in parallel before starting to render your components, resulting in large performance improvements.

[Shawn Wang][shawn-wang] zoomed out and enlightened us to the _Third Age of JavaScript_. This new era of JavaScript is characterized by the death of Internet Explorer 11, a new `esmodule` system, and faster tooling written in server languages. These changes mature JavaScript as a language overall.

![reactathon syntax][reactathon-syntax]

Finally, the conference finished up with a live episode of [Syntax.fm][syntax] where [Scott Tolinski][scott-tolinski] and [Wes Bos][wes-bos] answered some audience questions and Scott showed off his break dancing skills.

From a networking perspective the conference was great. I got to meet all of the speakers, and even went out to dinner with [Scott][reactathon-scott] and [Wes][reactathon-wes]. These were all folks I’ve talked to online, but there’s nothing like cementing those relationships in person. Of course, there was tons of swag. I think I carried home a couple coffee mugs, more than ten shirts, and about a million stickers!

![reactathon lee][reactathon-lee]

If you want to learn more about the talks and topics at [Reactathon][reactathon], all of them were streamed live on their [YouTube channel][reactathon-youtube]. I also took notes on each talk on [Notion][reactathon-notes].

If you haven’t been to a conference, or have been missing them since the pandemic started, I highly recommend going to one as soon as you can. You should consider [Smashing Conf][smashing-conf] in Austin, I’ll be attending as well!

[reactathon-stage]: /images/posts/reactathon-stage.jpg
[reactathon-lee]: /images/posts/reactathon-lee.jpg
[reactathon-scott]: https://twitter.com/bradgarropy/status/1522277230809808904
[reactathon-wes]: https://twitter.com/bradgarropy/status/1522277417695412235
[reactathon-syntax]: /images/posts/reactathon-syntax.jpg
[reactathon-vercel]: /images/posts/reactathon-vercel.jpg
[reactathon]: https://www.reactathon.com
[atlassian]: https://www.atlassian.com
[bruns-ampitheater]: https://calshakes.org/experience/welcome-to-the-bruns
[lee-robinson]: https://twitter.com/leeerob
[react]: https://reactjs.org
[next]: https://nextjs.org
[remix]: https://remix.run
[lydia-hallie]: https://twitter.com/lydiahallie
[vercel]: https://vercel.com
[rendering]: https://www.lydiahallie.io/talks/rendering-patterns
[shruti-kapoor]: https://twitter.com/shrutikapoor08
[react-18]: https://reactjs.org/blog/2022/03/29/react-v18.html
[david-khourshid]: https://twitter.com/DavidKPiano
[jenn-creighton]: https://twitter.com/gurlcode
[swizec-teller]: https://twitter.com/Swizec
[michael-chan]: https://twitter.com/chantastic
[kent-c-dodds]: https://twitter.com/kentcdodds
[ryan-florence]: https://twitter.com/ryanflorence
[shawn-wang]: https://twitter.com/swyx
[syntax]: https://syntax.fm
[scott-tolinski]: https://twitter.com/stolinski
[wes-bos]: https://twitter.com/wesbos
[reactathon-youtube]: https://www.youtube.com/c/RealWorldReact
[reactathon-notes]: https://bradgarropy.notion.site/reactathon-8628d6eb7f2348e99b9b7a27883170b9
[smashing-conf]: https://smashingconf.com/austin-2022
