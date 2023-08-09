---
layout: post
title:  "Configure an AWS static site with Cloudflare"
---

# Configure an AWS static site with Cloudflare
In this blog post, I will share how I configured an Amazon Web Services (AWS) static site to use Cloudflare as its proxy. This setup allows me to benefit from Cloudflare's security and performance features, such as SSL encryption, caching, and firewall.

The first step was to create an Amazon S3 bucket and give it the name of my sub-domain. For example, if my domain name is example.com, I named my bucket blog.example.com. This is important because it allows Cloudflare to recognize the bucket as the origin server for the sub-domain.

The next step was to add a S3 bucket policy to only allow access from Cloudflare. This way, I can prevent anyone from accessing my site directly through the S3 URL, and force them to go through Cloudflare instead. The bucket policy looks like this:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Allow Cloudflare",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::blog.example.com/*",
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": [
                        "173.245.48.0/20",
                        "103.21.244.0/22",
                        "103.22.200.0/22",
                        "103.31.4.0/22",
                        "141.101.64.0/18",
                        "108.162.192.0/18",
                        "190.93.240.0/20",
                        "188.114.96.0/20",
                        "97.234.240.0/22",
                        "198.41.128.0/17",
                        "162.158.0.0/15",
                        "104.16.0.0/13",
                        "104.24.0.0/14",
                        "172.64.0.0/13",
                        "131.0.72.0/22",
                        "2400:cb00::/32",
                        "2606:4700::/32",
                        "2803:f800::/32",
                        "2405:b500::/32",
                        "2405:8100::/32",
                        "2a06:98c0::/29",
                        "2c0f:f248::/32"
                    ]
                }
            }
        }
    ]
}
```

The list of IP addresses in the policy corresponds to Cloudflare's network ranges, which you can find here: https://www.cloudflare.com/ips/

After that, I uploaded my static content to my S3 bucket using the AWS console or a tool like AWS CLI.

The final step was to set up my CNAME record to point my subdomain to my S3 bucket in Cloudflare's DNS settings.

I also had to add a Page Rule in Cloudflare and set the URL to my subdomain and set SSL to Flexible.

This means that Cloudflare will encrypt the traffic between the visitor and Cloudflare, but not between Cloudflare and the S3 bucket due to by default only HTTP is used when enabling the S3 bucket for static website hosting.

Once that was all fully configured, my static website was up and running with Cloudflare as its proxy.

![My AWS static site](/assets/2023-08-08/Screenshot-2023-08-08.png)

I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>