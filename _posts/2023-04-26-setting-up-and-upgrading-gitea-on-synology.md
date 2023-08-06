---
layout: post
title:  "Setting Up and Upgrading Gitea on Synology NAS Using Docker"
---
# Introduction

In this blog post, we'll discuss how to set up a Gitea container on a Synology NAS (DS220+) using Docker. Gitea is a lightweight, self-hosted Git service that allows you to create and manage repositories for storing code snippets. We'll also cover the process of upgrading the Gitea container to the latest version when a new release is made.

## Part 1: Setting Up Gitea on Synology NAS Using Docker

### Step 1: Install Docker on Synology NAS

Open the DiskStation Manager (DSM) web interface.
Navigate to the Package Center, search for "Docker," and click "Install."
### Step 2: Set up a Gitea container

Open the Docker app in DSM.
Navigate to the "Registry" tab, search for "gitea," and download the official Gitea image (gitea/gitea).
### Step 3: Create and configure the Gitea container

In the "Image" tab, select the Gitea image and click "Launch."
Configure the container settings, including the container name, volume mappings, network ports, and auto-restart.
### Step 4: Deploy the container

Review the settings in the "Create Container" window, and click "Apply" to deploy the container.
### Step 5: Access the Gitea web interface

Open a web browser and go to http://[NAS_IP]:3000 (replace "[NAS_IP]" with your Synology NAS IP address).
Complete the Gitea setup wizard to configure the admin account, database, and other settings.
## Part 2: Upgrading Gitea Container to the Latest Version

### Step 1: Pull the latest Gitea image

Open the Docker app in DSM.
Go to the "Registry" tab, search for "gitea," and click "Download." Select the "latest" tag or the desired version tag.
### Step 2: Stop and remove the existing Gitea container

Go to the "Container" tab, stop the current Gitea container, and remove it. This won't delete the mapped volume data.
### Step 3: Create a new Gitea container with the updated image

Go to the "Image" tab, select the updated Gitea image, and click "Launch."
Configure the settings as you did for the original container, ensuring you map the same volume and ports, and enable auto-restart.
### Step 4: Start the new container

Go to the "Container" tab, select the new Gitea container, and click "Start."
# Conclusion:

By following these steps, you can easily set up and upgrade a Gitea container on your Synology NAS using Docker. This provides a simple and convenient way to store and manage your code snippets. Remember to regularly check for updates and repeat the upgrade process as needed to keep your Gitea instance up-to-date and secure.

I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>