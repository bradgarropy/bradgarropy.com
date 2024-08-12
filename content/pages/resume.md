**Brad Garropy**  
_817-266-5629_  
[_bradgarropy@gmail.com_][email]  
_Austin, Texas_

## Objective

To find a fully remote position in a smaller company where I can architect, lead, and develop web applications with a fast moving team that owns their own stack. I prefer to work in TypeScript, Remix, Tailwind, and PostgreSQL. Public facing products or open source opportunities are a great bonus.

## Summary

-   14 years of engineering experience across 4 companies
-   Led multiple teams to build applications from scratch
-   Specialize in frontend development with React and TypeScript
-   Maintain many open source projects and repositories
-   Create videos, podcasts, and streams to educate others

## Education

**The University of Texas at Austin**  
_2010_ | Bachelor of Science in Electrical and Computer Engineering

## Technologies

### Software

|             |                                                                        |
| ----------- | ---------------------------------------------------------------------- |
| _Languages_ | TypeScript, JavaScript, HTML, CSS, Bash, Markdown, YAML, TOML          |
| _Runtimes_  | Node, Deno, Bun                                                        |
| _Frontend_  | React, Remix, Next, Svelte, SvelteKit, Astro, Gatsby, esbuild, Webpack |
| _Backend_   | Serverless, Webhooks, REST, GraphQL, Express, Fastify, Prisma          |
| _Testing_   | Vitest, Playwright, Jest, Cypress, Mock Service Worker, Storybook      |

### Tools

|                          |                                                             |
| ------------------------ | ----------------------------------------------------------- |
| _Version Control_        | GitHub, Bitbucket, GitLab                                   |
| _Continuous Integration_ | GitHub Actions, Bitbucket Pipelines, Travis CI, Jenkins     |
| _Cloud_                  | Amazon Web Services, Google Cloud Platform, Microsoft Azure |
| _Hosting_                | Vercel, Netlify, Cloudflare, Fly, Render, Heroku            |
| _Databases_              | PostgreSQL, MySQL, MongoDB, Redis, Firestore                |
| _Infrastructure_         | Terraform, Puppet, Artifactory                              |
| _Monitoring_             | Sentry, SignalFX, Splunk, OpsGenie, Pager Duty, New Relic   |
| _Development Lifecycle_  | JIRA, GitHub Projects                                       |
| _Design_                 | Figma                                                       |

## Work Experience

**Atlassian | Senior Frontend Engineer**  
_August 2024 - Present_

_Optimized Checkout Team_

-   To be determined

**Atlassian | Senior Software Engineer**

_October 2021 - August 2024_

_Notion Importer OAuth Flow_

-   Designed and implemented a Notion OAuth integration for Confluence.
-   Drastically reduced the number of clicks for authentication.
-   Unblocked team for general availability release.
-   Used `postMessage` for cross window communication.

_Confluence Observatory_

-   Application to generate SignalFX dashboards and monitor alerts for all Confluence services and APIs.
-   Built with Remix, Tailwind, Vitest, Mock Service Worker, Playwright.
-   Led and mentored a team of three developers to build the application.
-   Stored dashboard configuration in PostgreSQL and accessed with Prisma.
-   Generated dashboards with Terraform based on user configuration.

_Confluence Task Dashboard_

-   Dashboard to monitor health and metrics of 330+ million daily asynchronous tasks that power Confluence.
-   Built with Remix, Tailwind, Vitest, Mock Service Worker, and Playwright.
-   Proposed and implemented the application architecture.
-   Led and mentored a team of two developers to build the application.
-   Wrote continuous integration with Bitbucket Pipelines and Spinnaker deploys.
-   Integrated the application with services like Sentry, SonarQube, Splunk, and Launch Darkly.
-   Leveraged the Atlassian component library for UI elements.

_Trello Developer CLI_

-   Standardized and extensible CLI tool across all Trello teams.
-   Built with Node, TypeScript, Commander, and esbuild.
-   Integrated analytics and error reporting to track developer productivity.
-   Compiled discovered commands on the fly with `esbuild`.

_Trello Web Platform_

-   Deployed and monitored production releases to ensure incident free deployments.
-   Created code generators for components, tests, stories, and packages.
-   Implemented custom `eslint` rules to enforce best practices.
-   Majorly contributed to converting JavaScript to TypeScript.
-   Wrote documentation and guides for frontend contributors.

**Adobe | Senior Frontend Developer**  
_July 2020 - October 2021_

_Magento Storefront Eventing Platform_

-   Platform which leverages a common data layer to collect storefront events.
-   Led the effort to refactor storefront event gathering to an open source implementation.
-   Collaborated with frontend, backend, core, and data engineers to architect the solution.
-   Created two open source libraries.
    -   [Magento Storefront Events SDK][events-sdk]
    -   [Magento Storefront Event Collector][event-collector]
