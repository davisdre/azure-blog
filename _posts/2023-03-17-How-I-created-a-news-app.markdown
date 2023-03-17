---
layout: post
title:  "How I Built a News App Using NewsAPI, Bootstrap, and JavaScript"
---

# How I Built a News App Using NewsAPI, Bootstrap, and JavaScript

Hello everyone! In this blog post, I want to share with you how I built a simple news app using NewsAPI, Bootstrap, and some JavaScript. The app displays the latest U.S. headlines from various sources and categories, and allows you to click on each article to read more. The best part is that I did it all within one single index.html file!

![](/assets/2023-03-17/NewsApp_Demo.gif)

## Why I Chose This Project

I have always been interested in web development and wanted to learn more about how to use APIs, frameworks, and libraries to create dynamic web pages. I also wanted to challenge myself by building something with minimal code and files.

I decided to use NewsAPI because it provides access to thousands of news sources and articles from around the world. It also has a free plan that allows up to 100 requests per day, which is enough for my personal project.

I chose Bootstrap because it is a popular and easy-to-use framework that offers responsive design, pre-built components, and customizable themes. It also has extensive documentation and examples that helped me get started quickly.

I used JavaScript because it is the most widely used scripting language for web development and allows me to manipulate the DOM (Document Object Model) elements dynamically. It also has many built-in methods and libraries that make coding easier.

## How I Built It

The major build steps for my project were as follows:

1. Create a new folder for my project.
2. Get an API key from NewsAPI (https://newsapi.org/). This is required to make requests to their API endpoints.
3. Create an index.html file inside my project folder.
4. Use Bootstrap for the initial layout of my index.html file (https://getbootstrap.com/docs/5.3/getting-started/introduction/). I added a link tag for the Bootstrap CDN (Content Delivery Network) in the head section of my HTML document.
5. Install 'Live Server' VS Code Extension by Ritwick Day (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). This allows me to run my index.html file on a local server and see the changes live in my browser.
6. Use Bootstrap navbar component (https://getbootstrap.com/docs/5.3/components/navbar/) for the header of my app.
7. Use Bootstrap card component (https://getbootstrap.com/docs/5.3/components/card/) for displaying each news article in a grid layout.
8. Write some JavaScript code inside a script tag at the end of my body section of my HTML document. The code does the following:

    - The fetchNews function is an asynchronous function that makes an API request to NewsAPI using the fetch method. It constructs the API endpoint URL by including the country parameter (set to US) and your API key.

    - The API response is then parsed as JSON and stored in the response variable.

    - The code then iterates through the articles array in the response object and generates HTML elements to display each article's title, description, image, and a link to the full article.

    - The generated HTML elements are then added to the .content element of your webpage using document.querySelector(".content").innerHTML.

## What I Learned

By building this project,

- I learned how to use NewsAPI to fetch data from various news sources
- I learned how to use Bootstrap framework to create responsive web pages with minimal code
- I learned how to use JavaScript language features such as  fetch().
- I learned how to use VS Code extension Live Server for testing my app locally

## What's Next

This project was fun and rewarding but there are still many things that can be improved or added such as:

- Adding search functionality for finding specific articles or keywords
- Adding filters or sorting options

## Where can I find your project

This project of mine is on GitHub and you can find it [here](https://davisdre.xyz/ce4).