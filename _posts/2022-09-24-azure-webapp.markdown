---
layout: post
title:  "Create a website in Azure in 10 minutes"
date:   2022-09-24 15:00:00 -0400
categories: azure
---

If you have a simple html website, we can create a website using Azure Webapp in less than 10 minutues. Here is how you can acomplish that. Assuming you already have you simple html website already created. 

# Pre-reques
This setup is based on a Windows 11 workstation.
- AZ CLI
- Windows Terminal

# Build

## Step 1
Let's launch the **Windows Terminal** on our workstation, open a **Azure Cloud Shell** terminal, and authenticate with our Azure account. 

## Step 2
Let's create a directory and change into that new working directory.
``` bash
mkdir htmlapp

cd htmlapp
```

## Step 3
Let's create our index.html
``` bash
nano index.html
```

``` text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport"
     content="width=device-width, initial-scale=1, user-scalable=yes">
 
  <title>Hello World!</title>
</head>
<body>
Hello World!
 
</body>
</html>
```

Save the file.

## Step 4
Lets create our Azure Webapp.

``` bash
# create variables for our resource group name and webapp name
resourceGroup=htmlappResourceGroup
appName=htmlapp$RANDOM

# create resource group
az group create --name $resourceGroup --location eastus

# run webapp up to create our Azure webapp, this will also create the azure service plan as well.
az webapp up -g $resourceGroup -n $appName -l eastus --html
```

## Step 5
We can use this as a CI/CD if we want to. Just go back and make a edit ```nano index.html``` . Now all we need to do to push the edits to the web app is just doing the same command in previous step.

``` bash
az webapp up -g $resourceGroup -n $appName -l eastus --html
```

# Clean up
Now lets clean up our resource group.

``` bash
az group delete --name $resourceGroup
```