-   Solution works across monolithic, PWA, and headless storefronts.

[_Magento Live Search_][search]

-   Lead frontend developer, joined just after proof of concept was started.
-   Made React storefront UI components to display results in the search bar and on the search results page.
-   Built a React admin UI for configuring search facets and results.
-   Created a Magento extension to load the storefront and admin UI.
-   Implemented testing and continuous integration and deployment for all projects.

**Adobe | Frontend Developer**  
_April 2019 - July 2020_

[_Magento Product Recommendations_][prex]

-   Lead frontend developer from first proof of concept to release.
-   Created a Chrome extension to test initial feasibility.
-   Implemented a [JavaScript SDK][recommendations-js-sdk] for the backend API.
-   Built a React admin UI for configuring recommendations.
-   Created shopper event tracking mechanism to track recommendations performance.
-   Made a Magento extension to load the admin UI.
-   Implemented testing and continuous integration and deployment for all projects.
-   Communicated directly with customers to help with onboarding and bugs during early access program.

_Leadership_

-   Led and spoke at the Adobe Frontend Guild.
-   Mentored two junior developers on a bi-weekly basis.
-   Ran team meetings (standup, retrospectives, demos).
-   Led a Hackathon team to federate our GraphQL APIs.

**Dell | Server Software Release Engineer**  
_February 2014 - April 2019_

_Build Verification Test (BVT) Lead_

-   Guided the firmware development organization on automated testing best practices.
-   Integrated testing into the continuous integration workflow.
-   Enforced buildly and nightly testing on all releases.
-   Led a team of five contractors to test more in depth issues.
-   Weekly interlocks on automated testing status with developers.
-   Managed the entire stack supporting development testing.

_Modular Automated Test Framework (MATF)_

-   Python test framework distributed used by the server firmware development teams.
-   Supported four products, over 300 developers, and over 50 product releases.
-   Developers contributed over 20,000 test cases.
-   Created libraries for all supported platforms to update, restart, gather logs, etc.
-   Gave knowledge sharing talks on test case development and tool usage.
-   Enabled performance testing, code coverage, stress testing, unit testing, and security audits.

_Generic Resource Manager (GRM)_

-   Web application, Python CLI, and Python library to manage and reserve hardware.
-   React front end with Node and Express backend hooked up to MongoDB.
-   Exposed an authenticated REST API.
-   Built authentication that integrated with company LDAP, implemented with JSON Web Tokens.
-   Hooked into continuous integration process to reserve test hardware from MATF.
-   Tracks all requests, checkins, checkouts, and resources.

_Topic Status_

-   Web application to view status of code commits in the continuous integration process.
-   Scaled to twelve concurrent releases.
-   Pulled code commit data from MySQL database.
-   Built with vanilla JavaScript and Bulma CSS.
-   Completely searchable, with links to each commit and button to contact the author.

## YouTube

-   Over 140 videos and 1,500 subscribers on [YouTube][youtube]
-   Published tutorial series on [Remix][remix-tutorial], [Webpack][webpack-tutorial], [Firebase][firebase-tutorial], [Plop][plop-tutorial], and [NPM Packages][npm-tutorial]
-   Created three [Dev Hints][dev-hints] videos for [Cloudinary][cloudinary]

## Podcasts

_Current_ | [Compressed.fm][compressed-fm] with James Quick and Amy Dutton  
_Retired_ | [Web Dev Weekly][web-dev-weekly] with Richard Gottleber

## Talks & Appearances

