---
layout: post
title:  "Using AWS Elastic Beanstalk"
date:   2022-05-31 15:00:00 -0400
categories: aws
---

# Using AWS Elastic Beanstalk for my Weather API project

I am currently studying for my AWS Certified Cloud Practitioner exam and when learning about computing, I was drawn to AWS Elastic Beanstalk. It sounded like a simple product to use, so I set on a journey to learn more about it. As I was searching for more information on AWS Elastic Beanstalk I came across this tutorial, Deploying a Flask application to Elastic Beanstalk - AWS Elastic Beanstalk (amazon.com). This tutorial helped me with publishing my OpenWeather API project.

## First, I create a working directory

So, I need to create a new working directory of my new project. Yes, I already have a directory for my current Openweather API project, but I like to keep my projects separate specially when they a different variants. 

```bash
mkdir my-aws-eb-python-flask
cd my-aws-eb-python-flask
```

Lets create our new virtual environment.

```bash
virtualenv virt
source virt/bin/active
```

Let’s install flask in the virtual environment.

```bash
pip install flask==2.0.3
```

Lets make a requirements file that is required for our python application.

```bash
pip freeze > requirements.txt
```

Now that I already have my Python application written out, I’m just going to copy over to my new working directory. 

## Second, let deploy to AWS EB

Lets get the AWS EB CLI installed in my Windows Subsystem for Linux. Note, pay attention towards the end of the script to make sure to setup your $PATH.

```bash
git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git
python ./aws-elastic-beanstalk-cli-setup/scripts/ebcli_installer.py
```

Lets initialize our EB. 

```bash
eb init -p python-3.7 my-aws-eb-python-flask --region us-east-2
```

Now lets create the environment. Note, give this sometime to go through and setup. 

```bash
eb create my-aws-eb-python-flask -env
```

If you were following along the output of the command, you should now see its success and should have seen URL. You can easily open that up via the CLI.

```bash
eb open
```

You should now see your product running on AWS Elastic Beanstalk. 

## Optional, tear down EB environment

Now if you don’t want to leave your new EB environment running, since this does occur cost, you can tear it down easily via the following:

```bash
eb terminate my-aws-eb-python-flask -env
```

## My take aways

1.	Learned about Python.
2.	The EB CLI makes it really easy to spin up and destroy.
3.	AWS doesn't have the best of GitHub Actions but there is enough marketplace actions to get it to work.
4.	The AWS CLI makes it really easy to deploy new AWS Beanstalk application versions.
 