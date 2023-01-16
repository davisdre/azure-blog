---
layout: post
title:  "Use your hotmail email account on Bitwarden self-hosted for SMTP"
---

One of the longest running self-hosted items I run is, [Bitwarden](https://bitwarden.com/). One of items that I could never figure our for a period of time was the SMTP setup for the application. So, over the weekend I decided to give it another go. After using some F12/Dev tools in the Edge web browser, I was first able to identity that I needed to enable some additional items in my proxy - 1. Websocket support. 2. HTTP/2 support.

So, if you are trying to figure out how to use you hotmail email account for the SMTP setup for your self-hosted Bitwarden, here are the environment entries I used in the **global.override.env**.

```
globalSettings__mail__replyToEmail=UserName@hotmail.com
globalSettings__mail__smtp__host=smtp.office365.com
globalSettings__mail__smtp__port=587
globalSettings__mail__smtp__ssl=true
globalSettings__mail__smtp__username=UserName@hotmail.com
globalSettings__mail__smtp__password=AppPassword
globalSettings__mail__smtp__startTls=true
```

Hopefully this help you if you are experiencing the same problem as well. 