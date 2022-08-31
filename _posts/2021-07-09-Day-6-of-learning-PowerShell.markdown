---
layout: post
title:  "Day 6 of learning PowerShell"
date:   2021-07-09 18:00:00 -0500
categories: PowerShell Learning
---

On day 6 of my PowerShell learning journey, I learned about the pipeline and how to use it with multiple commands. Below are some of my takeaway notes. Feel free to use them at your leisure.

# My notes

Create two similar, but different, text files. Try comparing them by using Diff.
{% highlight ruby %}
New-Item -Path . -Name "file1.txt" -ItemType "file" -Value "This is file 1."
New-Item -Path . -Name "file2.txt" -ItemType "file" -Value "This is file 2."
diff -ReferenceObject (get-content .\file1.txt) -DifferenceObject (Get-Content .\file2.txt)
{% endhighlight ruby %}

What happens if you run Get-Service | Export-CSV services.csv | Out-File?
Will return with error since there is not path for Out-File, plus Export-CSV already created services.csv file.

What other means does Stop-Service provide for you to specify the service or services you want to stop?
{% highlight ruby %}
Stop-service -name
{% endhighlight ruby %}

What if you want to create a pipe-delimited file insta of a comma-seperated (CSV) file?
{% highlight ruby %}
Export-Csv services.csv -delimiter "|"
{% endhighlight ruby %}

Is there a way to eliminate the # comment line from the top on a exported CSV file?
{% highlight ruby %}
Export-CSV services.csv -NoTypeInformation
{% endhighlight ruby %}

What parameter would prevent them from overwriting an existing file? What parameter would ask whether you were sure before proceedig to write the output file?
{% highlight ruby %}
Export-CSV services.csv -noclobber
Export-CSV services.csv -confirm
{% endhighlight ruby %}

How can you tell Export-CSV to us the system's default separator rather than a comma?
{% highlight ruby %}
Export-CSV services.csv -UseCulture
{% endhighlight ruby %}