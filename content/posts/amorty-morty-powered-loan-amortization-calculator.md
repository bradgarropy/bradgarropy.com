---
title: 💳 amorty - morty powered loan amortization calculator
slug: amorty-morty-powered-loan-amortization-calculator
date: "2018-09-14"
topic: coding
---

A few weeks ago my wife and I bought a new family car, a grey Ford Expedition, which I call _the tank_. Buying a car is always super stressful, and the financial negotiations are high pressure and go by way too fast.

## origin story

After it was all over with, I wished I had a tool help make faster financial decisions during the negotiations. So with my newfound web development skills I sat down at the computer and made my own loan amortization calculator called [Amorty][1]. I knew I had to come up with a catchy name, and I was cracking myself up with the Rick & Morty reference, so I stuck with it.

![Amorty][2]

## technologies

It was an easy decision to use [Gatsby][3] and [React][4] to create this static site. But my hardest choice was deciding if I was going to do the loan amortization calculations myself, or use a library. Ultimately, I went with a library called [amortization][5] which did basically everything I needed it to. I wish it had an option to enter the duration in months, but that's something I can add to Amorty myself, _or maybe even create a PR for amortization!_

I also decided to use a different library for date manipulation. Usually I would reach for [Moment.js][6] but instead I used the [date-fns][7] library which is much smaller than Moment.js and it's immutable. I highly recommend using it next time you are working with dates.

> There is a new library from the folks who created Moment called [Luxon][8] which works much like date-fns. It's also worth a look.

## more features

While I'm happy with the basic functionality at this point and time, there's lots that could be done.

-   [#6 remove calculate button][9]
-   [#11 duration in months or years][10]
-   [#12 additional payments][11]
-   [#13 add graphs][12]

If you've got any other ideas you should [create an issue][13]!

[1]: https://amorty.netlify.com/
[2]: /images/posts/amorty.png
[3]: https://www.gatsbyjs.org/
[4]: https://reactjs.org/
[5]: https://github.com/eithanshavit/amortization
[6]: http://momentjs.com/
[7]: https://date-fns.org/
[8]: https://moment.github.io/luxon/
[9]: https://github.com/bradgarropy/amorty/issues/6
[10]: https://github.com/bradgarropy/amorty/issues/11
[11]: https://github.com/bradgarropy/amorty/issues/12
[12]: https://github.com/bradgarropy/amorty/issues/13
[13]: https://github.com/bradgarropy/amorty/issues
