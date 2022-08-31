---
layout: post
title:  "Day 4 of learning PowerShell"
date:   2021-07-06 18:01:46 -0500
categories: PowerShell Learning
---

I'm sharing my PowerShell learning journey for all to follow along. Some of you might already know this information
so this might be a refresher course or you can see how I went about it; for those that are new to PowerShell hopefully
these snippets help you along your PowerShell journey as well. 

Today I just learn just the running of commands. Mostly simple commands, but that is alright!

Display a list of running processes
{% highlight ruby %}
Get-Process
{% endhighlight %}

Display the 100 most recent entries from the Application event log. (Don't use Get-WinEvent for this).
{% highlight ruby %}
Get-EventLog -LogName Application -Newest 100
{% endhighlight %}

Display a list of all commands that are of the cmdlet type.
{% highlight ruby %}
Get-Command -Type Cmdlet
{% endhighlight %}

Display a list of all aliases
{% highlight ruby %}
Get-Alias
{% endhighlight %}

Make a new alias, so you can run np to launch Notepad from Powershell.
{% highlight ruby %}
New-Alias -Name "np" notepad
{% endhighlight %}

Display a list of services that begin with the letter M.
{% highlight ruby %}
Get-Service "M*"
{% endhighlight %}

Display a list of all Windows Firewall rules.
{% highlight ruby %}
Get-NetFirewallRule
{% endhighlight %}

Display a list only of inbound Windows Firewall rules.
{% highlight ruby %}
Get-NetFirewallRule -Direction Inbound
{% endhighlight %}