---
layout: post
title:  "Day 5 of learning PowerShell"
date:   2021-07-08 19:01:00 -0500
categories: PowerShell
---

On day 5 of my PowerShell learning journey, I learned about how PSProviders are used. Below are some of my takeaway notes. Feel free to use them at your leisure.

# My notes

In the Registry, go to HKEY_CURRENT_USER\software\microsoft\windows\currentversion\explorer. Locate the Advanced key, and set its DontPrettyPath property to 1.
{% highlight ruby %}
Set-Location -Path HKCU:
Set-Location -Path .\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer
Set-ItemProperty -Path Advanced -Name DontPrettyPath -Value 1
{% endhighlight ruby %}

Create a new directory called C:\Labs.
{% highlight ruby %}
New-Item -Path C:\ -Name "Labs" -ItemType "directory"
{% endhighlight ruby %}

Create a zero-lenth file named C:\Labs\Test.txt (use New-Item).
{% highlight ruby %}
New-Item -Path C:\Labs -Name "Test.txt" -ItemType "file"
{% endhighlight ruby %}

Is it possible to use Set-Item to change the contents of C:\Labs\Test.txt to -TESTING? Or do you get an error? If you get an error, why?
{% highlight ruby %}
Set-Item : Provider operation stopped because the provider does not support this operation.
{% endhighlight ruby %}

Using the Environment provider, display the value of the system environment variable %TEMP%.
{% highlight ruby %}
Set-Location -Path ENV:
Get-Childitem
{% endhighlight ruby %}

What are the differences between the -Filter, -Include, and -Exclude parameter of Get-ChildItem
{% highlight ruby %}
-Filter = the cmdlet gets the objects rather than having PowerShell filter the objects after they're retrieved. 
-Include = Any matching item is included in the output.
-Exclude = Any matching item is excluded from the output.
{% endhighlight ruby %}