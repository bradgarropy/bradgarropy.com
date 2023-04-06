---
title: 👨🏼‍💼 homeaway interview process - on site
slug: homeaway-interview-process-on-site
date: "2018-10-22"
topic: coding
tags: []
---

Following my phone interview with [HomeAway][homeaway], I was invited on site for a more thorough technical interview. The interview took three hours, where I talked with four interviewers from four different teams.

## round one - full stack with matt

Matt did not play around and got straight to the point. He asked me to whiteboard a breadth first search on a binary tree. This definitely took me by surprise, as I hadn't done any kind of algorithms since college (almost 10 years ago)! I was able to explain a binary tree and breadth first traversal, and I drew it all out on the whiteboard.

I hit a snag when I started to write psuedo code implementing the breadth first traversal. I wasn't able to determine that the traversal relied on a queue, and got stuck. Even with some nudges from Matt, I felt like I wasn't able to reach a complete solution.

As with all interview questions, I came back home and wrote up a [full solution][homeaway-binary-tree]. The repo contains a JavaScript implementation of breadth first traversal, all variations of depth first traversal (preorder, inorder, postorder), traversal direction options, and a full set of tests.

## round two - backend with jeff

It only took a few minutes for Jeff, a backend Java developer, to realize our skill sets didn't align. So instead of talking technical, we spoke broadly about my career, the projects I've worked on, and the environment at HomeAway. I really enjoyed the conversation with Jeff, as it was low stress compared to the previous session.

## round three - front end with jeff

New Jeff's role and skillset was right up my alley. His job was to leverage HomeAway's component library and lay them out on the website. Jeff and I talked a bit about [React][react] and the web development ecosystem, then he asked me to implement an infinite scroll component.

This was particularly challenging for two reasons. First, I've never built an infinite scroll. And second, writing React on a whiteboard is difficult!

Fortunately I did very well in my design and implementation. My biggest mistake was forgetting a `key` attribute on an `<li>` tag. Just like the other interview questions, I came home and implemented a more fully featured [infinite scroll][homeaway-infinite-scroll]. You can see a live demo [here][homeaway-infinite-scroll-demo].

## round four - component design with drew

My last interview was with Drew, who worked on reusable components for HomeAway's front end engineers to use. While his role was similar to Jeff's, he had a higher level view of the site and its architecture. After a bit of chit chat, Drew asked me to design a typeahead. He wanted to see my entire thought process, from a sketch of the rendered component, to the HTML behind it, to the React code that implemented it.

Similar to the infinite scroll, I had never built a typeahead, but again I did very well conveying my design and implementation. Drew did a great job making the task progressively more difficult. Finally, he asked me to identify different ways of highlighting matches in the typeahead results. I spoke mostly about accomplishing this on the client side, but he enlightened me that doing this server side is more efficient. Turns out he was right, because that's exactly [how Github does it][github-search]!

I implemented a basic [typeahead][homeaway-typeahead] which searches Github users. You can see it in action [here][homeaway-typeahead-demo]. I've still got more work to do on it, like supporting [keyboard navigation][issue-1] and [highlighting typeahead results][issue-2].

## 🤞🏼 fingers crossed

After not living up to my own standards during the first interview session, I felt like I came back strong for the last three. I even impressed myself by solving new problems (to me) live on a whiteboard!

Send me 🍀 & 💙 on Twitter [@bradgarropy][twitter] while I play the waiting game!

[homeaway]: https://www.homeaway.com/
[homeaway-binary-tree]: https://github.com/bradgarropy/homeaway-binary-tree
[react]: https://reactjs.org/
[homeaway-infinite-scroll]: https://github.com/bradgarropy/homeaway-infinite-scroll
[homeaway-infinite-scroll-demo]: https://homeaway-infinite-scroll.netlify.com
[github-search]: https://developer.github.com/v3/search/#highlighting-user-search-results
[homeaway-typeahead]: https://github.com/bradgarropy/homeaway-typeahead
[homeaway-typeahead-demo]: https://homeaway-typeahead.netlify.com/
[issue-1]: https://github.com/bradgarropy/homeaway-typeahead/issues/1
[issue-2]: https://github.com/bradgarropy/homeaway-typeahead/issues/2
[twitter]: https://twitter.com/bradgarropy
