---
layout: post
title: Optimizing File Organization for Plex on Synology NAS
---

🚀 Optimizing File Organization for Plex on Synology NAS

As a tech enthusiast and Plex aficionado, I recently embarked on a mission to streamline my media library. My trusty Synology NAS DS 220+ was the backbone of this endeavor, and PowerShell came to the rescue!

Here’s a snippet of the PowerShell script I used to whip my files into shape, adhering to Plex’s best practices for naming and organization:
```PowerShell
# Specify the folder path where your files are located
# Example: $folderPath = 'C:\path\to\your\folder'
$folderPath = 'C:\path\to\your\folder'

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath

foreach ($file in $files) {
    $newName = $file.Name
    
    # Remove unwanted wording
    $newName = $newName -replace '-1ndd', ''
    
    # Add a space before and after the dash
    $newName = $newName -replace '-', ' - '
    
    # Replace underscores with spaces
    $newName = $newName -replace '_', ' '

    # Construct the new file path
    $newPath = Join-Path -Path $folderPath -ChildPath $newName

    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName

    Write-Host "Renamed '$($file.Name)' to '$newName'"
}

# Cheers to a well-organized Plex library! 🎉
```

Remember, a tidy media library not only pleases the eye but also ensures smoother streaming experiences. Let’s keep our digital lives clutter-free! 📺🎶

Feel free to customize it further to reflect your personal journey and insights. Happy organizing! 🌟

I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>