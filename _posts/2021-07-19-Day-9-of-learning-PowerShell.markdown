---
layout: post
title:  "Day 9 of learning PowerShell"
date:   2021-07-19 18:00:00 -0500
categories: PowerShell
---

Last week was a busy week at my employer, so I didn't get any PowerShell learning, but I'm back at it today. 

On day 9 of my PowerShell learning journey, I take more of a deeper look into pipeline. Below are some of my takeaway notes. Feel free to use them at your leisure.

# My notes

Would the following command work to retrieve a list of installed hotfixes from all the computers in the Azure tenant? In short, yes, due to using the *-expand* option to create into a string. 
{% highlight ruby %}
Get-HotFix -computerName (Get-AzureADDevice | select -expand displayname)
{% endhighlight ruby %}

Write a command that uses pipline parameter binding to retrieve a list of running processes from every computer in Azure AD.
{% highlight ruby %}
Get-AzureADDevice | Select-Object @{l='computername';e={$_.displayname}} | Get-Process
{% endhighlight ruby %}

Write a commandd that retrieves a liste of installe services from every computer in Azure AD using a parenthetical command (a command in parenthese).
{% highlight ruby %}
Get-Service -computerName (Get-AzureADDevice | select -expand displayname)
{% endhighlight ruby %}