_06/05/2024_ | [Frontend Nation][frontend-nation] panel  
_01/29/2024_ | [THAT Conference][that-conference] live podcast  
_12/07/2022_ | [Cloudinary DevJams - Optimizing Cloudinary Images in Markdown Files][cloudinary-devjams]  
_08/04/2021_ | [CodingCat.dev][codingcat-dev] with Brittney Postma and Alex Patterson  
_11/09/2020_ | [The Chau Codes Podcast][chau-codes] with Justin Chau  
_10/06/2020_ | [That's My Jamstack][thats-my-jamstack] with Bryan Robinson  
_08/14/2020_ | [Working on Side Projects][side-projects] with James Quick  
_06/13/2020_ | [Publishing NPM Packages][webinar] with James Quick  
_04/23/2020_ | [Headless vs Embedded CMS][cms] with James Quick

## Personal Projects

### Websites

[🏡 bradgarropy.com][bg]

-   Portfolio and blog with embedded CMS.
-   Sourced data from YouTube and an embedded CMS.
-   Developed with TypeScript, React, Remix and Tailwind, hosted on Vercel.

[🤠 daily texas country][dtxc]

-   Texas country music lifestyle website.
-   Sourced data from Spotify, YouTube, and an embedded CMS.
-   Email signup through ConvertKit.
-   Developed with Gatsby and React, hosted on Netlify.

[⏱ murphy][murphy]

-   Specialized CrossFit Murph timer.
-   Scales and saves workouts.
-   Built with Svelte, Tailwind CSS, FaunaDB, and Netlify.
-   Released on the [Google Play Store][murphy-app].

### Packages / Extensions / Bots

[⏳ use-countdown][use-countdown]

-   React hook countdown timer.
-   Written in TypeScript.
-   Powers my Twitch starting soon page.
-   Over 101,000 downloads!

[🤖 bg codes twitch bot][twitch-bot]

-   Twitch bot that responds to chat commands and offers redemptions.
-   Integrates with the Hue SDK to control lights.
-   Modifies the vscode theme based on chat commands.

[👨🏼‍🔬 labman][labman]

-   Command line tool for managing issue labels across GitHub repositories.
-   Built with JavaScript and Node.js.
-   Integrated into the offical GitHub CLI in [v2.9.0][github-cli].
-   Over 800 downloads!

[🃏 business-card][business-card]

-   Digital business card.
-   Run `npx bradgarropy` to see for yourself.
-   Interactive CLI to help users create their own business card.
-   Over 1,100 downloads!

## Platforms

[Twitch][twitch]  
[YouTube][youtube]  
[Twitter][twitter]  
[GitHub][github]  
[npm][npm]  
[LinkedIn][linkedin]

[email]: mailto:bradgarropy@gmail.com
[prex]: https://magento.com/products/product-recommendations
[recommendations-js-sdk]: https://npmjs.com/package/@magento/recommendations-js-sdk
[side-projects]: https://youtu.be/iIxk8ebUC_g
[webinar]: https://youtu.be/xleL7v7yBmM
[cms]: https://youtu.be/6hp-szqbQwg
[dtxc]: https://dailytexascountry.netlify.app
[bg]: https://bradgarropy.com
[murphy]: https://murphy.bradgarropy.com
[murphy-app]: https://play.google.com/store/apps/details?id=com.bradgarropy.murphy.twa
[dtxc-bot]: https://twitter.com/dailytxcountry
[labman]: https://npmjs.com/package/labman
[github-cli]: https://github.com/cli/cli/releases/tag/v2.9.0
[business-card]: https://npmjs.com/package/bradgarropy
[twitch]: https://twitch.tv/bradgarropy
[youtube]: https://youtube.com/bradgarropy
[twitter]: https://twitter.com/bradgarropy
[github]: https://github.com/bradgarropy
[npm]: https://npmjs.com/~bradgarropy
[linkedin]: https://linkedin.com/in/bradgarropy
[chau-codes]: https://youtu.be/A85MnRidA2A
[thats-my-jamstack]: https://thatsmyjamstack.com/posts/brad-garropy
[use-countdown]: https://npmjs.com/package/@bradgarropy/use-countdown
[twitch-bot]: https://github.com/bradgarropy/twitch-bot
[search]: https://magento.com/products/live-search
[events-sdk]: https://github.com/adobe/magento-storefront-events-sdk
[event-collector]: https://github.com/adobe/magento-storefront-event-collector
[web-dev-weekly]: https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs
[remix-tutorial]: https://www.youtube.com/playlist?list=PL6Mu1AMmTL-thD5jx_slLzvv1t1WAO0_1
[webpack-tutorial]: https://www.youtube.com/playlist?list=PL6Mu1AMmTL-vGQdj1-auEc12KM14OmjXH
[firebase-tutorial]: https://www.youtube.com/playlist?list=PL6Mu1AMmTL-sSswsqShJ5fbIr9XjYHGFm
[plop-tutorial]: https://www.youtube.com/playlist?list=PL6Mu1AMmTL-vR7eK-1EqewignxemucVo2
[npm-tutorial]: https://www.youtube.com/playlist?list=PL6Mu1AMmTL-sbySI5prQ6O6t79leQLUcb
[codingcat-dev]: https://youtube.com/watch?v=jwb5zi5bjfE
[compressed-fm]: https://compressed.fm
[cloudinary-devjams]: https://www.youtube.com/watch?v=QMQKXA9e2Ks
[frontend-nation]: https://www.youtube.com/watch?v=0Yz7mti0FcE
[that-conference]: https://youtube.com/live/_w8B2B-xyYI?si=HYtDVLm5hN4Rpsz2&t=16595
[rehype-cloudinary-image-size]: https://www.npmjs.com/package/@bradgarropy/rehype-cloudinary-image-size
[cloudinary]: https://cloudinary.com
[dev-hints]: https://youtube.com/playlist?list=PL8dVGjLA2oMpaTbvoKCaRNBMQzBUIv7N8
