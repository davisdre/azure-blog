---
layout: post
title:  "Day 3 of learning PowerShell"
---

I'm sharing my PowerShell learning journey for all to follow along. Some of you might already know this information
so this might be a refresher course or you can see how I went about it; for those that are new to PowerShell hopefully
these snippets help you along your PowerShell journey as well. 

Update help files
{% highlight ruby %}
Update-Help
{% endhighlight %}

How to find a cmdlet that output/convert to html
{% highlight ruby %}
Get-Command *html* -CommandType Cmdlet
{% endhighlight %}
Result= ConvertTo-Html

How to find a cmdlet that can output by either file or printer.
{% highlight ruby %}
Get-Command *file*,*printer* -CommandType Cmdlet
{% endhighlight %}
Result= Out-File or Out-Printer

How to find a cmdlet that you can use to write to event log.
{% highlight ruby %}
Get-Command *log*,*event*
{% endhighlight %}
Result= Write-EventLog

How to find the cmdlets to create, modify, export, or import aliases?
{% highlight ruby %}
Get-Command *alias*
{% endhighlight ruby %}
Results= New-Alias, Set-Alias, Export-Alias, and Import-Alias

Is there a way to keep a transcript of everything you do in the shell?
{% highlight ruby %}
Get-Command *transcript*
{% endhighlight ruby %}
Results= Start-Transcript and Stop-Transcript

How can you get only the most recent 100 entries in the Security event log?
{% highlight ruby %}
Get-Command *event*,*log*
{% endhighlight ruby %}
Result= Get-EventLog
{% highlight ruby %}
Get-EventLog -LogName Security -Newest 100
{% endhighlight ruby %}

Is there a way to retrieve a list of services on a remote computer?
{% highlight ruby %}
Get-Service -ComputerName "Computer02"
{% endhighlight ruby %}

Is there a way to find what processes are running on a remote computer?
{% highlight ruby %}
Get-Service -Computername "Computer02" | Where-Object {$_.Status -eq "Running"}
{% endhighlight ruby %}

Width setting for Out-File.
{% highlight ruby %}
Out-file -Width
{% endhighlight ruby %}

Added to a File
{% highlight ruby %}
Out-File -Append
{% endhighlight ruby %}

Get a list of all aliases
{% highlight ruby %}
Get-Command * -CommandType Alias
{% endhighlight ruby %}

shortest command line to get running processes from a computer named server1
{% highlight ruby %}
gsv -c server1 | Where-Object {$_.Status -eq "Running"}
{% endhighlight ruby %}