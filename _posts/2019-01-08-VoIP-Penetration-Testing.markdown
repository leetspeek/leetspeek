---
layout: article
title:  "VoIP Penetration Testing"
date:   2019-01-08 11:19:50 +0100
categories: leetspeek@
authors: [rayenmessaoudi]
---

Hello, in this multi-section article, we will be going through the methodology, techniques and tools used to conduct a VoIP penetration test.

# Section 1 : Basics

First of all, Let’s take a look at some definitions:
-   **VoIP** (Voice over Internet Protocol) is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular (or analog) phone line.
    

  

-   **SIP** (Session Initiation Protocol) is a signaling protocol used for initiating, maintaining, modifying and terminating real-time sessions that involve video, voice, messaging and other communications applications and services between two or more endpoints on IP networks.
    

  

-   **PBX** (Private Branch Exchange) is a private branch exchange (telephone switching system within an enterprise) that switches calls between VoIP (voice over Internet Protocol or IP) users on local lines while allowing all users to share a certain number of external phone lines.
    

  
- **Asterisk** is a software implementation of a telephone private branch exchange (PBX) it turns an ordinary computer into a communications server. Asterisk powers IP PBX systems, VoIP gateways, conference servers and other custom solutions.

Above are the main VoIP terms you need to know, but if you want to dig deeper on the technology and the real-life architectures, just google the terms.

We will start by lab-setup; In order to set up the environment, we will use a popular asterisk based distribution called **tribox**. 

Now, Let’s consider a simple scenario : we are inside an organization connected to its network, the DHCP is enabled and our machine is provided with the following IP Address 192.168.43.116 and subnet netmask 255.255.255.0 (No **Network Access Control** is enabled :D) so we have interest to scan the ip address range 192.168.43.0/24 to figure out the attack surface area first.

Like any penetration testing process, all we need to do is to follow the general guidelines, starting with information gathering that is the initial stage of any information security audit. Let's start by identifying the SIP Server against ranges of ip address space then ports scanning as usual, both TCP and UDP.

We will use the sip scanner **svmap** that is part of SIPVicious toolkit used to audit SIP based VoIP systems and of course we can use nmap for ip range scanning.

![Svmap result](/assets/img/rayenmessaoudi/VoIP%20Penetration%20Testing/1.png)


The svmap shows that the ip address 192.168.43.173 is a VoIP server so let’s try to gather more information and enumerate some valid extensions.

Before enumerate valid SIP extensions let’s create two extensions for test using the web interface of tribox.

-   ***LeetSpeeker1 <101> , secret : iloveyou***    
-   ***LeetSpeeker2 <102> , secret : 123456***

![Create extensions](/assets/img/rayenmessaoudi/VoIP%20Penetration%20Testing/2.png)

Now let’s run **svwar** against our SIP device that is also part of SIPVicious toolkit to help us identifying working extension lines.

![Search extensions](/assets/img/rayenmessaoudi/VoIP%20Penetration%20Testing/3.png)

As you can see we have two valid extensions are returned that require authentication.

The invite method is one of the SIP Requests asks a server to establish a session, the INVITE request brings back valid responses. 

The -D option used to scan for default / typical extensions , it’s generally best to use a custom range in our case 100-500.

Now that we have located valid extensions we need to crack their associated passwords. In order to perform this action we can use **svcrack** (a password cracker for SIP accounts) with password list (rockyou for instance).

![Password crack](/assets/img/rayenmessaoudi/VoIP%20Penetration%20Testing/4.png)

Ok, Cool! we found two passwords but one cracked extension is enough to proceed for the next part ;)

  

The next section of VoIP Penetration Testing will be about performing port scanning and running services, gather more information about the VoIP server (model, vendor, test for default credentials), perform advanced attacks against an old VulnVoIP image.

**Resources :**

[https://www.researchgate.net/publication/220449868_VoIP_Security_-_Attacks_and_Solutions](https://www.researchgate.net/publication/220449868_VoIP_Security_-_Attacks_and_Solutions)

[https://searchunifiedcommunications.techtarget.com/definition/Session-Initiation-Protocol](https://searchunifiedcommunications.techtarget.com/definition/Session-Initiation-Protocol)

[https://searchunifiedcommunications.techtarget.com/definition/IP-PBX](https://searchunifiedcommunications.techtarget.com/definition/IP-PBX)

[https://www.asterisk.org/get-started](https://www.asterisk.org/get-started)
