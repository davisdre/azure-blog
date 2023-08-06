---
layout: post
title:  "Discover The Benefits Of AWS CloudFormation"
---

# Discover The Benefits Of AWS CloudFormation
Hey, everyone! I'm back with another post about my journey with AWS CloudFormation. This time, I want to share with you how I created a VPC using a YAML template. A VPC is a virtual private cloud that lets you isolate your AWS resources from the public internet. It's pretty cool and useful, trust me.

So, how did I do it? Well, first of all, I needed to define a parameter for the VPC CIDR, which is the range of IP addresses that the VPC can use. I did this by adding a 'Parameters' section in my template and specifying the 'Type', 'Default' and 'Description' of the parameter. Here's what it looked like:

```yaml
Parameters:
 VPCCIDR:
  Type: String
  Default: 10.0.0.0/16
  Description: The CIDR block for the VPC
```

Next, I needed to create the VPC resource itself. I did this by adding a 'Resources' section in my template and specifying the 'Type', 'Properties' and 'Metadata' of the resource. The most important thing here was to give the VPC a name tag using the '!Sub' function of the stack name. This way, I could easily identify which VPC belonged to which stack. Here's what it looked like:

```yaml
Resources:
 MyVPC:
  Type: AWS::EC2::VPC
  Properties:
   CidrBlock: !Ref VPCCIDR
   EnableDnsSupport: true
   EnableDnsHostnames: true
   Tags:
    - Key: Name
     Value: !Sub ${AWS::StackName}-VPC
  Metadata:
   Comment: Create a VPC
```

After I finished writing my template, I saved it as a YAML file. Then, I downloaded and installed AWS CLI on my laptop so that I could deploy my template via the command line. I ran the following command to create a stack named 'MyVPCStack' in the us-east-2 region:

```bash
aws cloudformation deploy --stack-name MyVPCStack --template-file .\my-vpc-template.yaml --region us-east-2
```

And bingo! My VPC was created in a matter of minutes. I could see it in the AWS console and verify that it had the correct CIDR block and name tag. I was so proud of myself!

But wait, there's more. I also learned how to delete my stack using the AWS Toolkit for VS Code. This is a handy extension that lets you interact with your AWS resources from within your VS code editor. I simply right clicked on my stack name in the AWS Explorer and selected 'Delete'. Then, I confirmed that I wanted to delete the stack and all its resources.

And that's it! My VPC was gone, just like that. No hassle, no waste, no regrets.

# Support
I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>