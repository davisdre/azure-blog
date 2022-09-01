---
layout: post
title:  "Day 7 of learning PowerShell"
date:   2021-07-12 18:00:00 -0500
categories: PowerShell Learning
---

On day 7 of my PowerShell learning journey, I learned about adding commands aka *PSSnapin* or *module*. Below are some of my takeaway notes. Feel free to use them at your leisure.

# My notes

Run the Networking troubleshooting pack to check for web connectivity.
{% highlight ruby %}
Get-Module *trouble* -ListAvailable
help troubleshootingpack
help Invoke-TroubleshootingPack -ShowWindow
help Get-TroubleshootingPack -ShowWindow
# when looking at the examples I noticed where the troubleshooting packs were located. 
Get-TroubleshootingPack -Path C:\Windows\diagnostics\system\Networking | Invoke-TroubleshootingPack
# Then go through the step listed.
{% endhighlight ruby %}