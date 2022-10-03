---
layout: post
title:  "Day 8 of learning PowerShell"
date:   2021-07-13 18:00:00 -0500
categories: PowerShell
---

On day 8 of my PowerShell learning journey, I learned about objects or some might say/think *PSObject*. Below are some of my takeaway notes. Feel free to use them at your leisure.

# My notes

Identify a cmdlet that produces a random number.
{% highlight ruby %}
Get-Command *random*
help Get-Random -ShowWindow
Get-Random
{% endhighlight ruby %}

Identify a cmdlet that displays the current date and time.
{% highlight ruby %}
Get-Command *time*
Get-Command *date*
help Get-Date -ShowWindow
Get-Date
{% endhighlight ruby %}

Use cmdlet above to display on the current day of the week.
{% highlight ruby %}
Get-Date | gm
Get-Date | Select DayofWeek
{% endhighlight ruby %}

Identify a cmdlet that displays information about installed hotfixes on Windows Systems.
{% highlight ruby %}
Get-Command *fix*
help Get-HotFix -ShowWindow
Get-HotFix
{% endhighlight ruby %}

Using the cmdlet above display a list of installed hotfixes. Then extend the expression to sort the list by installation date, and display only the installation date, the user who installed the hotfix, and the hotfix ID.
{% highlight ruby %}
Get-HotFix | gm
Get-Hotfix | Sort InstalledOn | Select InstalledOn,InstalledBy,HotFixID
{% endhighlight ruby %}

Using the above cmdlet, sort by hotfix description and include the description, the hotfixID, and the installation date. Put results into an HTML file. 
{% highlight ruby %}
Get-HotFix | Sort Description | Select Description,HotFixID,InstalledOn | ConvertTo-Html | Out-File hotfix.html
{% endhighlight ruby %}

Display a list of the 50 newest entries from the Security Event log. Sort the list with the oldest entries appearing first, and with entries made at the same time sorted by there index. Display the index, time, and source for each entry. Output to a text file.
{% highlight ruby %}
Get-EventLog -LogName Security -Newest 50 | Sort Index,TimeGenerated | Select Index,TimeGenerated,Source | out-file events.txt
{% endhighlight ruby %}