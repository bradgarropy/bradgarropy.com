---
title: 🟦 lcd marquee
slug: lcd-marquee
date: "2026-03-16"
topic: coding
tags: ["hardware", "pi"]
---

After getting into electronics a few weeks ago, I set out to build my first _real project_. I wanted something that had both a hardware component, as well as a web application to go along with it. I landed on the idea of a real time scrolling LCD message board.

## 📋 project planning

The goal of the project was to have an LCD screen that displayed messages in real time as users sent them to me. There would be a web application with a form that allows users to submit messages. I also wanted the web application to be real time as well, so it should also be able to receive and display the same messages as the LCD.

## ⚡ hardware and microcontroller

Starting with the hardware, I hooked up the [LCD screen][lcd] to my [Raspberry Pi 5][pi]. Even though the LCD had many inputs and outputs, the module I used simplified the connection to only four wires.

![lcd marquee][circuit-diagram]

With just a few [lines of python][scroll-message] I had text scrolling across the screen. If you're interested in the full source code, you can find it in my [lcd-marquee-pi][lcd-marquee-pi] repository.

## ⏱️ realtime

Now came the interesting part, setting up some sort of real time system to accept and deliver messages. Apparently in the IoT world there is a standard for this kind of stuff called [MQTT][mqtt]. Many hosts implement these protocols, so I went with [HiveMQ][hive-mq] to set up the MQTT service.

The setup was super quick from the HiveMQ dashboard. The next step was implementing clients for both the JavaScript web application and the Python running on the microcontroller. Luckily there are libraries in both languages for MQTT that were easy to configure.

![hivemq console][hivemq-console]

I was able to test the server and client setup from the HiveMQ console, making it very easy to confirm that my code was listening to messages properly.

## 🌐 web application

The web application was the part of the project that I was most comfortable working with. I spun up a quick [react-router][react-router] application and hosted it on [Cloudflare][cloudflare]. I wanted it to have a unique look and feel, so I recreated the LCD screen with a [custom font][lcd-dot-matrix] to make it feel real.

![lcd marquee][lcd-marquee]

At its core, the web application is a simple form that submits messages and sends them off to the MQTT server. However, the MQTT client implementation wasn't as straightforward here. Because the web application is running as a [Cloudflare Worker][worker], I had to use a [Durable Object][do] to listen to the MQTT server and send WebSocket messages to the browser.

You can check out the full source code in my [lcd-marquee-web][lcd-marquee-web] repository.

## 🏰 architecture

The overall architecture looks something like this. [HiveMQ][hive-mq] is at the center of it all. The browser acts as a publisher as well as a subscriber. The microcontroller acts only as a subscriber. There is an extra Durable Object in the mix to handle the real time communication between the MQTT server and the browser via WebSockets.

![lcd marquee architecture][lcd-marquee-architecture]

While it may have been simpler to host on a long running [Node][node] server somewhere, I've been really loving the flexibility of deploying to [Cloudflare][cloudflare] lately.

## 📢 message me

This project is fully up and running! Send me a message from this link.

https://lcd.bradgarropy.com

You'll even be able to see what other people are sending me as well!

[lcd]: https://sunfounder.com/products/i2c-lcd1602-module
[pi]: https://amzn.to/4lRn82t
[circuit-diagram]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/lcd-circuit-diagram.png
[scroll-message]: https://github.com/bradgarropy/lcd-marquee-pi/blob/main/lcd_marquee.py#L37-L54
[mqtt]: https://mqtt.org
[hive-mq]: https://hivemq.com
[hivemq-console]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/hivemq-console.png
[react-router]: https://reactrouter.com
[cloudflare]: https://cloudflare.com
[lcd-dot-matrix]: https://fontstruct.com/fontstructions/show/142810/lcd_dot_matrix
[lcd-marquee]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/lcd-marquee.png
[lcd-marquee-architecture]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/lcd-marquee-architecture.png
[lcd-marquee-pi]: https://github.com/bradgarropy/lcd-marquee-pi
[lcd-marquee-web]: https://github.com/bradgarropy/lcd-marquee-web
[worker]: https://workers.cloudflare.com
[do]: https://cloudflare.com/developer-platform/products/durable-objects
[node]: https://nodejs.org
