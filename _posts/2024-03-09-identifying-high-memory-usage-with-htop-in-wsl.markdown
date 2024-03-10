---
layout: post
title: Identifying High Memory Usage with Htop in WSL
---

# **Identifying High Memory Usage with Htop in WSL**

If you're running a Linux environment within Windows using WSL, monitoring system resources becomes essential. **Htop**, a powerful command-line utility, allows you to visualize resource usage, including memory, CPU, and more.

## **Step 1: Install Htop**

First, ensure that **Htop** is installed. Open your Windows terminal and run:

```bash
sudo apt-get update
sudo apt-get install htop
```

## **Step 2: Launch Htop**

Simply type `htop` in your terminal and hit Enter. You'll see a real-time overview of system processes.

## **Step 3: Sort by Memory Usage**

By default, Htop sorts processes by CPU usage. To focus on memory, press `F6` (or `Ctrl + F6`). Select `MEM%` to sort by memory consumption.

## **Step 4: Identify the Culprit**

Scroll through the list. If you notice an application consuming excessive memory, it's likely the culprit. In my case, it's **'Ollama serve'**.

## **Step 5: Investigate Further**

Select the process (use arrow keys) and press `F1` for help. You'll find detailed information about the selected process, including its PID, memory usage, and more.

## **Step 6: Take Action**

Depending on your needs, you can:
- **Terminate** the process by pressing `F9`.
- **Investigate** further using other tools or logs.
- **Optimize** the application to reduce memory usage.

Remember, Htop provides real-time insights, so keep an eye on it periodically to maintain a healthy system.

---

In summary, Htop is your go-to tool for identifying memory-hungry processes in your WSL environment. Keep your system lean and efficient by monitoring resource usage effectively! 🚀🔍

I hope you enjoyed reading this blog post and learned something new from it. If you did, please consider supporting me and my work by buying me a coffee via [buymeacoffee.com](https://www.buymeacoffee.com/davisdredotcom). It's a simple and easy way to show your appreciation and help me keep creating more content like this. Thank you for your time and attention. Have a great day!

<a href="https://www.buymeacoffee.com/davisdredotcom" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important; margin:auto; display:block;" ></a>