---
layout: post
title: How to use MariaDB on Synology NAS with Docker
---

# Introduction
In this blog post, I will share with you how I was able to use MariaDB on my Synology NAS DS 220+ and connect it to a docker container that is also Hosted on my Synology NAS. This also assumes you are ready have MariaDB installed and configured on your Synology NAS. For our example I'll show you how to setup Monica, an open-source personal CRM which helps you organize your social interactions.

# Setup database
First, I created a new database by SSH into my Synology NAS and logging into the MariaDB command line interface and running the following code:
```sql
CREATE DATABASE IF NOT EXISTS monica_db;

CREATE USER 'monica_user'@'172.17.0.%' IDENTIFIED BY 'PASSWORD';

GRANT ALL ON monica_db.* TO 'monica_user'@'172.17.0.%';
```
This code creates a new database called monica_db and a new user called monica_user with the password PASSWORD. The user has access to the database from any IP address that starts with 172.17.0, which is the default network for docker containers on Synology NAS.

# Setup Docker Container
Next, I went into the Container Manager app in the Synology NAS and downloaded the Monica:latest registry. I create a new folder in my Docker volume where I keep all of the Docker container persistence data. I created a new container, made sure to use Monica:lastest image, made sure to attach my folder to the container in the configuration along with adding the following environment variables:
```
DB_PORT=3306
DB_DATABASE=monica_db
DB_USERNAME=monica_user
DB_PASSWORD=PASSWORD
DB_HOST=192.168.1.81
```
These environment variables tell the Monica container how to connect to the MariaDB database that we created earlier. The DB_HOST is the IP address of my Synology NAS on my local network.

Then I clicked finish/build, waited about 15 minutes (at least for me) for the build to complete. You can follow its progress by going into the container and keeping an eye on the 'log' section.

# Accessing Monica
Finally I open up my web browser to [http://192.168.1.81:8080](http:/192.168.1.81:8080), I set up the user, which is the admin of application, and I was good to go from there. Now you can enjoy your own self-hosted personal CRM.
![](/assets/2023-10-14/Screenshot%202023-10-14%20134538.png)


# Conclusion
Congratulations! You have successfully set up a Docker container using MariaDB that is hosted on your Synology NAS. I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>