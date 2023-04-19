---
layout: post
title:  "How to Upgrade Your Bitwarden Self-Hosted Instance on Linode"
---

# How to Upgrade Your Bitwarden Self-Hosted Instance on Linode

If you're like me, you love using Bitwarden as your password manager. It's secure, open source, and easy to use. But did you know that you can also host your own Bitwarden server on your own hardware? That way, you have full control over your data and don't have to rely on any third-party service.

I've been running my own Bitwarden server on a Linode VM with Ubuntu for a while now, and it's been working great. But recently, I noticed that there was a new version of Bitwarden available with some cool new features. So I decided to upgrade my server and see what's new.

In this blog post, I'll show you how I upgraded my Bitwarden self-hosted instance on Linode using the standard deployment option . This option uses Docker Compose to run multiple containers for different services such as web vault, API, database, etc. If you're using the unified deployment option, which runs everything in a single container with different database options, the process might be different.

## Step 1: Backup Your Data

Before doing anything else, make sure you backup your data. You don't want to lose all your passwords if something goes wrong during the upgrade process. To backup your data, follow these steps:

- Log into your Linode VM via SSH.
- Navigate to the directory where you installed Bitwarden. For me, it's `/opt/bitwarden`.
- Run `./bitwarden.sh backups` to create a backup of your database and attachments.
- Copy the backup file from `./bwdata/backups` to a safe location.

## Step 2: Update Your Server

Now that you have a backup of your data, you can proceed with updating your server. To do this, follow these steps:

- Log into your Linode VM via SSH.
- Navigate to the directory where you installed Bitwarden. For me, it's `/opt/bitwarden`.
- Run `./bitwarden.sh updateself` to update the Bitwarden script itself.
- Run `./bitwarden.sh update` to update all the Docker images and containers.
- Wait for the update process to finish.

## Step 3: Enjoy Your New Features

That's it! You've successfully upgraded your Bitwarden self-hosted instance on Linode. Now you can enjoy all the new features that come with the latest version of Bitwarden. Some of them are:

- A redesigned web vault with improved usability and accessibility.
- A new Send feature that lets you securely share files and text snippets with anyone.
- A new Emergency Access feature that lets you grant access to your vault in case of an emergency.
- A new Trash feature that lets you restore deleted items from your vault.

You can learn more about these features from [the official blog](https://bitwarden.com/blog/).

I hope this blog post was helpful for anyone who wants to upgrade their Bitwarden self-hosted instance on Linode. Thanks for reading!