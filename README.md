# azure-blog
My own blog running on Azure technologies. I'm using Jekyll. Created via Windows 11 using Windows Subsystem Linux (WSL) using Ubuntu.

## A few things you will need
- Install Jekyll, which I installed using WSL.
- You will need an Azure account.
- You will need an GitHub account.
- Install Azure CLI.

### Helpful links
- Azure CLI Static web app documentation.
    - https://docs.microsoft.com/en-us/cli/azure/staticwebapp?view=azure-cli-latest#az-staticwebapp-create
- How go generate SSH keys for GitHub.
    - https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- Quickstart guide on how to create a Azure Static Web app via Azure CLI.
    - https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=vanilla-javascript
- Tutorial on how to publish a Jekyll app to Azure Static Web App.
    - https://docs.microsoft.com/en-us/azure/static-web-apps/publish-jekyll 

## First, lets install Jekyll in WSL and create our Jekyll app.
Here is how I got Jekyll installed. 

```bash
# install ruby
sudo apt-get install ruby-full build-essential zlib1g-dev

# lets setup so RubyGems are not installed as root user.
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Lets install Jekyll and Bundler
gem install jekyll bundler
```

Now that we have Jekyll installed in WSL we should now be able create our Jekyll app. So, lets create out Jekyll app now.

```bash
jekyll new azure-blog # you can rename 'azure-blog' to whatever you like.
cd azure-blog # lets navigate to our new app.
```

Now we are in our new Jekyll app. 

## Second, lets get this add to GitHub
Now that we have our initial app created lets get this added to GitHub. Assuming you already now how to use GitHub, create a new repository, name it whatever you like, I just named my after the app `azure-blog`. Now lets push our app to GitHub.

```bash
git init # start our new repository

git add -A # add all files

git commit -m "initial commit" # add our initial comment

git remote add origin https://github.com/<YOUR_USER_NAME>/azure-blog # lets add our origin you should got then when created new repo on the GitHub website

git branch -M Prod # lets create a branch you can rename 'Prod' to whatever

git push -u origin Prod # lets push our app to github
```

Now our code should be push to our GitHub repo. You should be able to see its at `https://github.com/<YOUR_USER_NAME>/azure-blog`. 

## Third, lets create our Azure Static Web App
Assuming you already have Azure CLI installed and have an Azure account, lets create our Azure Static Web App.

```bash
# lets login to Azure
az login

# lets create a resource group
az group create \
--name azure-blog-rg \
--location "eastus2"

# lets create our static web app from our github repo
az staticwebapp create \
--name azure-blog-static-web-app \
--resource-group azure-blog-rg \
--source https://github.com/<YOUR_USER_NAME>/azure-blog \
--branch Prod \
--app-location "./" \
--output-location "_site" \
--location "eastus2" \
--sku Free \
--login-with-github \
--api-location ""
```

Once the Azure Static Web app is created, go back to your GitHub repo and select the 'actions' tab. Once you see a green check mark then the Azure Static Web App was able to create your web app with your github repo. If not, then something else is going on and you will need to troubleshoot further. 

Now that we have a green mark, lets get our website's URL of our Azure Static Web App we just created via the Azure CLI.

```bash
az staticwebapp show \
--name azure-blog-static-web-app \
--query "defaultHostname"
```

It should output a hostname something like this.

```text
"your-website.1.azurestaticapps.net"
```
## Success, you did it!

We officially have our blog up and running on Azure Static Web App. 