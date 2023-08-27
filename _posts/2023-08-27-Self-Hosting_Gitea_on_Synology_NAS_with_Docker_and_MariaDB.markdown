---
layout: post
title: Self-Hosting Gitea on Synology NAS with Docker and MariaDB
---

# Introduction
In this blog post, I will share with you how I am self-hosting Gitea on my Synology Nas DS 220+. Gitea is a lightweight and open source Git service that allows you to create and manage your own repositories, issues, pull requests, and more. Self-hosting means that you run the service on your own hardware, instead of relying on a third-party provider. This gives you more control, privacy, and customization options for your Git projects.

# Prerequisites
- Hardware: Synology NAS (mine is DS220+)
- Software: Container (formely Docker), MariaDB 10 packages

# Installation Steps
Now lets get into the setup. 

## Setting up MariaDB
If you want to use MariaDB as the database backend for Gitea, you need to do some configuration steps. Here is a quick guide on how to set up MariaDB on a Synology NAS:

1. Install MariaDB package via Synology Package Center. You can find it under the Database category. Follow the instructions to complete the installation.
2. Create a new database and a user for Gitea via mysql console. You can access the mysql console by logging in to your NAS via SSH and typing `mysql -u root -p`. Enter the root password that you set during the installation of MariaDB.
2.1 Grant privileges to the user that you created for Gitea. For example, if your database name is `gitea_db` and your user name is `gitea_user`, you can use the following commands:

```sql
CREATE DATABASE gitea_db;
CREATE USER 'gitea_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON gitea_db.* TO 'gitea_user'@'localhost';
FLUSH PRIVILEGES;
```
That's it! You have successfully set up MariaDB for Gitea on your Synology NAS. You can now proceed to install Gitea and configure it to use the database that you created.

## Configuring Docker and Gitea

1. Install MariaDB package via Synology Package Center. You can find it under the Utilities category. Follow the instructions to complete the installation.
2. You will need to create a docker-compose.yml file in a folder of your choice. This file will define the configuration of the Gitea container, such as the ports, volumes, networks, and environment variables. NOTE, create a new volume in File Station Package so all storage is persistent and save this docker-compose.yml file in it. You can use the following template as a reference:

```yaml
version: "3"

networks:
  gitea:
    external: false

services:
  server:
    image: gitea/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=YOUR-UID
      - USER_GID=YOUR-GID
      - GITEA__database__DB_TYPE=mysql
      - GITEA__database__HOST=THE-IP-OF-YOUR-DATABASE
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=YOUR-PASSWORD
    restart: always
    networks:
      - gitea
    volumes:
      - /volume1/docker/gitea/gitea:/data
    ports:
      - "3000:3000"
      - "222:22"
```

3. You will need to open the Container Packege and Create a new project. Project name I gave was 'gitea' and the Path was the volume I created in the File Station and where I stored my docker-compose.yml. It should auto detect your docker-compose.yml and then click Next. This will build out your Docker environment for Gitea.
4. Now you can access the Gitea web UI by opening your browser and typing:
[http://<your_synology_ip>:3000](http://<your_synology_ip>:3000)
You will be greeted by a page that asks you to complete the initial configuration of Gitea. Here you will need to enter some basic information, such as the site title, the admin account details, and the database settings. Make sure that the database settings match the ones that you specified in the docker-compose.yml file.  

# Accessing Gitea
Once you have completed the initial configuration, you can log in with your admin account and start using Gitea. You can create new repositories, users, organizations, teams, and more. You can also configure various settings for your Gitea instance, such as authentication methods, email notifications, webhooks, etc.
![](/assets/2023-08-27/Screenshot%202023-08-27%20183945.png)

# Conclusion
Congratulations! You have successfully set up a self-hosted Gitea service using Docker on your Synology NAS. I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>