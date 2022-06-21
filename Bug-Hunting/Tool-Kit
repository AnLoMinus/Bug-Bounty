#!usr/bin/env/python3

'''
src: https://github.com/krishpranav/BugHuntingToolKit/blob/master/bugtoolkit.py
A simple python tool for installing hacking tools used by bug hunters
tool name: BugHuntingToolKit
tool author: krishpranav
language used: python
'''

 
#imports
import os
import time
import httplib
import subprocess
import re
import urllib2
import socket
import urllib
import sys
import json
import telnetlib
import glob
import random
import Queue
import threading
import base64
from getpass import getpass
from commands import *
from sys import argv
from platform import system
from urlparse import urlparse
from xml.dom import minidom
from optparse import OptionParser
from time import sleep


yes = set(['y', 'yes', 'Yes', 'Y'])
no = set(['n', 'no', 'No', 'N'])

def menu():
    clearScr()
    print("""

                   \033[1;31m\033        Bug Bounty Tool Kit

   \033[39m\033[96m[1] - Information Gathering     
   \033[39m\033[96m[2] - Mapping                   
   \033[39m\033[96m[3] - Discovery                 
   \033[39m\033[96m[4] - Exploitation
   \033[39m\033[96m[5] - P0Cs & Reporting 
   \033[39m\033[96m[whoami] - Your IP and Location 
   \033[39m\033[96m[exit] - Exit The BugBountyToolkit               
 """)
    choice = raw_input(" \033[1;31m\033  ~# ")
    os.system('clear')

    if choice == "1":
        info()
    elif choice == "2":
        mapping()
    elif choice == "3":
        discovery()
    elif choice == "4":
        exploit()
    elif choice == "5":
        reporting()
    elif choice == "whoami":
        myinfo()
    elif choice == "exit":
        clearScr(), sys.exit()
    elif choice == "":
        clearScr(), menu()
    else:
        clearScr(), menu()


def info():
    clearScr()
    print("""

    \033[1;31m\033----------------------------------------------------------------

     \033[39m\033[96m[1] - Basic Commands    \033[39m\033[96m[11] - InfoG
     \033[39m\033[96m[2] - Masscan           \033[39m\033[96m[12] - The Harvester
     \033[39m\033[96m[3] - DNS Recon         \033[39m\033[96m[13] - Recon-NG
     \033[39m\033[96m[4] - Sublist3r         \033[39m\033[96m[14] - SetoolKit
     \033[39m\033[96m[5] - Alt-DNS           \033[39m\033[96m[15] - WhatWeb
     \033[39m\033[96m[6] - Amass             \033[39m\033[96m[16] - Maltego
     \033[39m\033[96m[7] - Subfinder         \033[39m\033[96m[17] - Goohak
     \033[39m\033[96m[8] - Enumall           \033[39m\033[96m[18] - GoogD0rker
     \033[39m\033[96m[9] - Aquatone          
    [10] - Cloudflare_Enum    [0] - Useful Links   
    """)
    print("   [99] - Return to Main Menu \n")
    choice1 = raw_input("  \033[1;31m\033  ~# ")
    if choice1 == "1":
        clearScr()
        basiccmd()
    if choice1 == "2":
        clearScr()
        masscan()
    if choice1 == "3":
        clearScr()
        dnsrecon()
    if choice1 == "4":
        clearScr()
        sublister()
    if choice1 == "5":
        clearScr()
        altdns()
    if choice1 == "6":
        clearScr()
        amass()
    if choice1 == "7":
        clearScr()
        subfinder()
    if choice1 == "8":
        clearScr()
        enumall()
    if choice1 == "9":
        clearScr()
        aquatone()
    if choice1 == "10":
        clearScr()
        cloudenum()
    if choice1 == "11":
        clearScr()
        infog()
    if choice1 == "12":
        clearScr()
        harvester()
    if choice1 == "13":
        clearScr()
        reconng()
    if choice1 == "14":
        clearScr()
        setoolkit()
    if choice1 == "15":
        clearScr()
        whatweb()
    if choice1 == "16":
        clearScr()
        maltego()
    if choice1 == "17":
        clearScr()
        goohak()
    if choice1 == "18":
        clearScr()
        googdorker()
    if choice1 == "0":
        clearScr()
        usefullinks()
    elif choice1 == "99":
        clearScr()
        menu()
    elif choice1 == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def mapping():
    clearScr()

    print("""

    \033[1;31m\033----------------------------------------------------------------

    \033[39m\033[96m[1] - Nmap
    \033[39m\033[96m[2] - Firefox
    \033[39m\033[96m[3] - Firefox Extensions
    \033[39m\033[96m[4] - Burp Suite Pro
    \033[39m\033[96m[5] - Burp Suite Extensions
    \033[39m\033[96m[6] - Intruder Payloads
    \033[39m\033[96m[7] - Payloads All The Thing
    \033[39m\033[96m[8] - Git-all-Secrets
    """)
    print("   [99] - Return to Main Menu \n")
    choice2 = raw_input("  \033[1;31m\033  ~# ")
    if choice2 == "1":
        clearScr()
        nmap()
    elif choice2 == "2":
        clearScr()
        firefox()
    elif choice2 == "3":
        clearScr()
        firefoxext()
    elif choice2 == "4":
        clearScr()
        burpsuitepro()
    elif choice2 == "5":
        clearScr()
        burpext()
    elif choice2 == "6":
        clearScr()
        intruderpayload()
    elif choice2 == "7":
        clearScr()
        allpayload()
    elif choice2 == "8":
        clearScr()
        gitallsec()
    elif choice2 == "99":
        clearScr()
        menu()
    elif choice2 == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def discovery():
    clearScr()

    print("""

    \033[1;31m\033----------------------------------------------------------------

     \033[39m\033[96m[1] - Acunetix-WVS           \033[39m\033[96m[11] - W3af
     \033[39m\033[96m[2] - Arachni                \033[39m\033[96m[12] - Zed Attack Proxy
     \033[39m\033[96m[3] - Burp Suite             \033[39m\033[96m[13] - WP-Scan
     \033[39m\033[96m[4] - Nexpose                \033[39m\033[96m[14] - FuzzDB
     \033[39m\033[96m[5] - Nikto                  \033[39m\033[96m[15] - CeWL
     \033[39m\033[96m[6] - Vega                   \033[39m\033[96m[16] - DirBuster
     \033[39m\033[96m[7] - Wapiti                 \033[39m\033[96m[17] - Dirb
     \033[39m\033[96m[8] - Web Security Scanner   \033[39m\033[96m[18] - Filebuster
     \033[39m\033[96m[9] - Websecurify Suite      \033[39m\033[96m[19] - Gobuster
    \033[39m\033[96m[10] - Joomscan               \033[39m\033[96m[20] - DirSearch
    """)
    print("   [99] - Return to Main Menu \n")
    choice3 = raw_input("  \033[1;31m\033  ~# ")
    os.system('clear')
    if choice3 == "1":
        acunetix()
    if choice3 == "2":
        arachni()
    if choice3 == "3":
        burpsuite()
    if choice3 == "4":
        nexpose()
    if choice3 == "5":
        nikto()
    if choice3 == "6":
        vega()
    if choice3 == "7":
        wapiti()
    if choice3 == "8":
        websecscan()
    if choice3 == "9":
        websecsuite()
    if choice3 == "10":
        joomscan()
    if choice3 == "11":
        waaaf()
    if choice3 == "12":
        zed()
    if choice3 == "13":
        wpscan()
    if choice3 == "14":
        fuzzdb()
    if choice3 == "15":
        cewl()
    if choice3 == "16":
        dirbuster()
    if choice3 == "17":
        dirb()
    if choice3 == "18":
        filebuster()
    if choice3 == "19":
        gobuster()
    if choice3 == "20":
        dirsearch()
    elif choice3 == "99":
        menu()
    elif choice3 == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def exploit():
    clearScr()

    print("""
    \033[39m\033[96m
    \033[1;31m\033-------------------------------------------------------------------------------------------

    XSS :                   SSTI :                  [22] - Race The Web     [38] - ChangeMe
    [1] - XSS Radar         [12] - Tplmap           [23] - CORStest         [39] - wappalyzer
    [2] - XSSHunter                                 [24] - RCE Struts-pwn   [40] - builtwith
    [3] - xssHunterClient   SSRF :                  [25] - ysoSerial        [41] - wafw00f
    [4] - DOMxssScanner     [13] - SSRF-Detector    [26] - PHPGGC           [42] - assetnote
    [5] - XSSer             [14] - Ground Control   [27] - Retire-js        [43] - jsbeautifier
    [6] - BruteXSS                                  [28] - Getsploit        [44] - LinkFinder
    [7] - XSStrike          LFI :                   [29] - Findsploit      
    [8] - XSS'OR            [15] - LFISuit          [30] - BFAC             Mobile : 
                                                    [31] - WP-Scan          [45] - MobSF
    SQLi :                  [16] - Gen-xbin-Avi     [32] - CMSmap           [46] - GenyMotion
    [9] - SQLmap            [17] - GitTools         [33] - Joomscan         [47] - Apktool
                            [18] - DVCS Ripper      [34] - JSON W T T       [48] - dex2jar
    XXE :                   [19] - TKO Subs         [35] - Wfuzz            [49] - jd-gui
    [10] - OXML-xxe         [20] - SubBruteforcer   [36] - Patator          [50] - idb
    [11] - XXEinjextor      [21] - Second-Order     [37] - Hydra     
    \033[39m\033[96m     
    """)
    print("   [99] - Return to Main Menu \n")
    choice4 = raw_input("  \033[1;31m\033  ~# ")
    if choice4 == "1":
        clearScr()
        xssradar()
    if choice4 == "2":
        clearScr()
        xsshunter()
    if choice4 == "3":
        clearScr()
        xsshunterclient()
    if choice4 == "4":
        clearScr()
        domxss()
    if choice4 == "5":
        clearScr()
        xsser()
    if choice4 == "6":
        clearScr()
        brutexss()
    if choice4 == "7":
        clearScr()
        xsstrike()
    if choice4 == "8":
        clearScr()
        xssor()
    if choice4 == "9":
        clearScr()
        sqlmap()
    if choice4 == "10":
        clearScr()
        oxmlxxe()
    if choice4 == "11":
        clearScr()
        xeeinj()
    if choice4 == "12":
        clearScr()
        tplmap()
    if choice4 == "13":
        clearScr()
        ssrfdetector()
    if choice4 == "14":
        clearScr()
        groundcontrol()
    if choice4 == "15":
        clearScr()
        lfisuit()
    if choice4 == "16":
        clearScr()
        genxbinavi()
    if choice4 == "17":
        clearScr()
        gittools()
    if choice4 == "18":
        clearScr()
        dvcsripper()
    if choice4 == "19":
        clearScr()
        tkosubs()
    if choice4 == "20":
        clearScr()
        subbruteforcer()
    if choice4 == "21":
        clearScr()
        secondorder()
    if choice4 == "22":
        clearScr()
        racetheweb()
    if choice4 == "23":
        clearScr()
        corstest()
    if choice4 == "24":
        clearScr()
        rcestrutspwn()
    if choice4 == "25":
        clearScr()
        ysoserial()
    if choice4 == "26":
        clearScr()
        phpggc()
    if choice4 == "27":
        clearScr()
        retirejs()
    if choice4 == "28":
        clearScr()
        getsploit()
    if choice4 == "29":
        clearScr()
        findsploit()
    if choice4 == "30":
        clearScr()
        bfac()
    if choice4 == "31":
        clearScr()
        wpscann()
    if choice4 == "32":
        clearScr()
        cmsmap()
    if choice4 == "33":
        clearScr()
        joomscan()
    if choice4 == "34":
        clearScr()
        jsonwtt()
    if choice4 == "35":
        clearScr()
        wfuzz()
    if choice4 == "36":
        clearScr()
        patator()
    if choice4 == "37":
        clearScr()
        hydra()
    if choice4 == "38":
        clearScr()
        changeme()
    if choice4 == "39":
        clearScr()
        wappalyzer()
    if choice4 == "40":
        clearScr()
        builtwith()
    if choice4 == "41":
        clearScr()
        wafwoof()
    if choice4 == "42":
        clearScr()
        assetnote()
    if choice4 == "43":
        clearScr()
        jsbeautifier()
    if choice4 == "44":
        clearScr()
        linkfinder()
    if choice4 == "45":
        clearScr()
        mobsf()
    if choice4 == "46":
        clearScr()
        genymotion()
    if choice4 == "47":
        clearScr()
        apktool()
    if choice4 == "48":
        clearScr()
        dex2jar()
    if choice4 == "49":
        clearScr()
        jdgui()
    if choice4 == "50":
        clearScr()
        idb()
    if choice4 == "99":
        clearScr()
        menu()
    elif choice4 == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def reporting():
    clearScr()

    print("""

    \033[1;31m\033----------------------------------------------------------------

    \033[39m   \033[96m[1] - Bug Bounty Platforms
    \033[39m   \033[96m[2] - POCs (Proof of Concepts)
    \033[39m   \033[96m[3] - CheatSheet
    \033[39m   \033[96m[4] - EyeWitness
    \033[39m   \033[96m[5] - HttpScreenshot
    \033[39m   \033[96m[6] - BugBountyTemplates
    \033[39m   \033[96m[7] - Template Generator
    """)
    print("\033[39m  \033[96m   [99] - Return to Main Menu \n")
    choice5 = raw_input("  \033[1;31m\033  ~# ")
    if choice5 == "tips":
        clearScr()
        bugtips()
    if choice5 == "1":
        clearScr()
        platforms()
    if choice5 == "2":
        clearScr()
        pocs()
    if choice5 == "3":
        clearScr()
        cheatsheet()
    if choice5 == "4":
        clearScr()
        eyewitness()
    if choice5 == "5":
        clearScr()
        httpscreenshot()
    if choice5 == "6":
        clearScr()
        bbtemplates()
    if choice5 == "7":
        clearScr()
        gentemplates()
    elif choice5 == "99":
        menu()
    elif choice5 == "":
        reporting()
    else:
        reporting()


def myinfo():
    os.system('clear')

    os.system("curl ipinfo.io")
    choicemyinfo = raw_input("\n Press Enter and Go Back To Main Menu : ")
    if choicemyinfo == "":
        clearScr()
        menu()
    else:
        clearScr()
        menu()


def hacktronian():
    os.system('clear')
    print("""
    A Collection of Hacking Tools for Unix.

    Read More : https://github.com/thehackingsage/hacktronian
    """)
    choicehacktronian = raw_input(" Do You Want To Download Hacktronian? (Y/N) : ")
    if choicehacktronian in yes:
        os.system(" git clone https://github.com/thehackingsage/hacktronian.git")
    elif choicehacktronian in no:
        clearScr()

    elif choicehacktronian == "":
        clearScr()

    else:
        clearScr()


def hackdroid():
    os.system('clear')
    print("""
    HackDroid is a collection of 250+ Penetration Testing and Ethical Hacking 
    Apps for Android... in this, The Applications is divided into different 
    categories so You can Download any App from any Category and Use it..

    Read More : https://github.com/thehackingsage/HackDroid
    """)
    choicehackdroid = raw_input(" Do You Want To Download Hackdroid? (Y/N) : ")
    if choicehackdroid in yes:
        os.system("firefox https://github.com/thehackingsage/HackDroid")
    elif choicehackdroid in no:
        clearScr()

    elif choicehackdroid == "":
        clearScr()

    else:
        clearScr()


def hacknix():
    os.system('clear')
    print("""
    Hacknix is a script that installs all Kali Linux tools in your Debian-based 
    operating system. All you need is Python 2.7 and the Git package installed 
    in your system. Using this script, you can add and remove Kali Linux repositories..

    Read More : https://github.com/thehackingsage/hacknix
    """)
    choicehacknix = raw_input(" Do You Want To Download Hacknix? (Y/N) : ")
    if choicehacknix in yes:
        os.system(" git clone https://github.com/thehackingsage/hacknix.git")
    elif choicehacknix in no:
        clearScr()

    elif choicehacknix == "":
        clearScr()

    else:
        clearScr()


def fluxion():
    os.system('clear')
    print(""" 
    Fluxion is a wifi key cracker using evil twin attack..
    you need a wireless adoptor for this tool.

    Read More : https://github.com/thehackingsage/Fluxion
    """)
    choicefluxion = raw_input(" Do You Want To Download Fluxion? (Y/N) : ")
    if choicefluxion in yes:
        os.system(" git clone https://github.com/thehackingsage/Fluxion.git")
    elif choicefluxion in no:
        clearScr()

    elif choicefluxion == "":
        clearScr()


    else:
        clearScr()


def duckydino():
    os.system('clear')
    print("""
    Ducky Script for Arduino Leonardo Mini & Arduino Uno + Payload to Arduino Converter

    Read More : https://github.com/thehackingsage/ducky4arduino
    """)
    choiceduckydino = raw_input(" Do You Want To Use DuckyDino? (Y/N) : ")
    if choiceduckydino in yes:
        os.system("firefox https://github.com/thehackingsage/ducky4arduino")
    elif choiceduckydino in no:
        clearScr()

    elif choiceduckydino == "":
        clearScr()

    else:
        clearScr()


def ddos():
    os.system('clear')
    print("""
    DDOS TOOL TO CRASH A WEBSITE

    !!! For Educational Purposes Only !!!

    Read More :https://github.com/krishpranav/crash_website
    """)
    choiceddos = raw_input(" Do You Want To Download DoS & DDoS Tools? (Y/N) : ")
    if choiceddos in yes:
        os.system(" git clone https://github.com/krishpranav/crash_website")
    elif choiceddos in no:
        clearScr()

    elif choiceddos == "":
        clearScr()

    else:
        clearScr()


def kaliwsl():
    os.system('clear')
    print("""
    Tool for Kali Linux Windows App :    
    Update, Upgrade, XFCE4 - GUI Mode & Hacking Tools..

    After Enabling WSL and Installing Kali Linux App 
    from the Microsoft Store in Windows 10, Run This Script. 

    Read More : https://github.com/thehackingsage/Kali-WSL.git
    """)
    choicekaliwsl = raw_input(" Do You Want To Download Kali-WSL? (Y/N) : ")
    if choicekaliwsl in yes:
        os.system(" git clone https://github.com/thehackingsage/Kali-WSL.git")
    elif choicekaliwsl in no:
        clearScr()

    elif choicekaliwsl == "":
        clearScr()

    else:
        clearScr()


def hackpi():
    os.system('clear')
    print("""
    Plug and Play Portable Hacking Machine with RPi3

    Update, Upgrade, AutoLogin, AutoVNC & Hacking Tools

    Read More : https://github.com/thehackingsage/HackPi
    """)
    choicehackpi = raw_input(" Do You Want To Download HackPi? (Y/N) : ")
    if choicehackpi in yes:
        os.system(" git clone https://github.com/thehackingsage/HackPi.git")
    elif choicehackpi in no:
        clearScr()

    elif choicehackpi == "":
        clearScr()

    else:
        clearScr()


def torfi():
    os.system('clear')
    print("""
    Anonymous WiFi Hotspot Using Raspberry Pi 3

    Read More : https://github.com/thehackingsage/TorFi
    """)
    choicehackpi = raw_input(" Do You Want To Download TorFi? (Y/N) : ")
    if choicehackpi in yes:
        os.system("git clone https://github.com/thehackingsage/torFi.git")
    elif choicehackpi in no:
        clearScr()

    elif choicehackpi == "":
        clearScr()

    else:
        clearScr()


def basiccmd():
    os.system('clear')
    print("""
    use the following steps to validate ownership of a target :
    Ping the target domains/hosts :
    ping google.com 
    ping 8.8.8.8

    Whois the target domains/hosts/ip :
    whois example.com
    whois 104.27.178.12

    Resolve the IP addresses for the target domains/hosts :
    dig +short example.com

    Results could be mixed depending on whether or not the target 
    is using whois privacy protection.
    """)
    choicebasiccmd = raw_input(" Press Enter and Go Back To Information Gathering Menu : ")
    if choicebasiccmd == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def masscan():
    os.system('clear')
    print("""
    Mass IP port scanner. ... It can scan the entire Internet in under 6 minutes, 
    transmitting 10 million packets per second.
    """)
    choicemasscan = raw_input(" Do You Want To Download MASSCAN? (Y/N) : ")
    if choicemasscan in yes:
        os.system(" git clone https://github.com/robertdavidgraham/masscan.git")
    elif choicemasscan in no:
        clearScr()
        info()
    elif choicemasscan == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def dnsrecon():
    os.system('clear')
    print("""
    DNSRecon is a Python port of a Ruby script that I wrote to learn the language 
    and about DNS in early 2007. This time I wanted to learn about Python and extend 
    the functionality of the original tool and in the process re-learn how DNS works 
    and how could it be used in the process of a security assessment and network troubleshooting.
    """)
    choicednsrecon = raw_input(" Do You Want To Download DNS-Recon? (Y/N) : ")
    if choicednsrecon in yes:
        os.system(" git clone https://github.com/darkoperator/dnsrecon.git")
    elif choicednsrecon in no:
        clearScr()
        info()
    elif choicednsrecon == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def sublister():
    os.system('clear')
    print("""
    Sublist3r is a python tool designed to enumerate subdomains of websites using OSINT.
    It helps penetration testers and bug hunters collect and gather subdomains for the 
    domain they are targeting.
    """)
    choicesublister = raw_input(" Do You Want To Download SubList3r? (Y/N) : ")
    if choicesublister in yes:
        os.system(" git clone https://github.com/aboul3la/Sublist3r.git")
    elif choicesublister in no:
        clearScr()
        info()
    elif choicesublister == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def altdns():
    os.system('clear')
    print("""
    Altdns is a DNS recon tool that allows for the discovery of subdomains that conform to patterns.
    Altdns takes in words that could be present in subdomains under a domain (such as test, dev, 
    staging) as well as takes in a list of subdomains that you know of..
    From these two lists that are provided as input to altdns, the tool then generates a massive 
    output of "altered" or "mutated" potential subdomains that could be present. It saves this output 
    so that it can then be used by your favourite DNS bruteforcing tool.

    """)
    choicealtdns = raw_input(" Do You Want To Download Altdns? (Y/N) : ")
    if choicealtdns in yes:
        os.system(" git clone https://github.com/infosec-au/altdns.git")
    elif choicealtdns in no:
        clearScr()
        info()
    elif choicealtdns == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def amass():
    os.system('clear')
    print("""
    Amass is a tool for In-Depth DNS Enumeration and Network Mapping..
    """)
    choiceamass = raw_input(" Do You Want To Download Amass? (Y/N) : ")
    if choiceamass in yes:
        os.system(" git clone https://github.com/caffix/amass.git")
    elif choiceamass in no:
        clearScr()
        info()
    elif choiceamass == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def subfinder():
    os.system('clear')
    print("""
    SubFinder is a subdomain discovery tool that discovers valid subdomains for websites. 
    Designed as a passive framework to be useful for bug bounties and safe for penetration testing.
    """)
    choicesubfinder = raw_input(" Do You Want To Download Subfinder? (Y/N) : ")
    if choicesubfinder in yes:
        os.system(" git clone https://github.com/subfinder/subfinder.git")
    elif choicesubfinder in no:
        clearScr()
        info()
    elif choicesubfinder == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def enumall():
    os.system('clear')
    print("""
    Recon-ng and Alt-DNS are awesome. This script combines the power of these 
    tools with the ability to run multiple domains within the same session.
    """)
    choiceenumall = raw_input(" Do You Want To Download Enumall? (Y/N) : ")
    if choiceenumall in yes:
        os.system(" git clone https://github.com/jhaddix/domain.git && mv domain enumall")
    elif choiceenumall in no:
        clearScr()
        info()
    elif choiceenumall == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def aquatone():
    os.system('clear')
    print("""
    Aquatone is a tool for visual inspection of websites across a large amount of hosts 
    and is convenient for quickly gaining an overview of HTTP-based attack surface.
    """)
    choiceaquatone = raw_input(" Do You Want To Download Aquatone? (Y/N) : ")
    if choiceaquatone in yes:
        os.system(" git clone https://github.com/michenriksen/aquatone.git")
    elif choiceaquatone in no:
        clearScr()
        info()
    elif choiceaquatone == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def cloudenum():
    os.system('clear')
    print("""
    A simple tool to allow easy querying of Cloudflare's DNS data written in Python.
    """)
    choicecloudenum = raw_input(" Do You Want To Download Cloudflare Enumeration Tool? (Y/N) : ")
    if choicecloudenum in yes:
        os.system(" git clone https://github.com/mandatoryprogrammer/cloudflare_enum.git")
    elif choicecloudenum in no:
        clearScr()
        info()
    elif choicecloudenum == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def infog():
    os.system('clear')
    print("""
    A Information Gethering Tool by LinuxChoice.
    """)
    choiceinfog = raw_input(" Do You Want To Download InfoG? (Y/N) : ")
    if choiceinfog in yes:
        os.system(" git clone https://github.com/thelinuxchoice/infog.git")
    elif choiceinfog in no:
        clearScr()
        info()
    elif choiceinfog == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def harvester():
    os.system('clear')
    print("""
    theHarvester is a tool for gathering subdomain names, e-mail addresses, 
    virtual hosts, open ports/ banners, and employee names from different 
    public sources (search engines, pgp key servers).
    """)
    choiceharvester = raw_input(" Do You Want To Download The Harvester? (Y/N) : ")
    if choiceharvester in yes:
        os.system(" git clone https://github.com/laramies/theHarvester.git")
    elif choiceharvester in no:
        clearScr()
        info()
    elif choiceharvester == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def reconng():
    os.system('clear')
    print("""
    One of The Best Reconnaissance Tool.. (and my personal favourite) 
    """)
    choicereconng = raw_input(" Do You Want To Download Recon-ng? (Y/N) : ")
    if choicereconng in yes:
        os.system(" git clone https://LaNMaSteR53@bitbucket.org/LaNMaSteR53/recon-ng.git")
    elif choicereconng in no:
        clearScr()
        info()
    elif choicereconng == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def setoolkit():
    os.system('clear')
    print("""
    The Social-Engineer Toolkit is an open-source penetration testing framework
    designed for social engineering. SET has a number of custom attack vectors that
    allow you to make a believable attack quickly.
    """)
    choicesetoolkit = raw_input(" Do You Want To Download Setoolkit (Y/N) : ")
    if choicesetoolkit in yes:
        os.system(" git clone https://github.com/trustedsec/social-engineer-toolkit.git")
    elif choicesetoolkit in no:
        clearScr()
        info()
    elif choicesetoolkit == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def whatweb():
    os.system('clear')
    print("""
    WhatWeb identifies websites. Its goal is to answer the question, "What is that Website?". 
    WhatWeb recognises web technologies including content management systems (CMS), blogging 
    platforms, statistic/analytics packages, JavaScript libraries, web servers, and embedded 
    devices. WhatWeb has over 1700 plugins, each to recognise something different. WhatWeb 
    also identifies version numbers, email addresses, account IDs, web framework modules, 
    SQL errors, and more.
    """)
    choicewhatweb = raw_input(" Do You Want To Download WhatWeb? (Y/N) : ")
    if choicewhatweb in yes:
        os.system(" git clone https://github.com/urbanadventurer/WhatWeb.git")
    elif choicewhatweb in no:
        clearScr()
        info()
    elif choicewhatweb == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def maltego():
    os.system('clear')
    print("""
    Maltego is proprietary software used for open-source intelligence and forensics, 
    developed by Paterva. Maltego focuses on providing a library of transforms for 
    discovery of data from open sources, and visualizing that information in a graph 
    format, suitable for link analysis and data mining. 
    """)
    choicemaltego = raw_input(" Do You Want To Download Maltego? (Y/N) : ")
    if choicemaltego in yes:
        os.system("firefox https://www.paterva.com/web7/downloads.php")
    elif choicemaltego in no:
        clearScr()
        info()
    elif choicemaltego == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def goohak():
    os.system("clear")
    print("""
    Automatically launch google hacking queries against a target domain to find 
    vulnerabilities and enumerate a target.
    """)
    choicegoohak = raw_input(" Do You Want To Download Goohak? (Y/N) : ")
    if choicegoohak in yes:
        os.system(" git clone https://github.com/1N3/Goohak.git")
    elif choicegoohak in no:
        clearScr()
        info()
    elif choicegoohak == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def googdorker():
    os.system("clear")
    print("""
    GoogD0rker is a tool for firing off google dorks against a target domain, 
    it is purely for OSINT against a specific target domain. It is split into 
    two versions, a bash script designed for OSX and a python script designed 
    to be cross platform.
    """)
    choicegoogdorker = raw_input(" Do You Want To Download Googdorker? (Y/N) : ")
    if choicegoogdorker in yes:
        os.system(" git clone https://github.com/ZephrFish/GoogD0rker.git")
    elif choicegoogdorker in no:
        clearScr()
        info()
    elif choicegoogdorker == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def usefullinks():
    os.system("clear")
    print("""
    Some Useful Links for Reconnaissance & Enumeration..

    Wayback Machine         : https://web.archive.org/
    Wayback Robots          : https://gist.github.com/mhmdiaa/2742c5e147d49a804b408bfed3d32d07
    Wayback URLs            : https://gist.github.com/mhmdiaa/adf6bff70142e5091792841d4b372050
    Shodan                  : https://shodan.io/
    Internet Wide Scan Data : http://Repositoryscans.io/
    Censys                  : https://censys.io/
    Hurricane Electric      : http://bgp.he.net/
    Netcraft                : https://www.netcraft.com/
    DomainCrawler           : http://www.domaincrawler.com/
    W3DT                    : https://w3dt.net/
    Netinfo                 : http://www.netinfo.org.ua
    DomainSearch            : http://domainsearch.com/
    DomainTools             : http://whois.domaintools.com/
    InterNIC                : http://www.internic.net/whois.html
    Who.IS                  : http://www.who.is/
    Whois.net               : http://www.whois.net/
    Visual Traceroute       : http://en.dnstools.ch/port-scan.html
    CentralOps.net          : http://centralops.net/co/
    DNS Stuff               : http://www.dnsstuff.com/
    IP-Address              : http://www.ip-adress.com/
    IPinfo Security Portal  : http://ipinfo.info/index.php
    Internet Domain Survey  : http://www.isc.org/index.pl?/ops/ds/
    NerdLabs                : http://www.nerdlabs.org/tools/
    NetQuery                : http://www.ipaddress123.com/nquser.php
    Network Tools           : http://home.planet.nl/~houwe135/wbnt1/
    Network Tools 2         : http://www.network-tools.com/
    RobTex SwissArmyKnife   : https://www.robtex.com/
    WebTic DNS scan         : http://tools.webtic.nl/dnsscan
    Geo IP Tool             : http://geoiptool.com/
    Geographic Location     : http://tejji.com/ip/
    Reverse IP domain check : http://www.yougetsignal.com/tools/web-s ... eb-server/
    Internet Traffic Report : http://www.internettrafficreport.com/europe.htm
    """)
    choiceusefullinks = raw_input(" Press Enter and Go Back To Information Gathering Menu : ")
    if choiceusefullinks == "":
        clearScr()
        info()
    else:
        clearScr()
        info()


def nmap():
    os.system('clear')
    print("""
    Nmap is a free and open-source security scanner, originally written by Gordon Lyon, 
    used to discover hosts and services on a computer network, thus building a "map" of 
    the network. To accomplish its goal, Nmap sends specially crafted packets to the 
    target host and then analyzes the responses. It's a TCP/IP host and port scanning 
    tool with fantastic service and OS fingerprinting capabilities.
    """)
    choicenmap = raw_input(" Do You Want To Download Nmap? (Y/N) : ")
    if choicenmap in yes:
        os.system("git clone https://github.com/nmap/nmap.git")
    elif choicenmap in no:
        clearScr()
        mapping()
    elif choicenmap == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def firefox():
    clearScr()
    print("""
    Mozilla Firefox is a free and open-source web browser. 

    https://www.mozilla.org/en-US/firefox/new/

    """)
    choicefirefox = raw_input(" Do You Want To Download Firefox? (Y/N) : ")
    if choicefirefox in yes:
        os.system("sudo apt-get install firefox")
    elif choicefirefox in no:
        clearScr()
        mapping()
    elif choicefirefox == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def firefoxext():
    clearScr()
    print("""
    A tool that transforms Firefox browsers into a penetration testing suite.

    """)
    choicefirefoxext = raw_input(" Do You Want To Download Firefox Pentesting Extensions? (Y/N) : ")
    if choicefirefoxext in yes:
        os.system(" git clone https://github.com/mazen160/Firefox-Security-Toolkit.git")
    elif choicefirefoxext in no:
        clearScr()
        mapping()
    elif choicefirefoxext == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def burpsuitepro():
    os.system('clear')
    print(""" 
    Burp Suite is a Java based Web Penetration Testing framework.
    It has become an industry standard suite of tools used by information security
    professionals. Burp Suite helps you identify vulnerabilities and verify attack
    vectors that are affecting web applications.

    BurpSuite Pro v1.6.67 : https://github.com/thehackingsage/burpsuite.git\n
    """)
    choiceburp = raw_input(" Do You Want To Download BurpSuite Pro v1.6.67 (Y/N) : ")
    if choiceburp in yes:
        os.system("firefox https://github.com/thehackingsage/burpsuite.git")
    elif choiceburp in no:
        clearScr()
        mapping()
    elif choiceburp == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def burpext():
    os.system('clear')
    print("""
    You Can Use All Extensions From BApp Store in Burp Suite Pro..

    Most Useful Extensions : 

    Backslash Powered Scanner, Reflected Parameters, SAML Encoder/Decoder,
    Bypass WAF, CVSS Calculator, Java deserialization Scanner, Autorize,
    BurpSmartBuster, Content Type Converter, JSON Beautifier, PsychoPATH,
    Retire-js, J2EEScan, SAML Raider, Active Scan ++, UUID Detector, Wsdler, 
    Additional Scanner Checks, CO2 Flow, Hackvertor, Meth0dMan & Paramalyzer.

    Burp Suite Pro v1.6.67 : https://github.com/thehackingsage/burpsuite.git
    """)
    choiceburpext = raw_input("\n Press Enter and Go Back To Main Menu : ")
    if choiceburpext == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def intruderpayload():
    clearScr()
    print("""
    A collection of Burpsuite Intruder payloads, BurpBounty payloads, fuzz lists, 
    malicious file uploads and web pentesting methodologies and checklists. 
    """)
    choiceintruderpayload = raw_input(" Do You Want To Download IntruderPayloads? (Y/N) : ")
    if choiceintruderpayload in yes:
        os.system(" git clone https://github.com/1N3/IntruderPayloads.git")
    elif choiceintruderpayload in no:
        clearScr()
        mapping()
    elif choiceintruderpayload == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def allpayload():
    clearScr()
    print("""
    A list of useful payloads and bypass for Web Application Security and Pentest/CTF
    """)
    choiceallpayload = raw_input(" Do You Want To Download PayloadsAllTheThings? (Y/N) : ")
    if choiceallpayload in yes:
        os.system(" git clone https://github.com/swisskyrepo/PayloadsAllTheThings.git")
    elif choiceallpayload in no:
        clearScr()
        mapping()
    elif choiceallpayload == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def gitallsec():
    clearScr()
    print("""
    A tool to capture all the git secrets by leveraging multiple open source git searching tools
    """)
    choicegitallsec = raw_input(" Do You Want To Download Git-all-Secrets? (Y/N) : ")
    if choicegitallsec in yes:
        os.system(" git clone https://github.com/anshumanbh/git-all-secrets.git")
    elif choicegitallsec in no:
        clearScr()
        mapping()
    elif choicegitallsec == "":
        clearScr()
        mapping()
    else:
        clearScr()
        mapping()


def acunetix():
    clearScr()
    print("""
    Acunetix is the leading web vulnerability scanner used by serious Fortune 500 companies 
    and widely acclaimed to include the most advanced SQL injection and XSS black box scanning 
    technology. It automatically crawls your websites and performs black box AND grey box hacking 
    techniques which finds dangerous vulnerabilities that can compromise your website and data.
    """)
    choiceacunetix = raw_input(" Do You Want To Download Acunetix Web Vulnerability Scanner? (Y/N) : ")
    if choiceacunetix in yes:
        os.system("firefox https://www.acunetix.com/vulnerability-scanner/download/")
    elif choiceacunetix in no:
        clearScr()
        discovery()
    elif choiceacunetix == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def arachni():
    clearScr()
    print("""
    Arachni is a feature-full, modular, high-performance Ruby framework aimed towards helping 
    penetration testers and administrators evaluate the security of modern web applications.
    """)
    choicearachni = raw_input(" Do You Want To Download Arachni Web Vulnerability Scanner? (Y/N) : ")
    if choicearachni in yes:
        os.system("firefox http://www.arachni-scanner.com/download/")
    elif choicearachni in no:
        clearScr()
        discovery()
    elif choicearachni == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def burpsuite():
    clearScr()
    print("""
    Burp or Burp Suite is a graphical tool for testing Web application security. 
    The tool is written in Java and developed by PortSwigger Web Security. 
    """)
    choiceburpsuite = raw_input(" Do You Want To Download Burp Suite Community Edition? (Y/N) : ")
    if choiceburpsuite in yes:
        os.system("firefox https://portswigger.net/burp/communitydownload")
    elif choiceburpsuite in no:
        clearScr()
        discovery()
    elif choiceburpsuite == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def nexpose():
    clearScr()
    print("""
    Rapid7 Nexpose is a vulnerability scanner which aims to support the entire vulnerability 
    management lifecycle, including discovery, detection, verification, risk classification, 
    impact analysis, reporting and mitigation. It integrates with Rapid7's Metasploit for 
    vulnerability exploitation.
    """)
    choicenexpose = raw_input(" Do You Want To Download Nexpose? (Y/N) : ")
    if choicenexpose in yes:
        os.system("firefox https://www.rapid7.com/products/nexpose/download/")
    elif choicenexpose in no:
        clearScr()
        discovery()
    elif choicenexpose == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def nikto():
    clearScr()
    print("""
    Nikto is an Open Source (GPL) web server scanner which performs comprehensive
    tests against web servers for multiple items, including over 6400 potentially 
    dangerous files/CGIs, checks for outdated versions of over 1200 servers, 
    and version specific problems on over 270 servers.
    """)
    choicenikto = raw_input(" Do You Want To Download Nikto? (Y/N) : ")
    if choicenikto in yes:
        os.system(" git clone https://github.com/sullo/nikto.git")
    elif choicenikto in no:
        clearScr()
        discovery()
    elif choicenikto == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def vega():
    clearScr()
    print("""
    Vega is a free and open source web security scanner and web security testing platform 
    to test the security of web applications. Vega can help you find and validate SQL Injection, 
    Cross-Site Scripting (XSS), inadvertently disclosed sensitive information, and other vulnerabilities.
    """)
    choicevega = raw_input(" Do You Want To Download Vega? (Y/N) : ")
    if choicevega in yes:
        os.system("firefox https://subgraph.com/vega/download/")
    elif choicevega in no:
        clearScr()
        discovery()
    elif choicevega == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def wapiti():
    clearScr()
    print("""
    Wapiti is a vulnerability scanner for web applications. It currently search vulnerabilities 
    like XSS, SQL and XPath injections, file inclusions, command execution, XXE injections, 
    CRLF injections, Server Side Request Forgery... It use the Python 3 programming language.
    """)
    choicewapiti = raw_input(" Do You Want To Download Wapiti? (Y/N) : ")
    if choicewapiti in yes:
        os.system(
            " wget https://sourceforge.net/projects/wapiti/files/wapiti/wapiti-3.0.1/wapiti3-3.0.1.zip")
    elif choicewapiti in no:
        clearScr()
        discovery()
    elif choicewapiti == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def websecscan():
    clearScr()
    discovery()


def websecsuite():
    clearScr()
    print("""
    Fully integrated web-based platform to manage vulnerabilities across security teams, 
    investigating security breaches, or test for vulnerabilities.
    """)
    choicewebsecsuite = raw_input(" Do You Want To Use Security Suite? (Y/N) : ")
    if choicewebsecsuite in yes:
        os.system("firefox https://secapps.com/suite")
    elif choicewebsecsuite in no:
        clearScr()
        discovery()
    elif choicewebsecsuite == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def joomscan():
    clearScr()
    print("""
    OWASP Joomla! Vulnerability Scanner (JoomScan) is an open source project, developed with the aim 
    of automating the task of vulnerability detection and reliability assurance in Joomla CMS deployments. 
    Implemented in Perl, this tool enables seamless and effortless scanning of Joomla installations, 
    while leaving a minimal footprint with its lightweight and modular architecture. It not only detects 
    known offensive vulnerabilities, but also is able to detect many misconfigurations and admin-level 
    shortcomings that can be exploited by adversaries to compromise the system. Furthermore, OWASP JoomScan 
    provides a user-friendly interface and compiles the final reports in both text and HTML formats for 
    ease of use and minimization of reporting overheads. 
    """)
    choicejoomscan = raw_input(" Do You Want To Download JoomScan? (Y/N) : ")
    if choicejoomscan in yes:
        os.system(" git clone https://github.com/rezasp/joomscan.git")
    elif choicejoomscan in no:
        clearScr()
        discovery()
    elif choicejoomscan == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def waaaf():
    clearScr()
    print("""
    w3af is an open source web application security scanner which helps developers and penetration testers 
    identify and exploit vulnerabilities in their web applications. The scanner is able to identify 200+ 
    vulnerabilities, including Cross-Site Scripting, SQL injection and OS commanding.
    """)
    choicewaaaf = raw_input(" Do You Want To Download W3AF? (Y/N) : ")
    if choicewaaaf in yes:
        os.system(" git clone https://github.com/andresriancho/w3af.git")
    elif choicewaaaf in no:
        clearScr()
        discovery()
    elif choicewaaaf == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def zed():
    clearScr()
    print("""
    OWASP ZAP is an open-source web application security scanner. It is intended to be used 
    by both those new to application security as well as professional penetration testers. 
    It is one of the most active OWASP projects and has been given Flagship status.
    """)
    choicezed = raw_input(" Do You Want To Download Wapiti? (Y/N) : ")
    if choicezed in yes:
        os.system(
            " wget https://github.com/zaproxy/zaproxy/releases/download/w2018-12-10/ZAP_WEEKLY_D-2018-12-10.zip")
    elif choicezed in no:
        clearScr()
        discovery()
    elif choicezed == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def wpscan():
    clearScr()
    print("""
    WPScan is a free, for non-commercial use, black box WordPress vulnerability scanner written 
    for security professionals and blog maintainers to test the security of their sites. 
    https://www.wpscan.org
    """)
    choicewpscan = raw_input(" Do You Want To Download WP-Scan? (Y/N) : ")
    if choicewpscan in yes:
        os.system(" git clone https://github.com/wpscanteam/wpscan.git")
    elif choicewpscan in no:
        clearScr()
        discovery()
    elif choicewpscan == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def fuzzdb():
    clearScr()
    print("""
    FuzzDB was created to increase the likelihood of causing and identifying conditions of security
    interest through dynamic application security testing. It's the first and most comprehensive 
    open dictionary of fault injection patterns, predictable resource locations, and regex for 
    matching server responses.
    """)
    choicefuzzdb = raw_input(" Do You Want To Download FuzzDB? (Y/N) : ")
    if choicefuzzdb in yes:
        os.system(" git clone https://github.com/fuzzdb-project/fuzzdb.git")
    elif choicefuzzdb in no:
        clearScr()
        discovery()
    elif choicefuzzdb == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def cewl():
    clearScr()
    print("""
    CeWL is a Custom Word List Generator
    """)
    choicecewl = raw_input(" Do You Want To Download CeWL? (Y/N) : ")
    if choicecewl in yes:
        os.system(" git clone https://github.com/digininja/CeWL.git")
    elif choicecewl in no:
        clearScr()
        discovery()
    elif choicecewl == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def dirbuster():
    clearScr()
    print("""
    DirBuster is a multi threaded java application designed to brute force directories 
    and files names on web/application servers.
    """)
    choicedirbuster = raw_input(" Do You Want To Download DirBuster? (Y/N) : ")
    if choicedirbuster in yes:
        os.system("firefox https://sourceforge.net/projects/dirbuster/")
    elif choicedirbuster in no:
        clearScr()
        discovery()
    elif choicedirbuster == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def dirb():
    clearScr()
    print("""
    DIRB is a Web Content Scanner. It looks for existing (and/or hidden) Web Objects.
    It basically works by launching a dictionary based attack against a web server 
    and analizing the response.
    """)
    choicedirb = raw_input(" Do You Want To Download DIRB? (Y/N) : ")
    if choicedirb in yes:
        os.system(" wget https://sourceforge.net/projects/dirb/files/dirb/2.22/dirb222.tar.gz")
    elif choicedirb in no:
        clearScr()
        discovery()
    elif choicedirb == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def filebuster():
    clearScr()
    print("""
    An extremely fast and flexible web fuzzer.
    """)
    choicefilebuster = raw_input(" Do You Want To Download FileBuster? (Y/N) : ")
    if choicefilebuster in yes:
        os.system(" git clone https://github.com/henshin/filebuster.git")
    elif choicefilebuster in no:
        clearScr()
        discovery()
    elif choicefilebuster == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def gobuster():
    clearScr()
    print("""
    GoBuster is a tool used to brute-force URIs in web sites and DNS subdomains (with wildcard support).
    """)
    choicegobuster = raw_input(" Do You Want To Download GoBuster? (Y/N) : ")
    if choicegobuster in yes:
        os.system(" git clone https://github.com/OJ/gobuster.git")
    elif choicegobuster in no:
        clearScr()
        discovery()
    elif choicegobuster == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def dirsearch():
    clearScr()
    print("""
    Dirsearch is a simple command line tool designed to brute force directories and files in websites.
    """)
    choicedirsearch = raw_input(" Do You Want To Download Wapiti? (Y/N) : ")
    if choicedirsearch in yes:
        os.system(" git clone https://github.com/maurosoria/dirsearch.git")
    elif choicedirsearch in no:
        clearScr()
        discovery()
    elif choicedirsearch == "":
        clearScr()
        discovery()
    else:
        clearScr()
        discovery()


def xssradar():
    clearScr()
    print("""
    XSS Radar is a tool that detects parameters and fuzzes them for cross-site scripting vulnerabilities.
    """)
    choicexssradar = raw_input(" Do You Want To Download XSS Radar? (Y/N) : ")
    if choicexssradar in yes:
        os.system("git clone https://github.com/bugbountyforum/XSS-Radar.git")
    elif choicexssradar in no:
        clearScr()
        exploit()
    elif choicexssradar == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xsshunter():
    clearScr()
    print("""
    XSS Hunter allows you to find all kinds of cross-site scripting vulnerabilities, including the 
    often-missed blind XSS. The service works by hosting specialized XSS probes which, upon firing, 
    scan the page and send information about the vulnerable page to the XSS Hunter service..

    Create an XSS Hunter account at https://xsshunter.com/
    """)
    choicexsshunter = raw_input(" Do You Want To Download XSS Hunter? (Y/N) : ")
    if choicexsshunter in yes:
        os.system(" git clone https://github.com/mandatoryprogrammer/xsshunter")
    elif choicexsshunter in no:
        clearScr()
        exploit()
    elif choicexsshunter == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xsshunterclient():
    clearScr()
    print("""
    This tool can be used to generate correlated XSS payloads, these payloads are tagged with a unique 
    ID which can be used to track which HTTP request caused which XSS payload to fire. By using this tool 
    all of your injection attempts are tracked and the reports you generate will have the responsible 
    injection attempt included in the final output. This is useful since XSS payloads can often traverse 
    multiple services (and even protocols) before firing, so it's not always clear what injection caused 
    a certain XSS payload to fire.
    """)
    choicexsshunterclient = raw_input(" Do You Want To Download XSS Hunter Client? (Y/N) : ")
    if choicexsshunterclient in yes:
        os.system(" git clone https://github.com/mandatoryprogrammer/xsshunter_client.git")
    elif choicexsshunterclient in no:
        clearScr()
        exploit()
    elif choicexsshunterclient == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def domxss():
    clearScr()
    print("""
    DOM XSS Scanner is an online tool that facilitates code review of web pages and JavaScript code 
    for potential DOM based XSS security vulnerabilities.
    """)
    choicedomxss = raw_input(" Do You Want To Download DOM XSS Scanner? (Y/N) : ")
    if choicedomxss in yes:
        os.system(" && git clone https://github.com/yaph/domxssscanner.git")
    elif choicedomxss in no:
        clearScr()
        exploit()
    elif choicedomxss == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xsser():
    clearScr()
    print("""
    Cross Site "Scripter" (aka XSSer) is an automatic -framework- to detect, exploit and report XSS vulnerabilities.
    """)
    choicexsser = raw_input(" Do You Want To Download XSSer? (Y/N) : ")
    if choicexsser in yes:
        os.system(" && git clone https://github.com/epsylon/xsser.git")
    elif choicexsser in no:
        clearScr()
        exploit()
    elif choicexsser == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def brutexss():
    clearScr()
    print("""
    Cross-Site Scripting BruteForcer 
    """)
    choicebrutexss = raw_input(" Do You Want To Download BruteXSS? (Y/N) : ")
    if choicebrutexss in yes:
        os.system(" git clone https://github.com/rajeshmajumdar/BruteXSS.git")
    elif choicebrutexss in no:
        clearScr()
        exploit()
    elif choicebrutexss == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xsstrike():
    clearScr()
    print("""
    XSStrike is a python script designed to detect and exploit XSS vulnerabilites.
    """)
    choicexsstrike = raw_input(" Do You Want To Download XSStrike (Y/N) : ")
    if choicexsstrike in yes:
        os.system(
            " git clone https://github.com/UltimateHackers/XSStrike.git &&  python xsstrike")
    elif choicexsstrike in no:
        clearScr()
        exploit()
    elif choicexsstrike == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xssor():
    clearScr()
    print("""
    XSSOR contains three major modules: Encode/Decode, Codz, Probe. Try Online Version: http://xssor.io
    """)
    choicexssor = raw_input(" Do You Want To Download XSSor? (Y/N) : ")
    if choicexssor in yes:
        os.system("  git clone https://github.com/evilcos/xssor2.git")
    elif choicexssor in no:
        clearScr()
        exploit()
    elif choicexssor == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def sqlmap():
    clearScr()
    print("""
    Automatic SQL injection and database takeover tool. http://sqlmap.org
    """)
    choicesqlmap = raw_input("Do You Want To Download Sqlmap? (Y/N) : ")
    if choicesqlmap in yes:
        os.system(" git clone https://github.com/sqlmapproject/sqlmap.git")
    elif choicesqlmap in no:
        clearScr()
        exploit()
    elif choicesqlmap == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def oxmlxxe():
    clearScr()
    print("""
    A tool for embedding XXE/XML exploits into different filetypes.
    """)
    choiceoxmlxxe = raw_input(" Do You Want To Download OXML-XXE? (Y/N) : ")
    if choiceoxmlxxe in yes:
        os.system(" git clone https://github.com/BuffaloWill/oxml_xxe.git")
    elif choiceoxmlxxe in no:
        clearScr()
        exploit()
    elif choiceoxmlxxe == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def xeeinj():
    clearScr()
    print("""
    XXEinjector automates retrieving files using direct and out of band methods.
    Directory listing only works in Java applications. Bruteforcing method needs to be used for other applications.
    """)
    choicexeeinj = raw_input(" Do You Want To Download XXEinjector? (Y/N) : ")
    if choicexeeinj in yes:
        os.system(" git clone https://github.com/enjoiz/XXEinjector.git")
    elif choicexeeinj in no:
        clearScr()
        exploit()
    elif choicexeeinj == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def tplmap():
    clearScr()
    print("""
    Server-Side Template Injection and Code Injection Detection and Exploitation Tool.
    """)
    choicetplmap = raw_input(" Do You Want To Download Tplmap? (Y/N) : ")
    if choicetplmap in yes:
        os.system(" git clone https://github.com/epinna/tplmap.git")
    elif choicetplmap in no:
        clearScr()
        exploit()
    elif choicetplmap == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def ssrfdetector():
    clearScr()
    print("""
    Server-side request forgery detector.
    """)
    choicessrfdetector = raw_input(" Do You Want To Download SSRF-Detector? (Y/N) : ")
    if choicessrfdetector in yes:
        os.system("git clone https://github.com/JacobReynolds/ssrfDetector.git")
    elif choicessrfdetector in no:
        clearScr()
        exploit()
    elif choicessrfdetector == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def groundcontrol():
    clearScr()
    print("""
    A collection of scripts that run on my web server. Mainly for debugging SSRF, blind XSS, and XXE vulnerabilities.
    """)
    choicegroundcontrol = raw_input(" Do You Want To Download Ground Control? (Y/N) : ")
    if choicegroundcontrol in yes:
        os.system(" git clone https://github.com/jobertabma/ground-control.git")
    elif choicegroundcontrol in no:
        clearScr()
        exploit()
    elif choicegroundcontrol == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def lfisuit():
    clearScr()
    print("""
    Totally Automatic LFI Exploiter (+ Reverse Shell) and Scanner.
    """)
    choicelfisuit = raw_input(" Do You Want To Download LFISuit? (Y/N) : ")
    if choicelfisuit in yes:
        os.system(" git clone https://github.com/D35m0nd142/LFISuite.git")
    elif choicelfisuit in no:
        clearScr()
        exploit()
    elif choicelfisuit == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def genxbinavi():
    clearScr()
    print("""
    File uploader.
    """)
    choicegenxbinavi = raw_input(" Do You Want To Download Gen-xbin-Avi? (Y/N) : ")
    if choicegenxbinavi in yes:
        os.system(" git clone https://github.com/neex/ffmpeg-avi-m3u-xbin.git")
    elif choicegenxbinavi in no:
        clearScr()
        exploit()
    elif choicegenxbinavi == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def gittools():
    clearScr()
    print("""
    A repository with 3 tools for pwn'ing websites with .git repositories available.
    """)
    choicegittools = raw_input(" Do You Want To Download GitTools? (Y/N) : ")
    if choicegittools in yes:
        os.system(" && git clone https://github.com/internetwache/GitTools.git")
    elif choicegittools in no:
        clearScr()
        exploit()
    elif choicegittools == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def dvcsripper():
    clearScr()
    print("""
    Rip web accessible (distributed) version control systems: SVN/GIT/HG...
    """)
    choicedvcsripper = raw_input(" Do You Want To Download DVSC Ripper? (Y/N) : ")
    if choicedvcsripper in yes:
        os.system(" git clone https://github.com/kost/dvcs-ripper.git")
    elif choicedvcsripper in no:
        clearScr()
        exploit()
    elif choicedvcsripper == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def tkosubs():
    clearScr()
    print("""
    A tool that can help detect and takeover subdomains with dead DNS records
    """)
    choicetkosubs = raw_input(" Do You Want To Download tko-subs? (Y/N) : ")
    if choicetkosubs in yes:
        os.system(" git clone https://github.com/anshumanbh/tko-subs.git")
    elif choicetkosubs in no:
        clearScr()
        exploit()
    elif choicetkosubs == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def subbruteforcer():
    clearScr()
    print("""
    This app will bruteforce for exisiting subdomains and provide the IP address and Host information.
    """)
    choicesubbruteforcer = raw_input(" Do You Want To Download HostileSubBruteforcer? (Y/N) : ")
    if choicesubbruteforcer in yes:
        os.system(" git clone https://github.com/nahamsec/HostileSubBruteforcer.git")
    elif choicesubbruteforcer in no:
        clearScr()
        exploit()
    elif choicesubbruteforcer == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def secondorder():
    clearScr()
    print("""
    Second-order subdomain takeover scanner.
    """)
    choicesecondorder = raw_input(" Do You Want To Download Second-Order? (Y/N) : ")
    if choicesecondorder in yes:
        os.system(" git clone https://github.com/mhmdiaa/second-order.git")
    elif choicesecondorder in no:
        clearScr()
        exploit()
    elif choicesecondorder == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def racetheweb():
    clearScr()
    print("""
    Tests for race conditions in web applications. Includes a RESTful API to integrate into a continuous integration pipeline. http://RaceTheWeb.io
    """)
    choiceracetheweb = raw_input(" Do You Want To Download Race The Web? (Y/N) : ")
    if choiceracetheweb in yes:
        os.system(" git clone https://github.com/insp3ctre/race-the-web.git")
    elif choiceracetheweb in no:
        clearScr()
        exploit()
    elif choiceracetheweb == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def corstest():
    clearScr()
    print("""
    A simple CORS misconfiguration scanner.
    """)
    choicecorstest = raw_input(" Do You Want To Download CORStest? (Y/N) : ")
    if choicecorstest in yes:
        os.system(" git clone https://github.com/RUB-NDS/CORStest.git")
    elif choicecorstest in no:
        clearScr()
        exploit()
    elif choicecorstest == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def rcestrutspwn():
    clearScr()
    print("""
    An exploit for Apache Struts CVE-2017-5638.
    """)
    choicercestrutspwn = raw_input(" Do You Want To Download RCE struts-pwn? (Y/N) : ")
    if choicercestrutspwn in yes:
        os.system(" git clone https://github.com/mazen160/struts-pwn.git")
    elif choicercestrutspwn in no:
        clearScr()
        exploit()
    elif choicercestrutspwn == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def ysoserial():
    clearScr()
    print("""
    A proof-of-concept tool for generating payloads that exploit unsafe Java object deserialization.
    """)
    choiceysoserial = raw_input(" Do You Want To Download Y-So-Serial? (Y/N) : ")
    if choiceysoserial in yes:
        os.system(" git clone https://github.com/GoSecure/ysoserial.git")
    elif choiceysoserial in no:
        clearScr()
        exploit()
    elif choiceysoserial == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def phpggc():
    clearScr()
    print("""
    PHPGGC is a library of unserialize() payloads along with a tool to generate them, from command line or programmatically. 
    """)
    choicephpggc = raw_input(" Do You Want To Download PHP Generic Gadget Chains? (Y/N) : ")
    if choicephpggc in yes:
        os.system(" git clone https://github.com/ambionics/phpggc.git")
    elif choicephpggc in no:
        clearScr()
        exploit()
    elif choicephpggc == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def retirejs():
    clearScr()
    print("""
    scanner detecting the use of JavaScript libraries with known vulnerabilities.
    http://retirejs.github.io/retire.js/
    """)
    choiceretirejs = raw_input(" Do You Want To Download Retire.js? (Y/N) : ")
    if choiceretirejs in yes:
        os.system(" git clone https://github.com/RetireJS/retire.js.git")
    elif choiceretirejs in no:
        clearScr()
        exploit()
    elif choiceretirejs == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def getsploit():
    clearScr()
    print("""
    Command line utility for searching and downloading exploits.
    """)
    choicegetsploit = raw_input(" Do You Want To Download Getsploit? (Y/N) : ")
    if choicegetsploit in yes:
        os.system(" git clone https://github.com/vulnersCom/getsploit.git")
    elif choicegetsploit in no:
        clearScr()
        exploit()
    elif choicegetsploit == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def findsploit():
    clearScr()
    print("""
    Find exploits in local and online databases instantly. https://crowdshield.com
    """)
    choicefindsploit = raw_input(" Do You Want To Download Findsploit? (Y/N) : ")
    if choicefindsploit in yes:
        os.system(" git clone https://github.com/1N3/Findsploit.git")
    elif choicefindsploit in no:
        clearScr()
        exploit()
    elif choicefindsploit == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def bfac():
    clearScr()
    print("""
    BFAC (Backup File Artifacts Checker): An automated tool that checks for backup artifacts
    that may disclose the web-application's source code.
    """)
    choicebfac = raw_input(" Do You Want To Download BFAC? (Y/N) : ")
    if choicebfac in yes:
        os.system(" git clone https://github.com/mazen160/bfac.git")
    elif choicebfac in no:
        clearScr()
        exploit()
    elif choicebfac == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def wpscann():
    clearScr()
    print("""
    WPScan is a free, for non-commercial use, black box WordPress vulnerability scanner
    written for security professionals and blog maintainers to test the security of their sites.
    https://www.wpscan.org
    """)
    choicewpscann = raw_input(" Do You Want To Download WPScan? (Y/N) : ")
    if choicewpscann in yes:
        os.system(" git clone https://github.com/wpscanteam/wpscan.git")
    elif choicewpscann in no:
        clearScr()
        exploit()
    elif choicewpscann == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def cmsmap():
    clearScr()
    print("""
    CMSmap is a python open source CMS scanner that automates the process of detecting 
    security flaws of the most popular CMSs.
    """)
    choicecmsmap = raw_input(" Do You Want To Download CMSmap? (Y/N) : ")
    if choicecmsmap in yes:
        os.system(" git clone https://github.com/Dionach/CMSmap.git")
    elif choicecmsmap in no:
        clearScr()
        exploit()
    elif choicecmsmap == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def joomscan():
    clearScr()
    print("""
    OWASP Joomla Vulnerability Scanner Project.
    https://www.owasp.org/index.php/Category:OWASP_Joomla_Vulnerability_Scanner_Project
    """)
    choicejoomscan = raw_input(" Do You Want To Download Joomscan? (Y/N) : ")
    if choicejoomscan in yes:
        os.system(" git clone https://github.com/rezasp/joomscan.git")
    elif choicejoomscan in no:
        clearScr()
        exploit()
    elif choicejoomscan == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def jsonwtt():
    clearScr()
    print("""
    A toolkit for testing, tweaking and cracking JSON Web Tokens
    """)
    choicejsonwtt = raw_input(" Do You Want To Download The JSON Web Token Toolkit? (Y/N) : ")
    if choicejsonwtt in yes:
        os.system(" git clone https://github.com/ticarpi/jwt_tool.git")
    elif choicejsonwtt in no:
        clearScr()
        exploit()
    elif choicejsonwtt == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def wfuzz():
    clearScr()
    print("""
    Web application fuzzer. http://wfuzz.org
    """)
    choicewfuzz = raw_input(" Do You Want To Download Wfuzz? (Y/N) : ")
    if choicewfuzz in yes:
        os.system(" git clone https://github.com/xmendez/wfuzz.git")
    elif choicewfuzz in no:
        clearScr()
        exploit()
    elif choicewfuzz == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def patator():
    clearScr()
    print("""
    Patator is a multi-purpose brute-forcer, with a modular design and a flexible usage.
    """)
    choicepatator = raw_input(" Do You Want To Download Patator? (Y/N) : ")
    if choicepatator in yes:
        os.system(" git clone https://github.com/lanjelot/patator.git")
    elif choicepatator in no:
        clearScr()
        exploit()
    elif choicepatator == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def hydra():
    clearScr()
    print("""
    This tool is a proof of concept code, to give researchers and security consultants
    the possibility to show how easy it would be to gain unauthorized access from remote to a system.
    """)
    choicehydra = raw_input(" Do You Want To Download Hydra? (Y/N) : ")
    if choicehydra in yes:
        os.system(" git clone https://github.com/vanhauser-thc/thc-hydra.git")
    elif choicehydra in no:
        clearScr()
        exploit()
    elif choicehydra == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def changeme():
    clearScr()
    print("""
    A default credential scanner.
    """)
    choicechangeme = raw_input(" Do You Want To Download ChangeMe? (Y/N) : ")
    if choicechangeme in yes:
        os.system(" git clone https://github.com/ztgrace/changeme.git")
    elif choicechangeme in no:
        clearScr()
        exploit()
    elif choicechangeme == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def wappalyzer():
    clearScr()
    print("""
    Wappalyzer is a cross-platform utility that uncovers the technologies used on websites.
    It detects content management systems, ecommerce platforms, web frameworks, 
    server software, analytics tools and many more.
    """)
    choicewappalyzer = raw_input(" Do You Want To Visit Wappalyzer? (Y/N) : ")
    if choicewappalyzer in yes:
        os.system("firefox https://wappalyzer.com")
    elif choicewappalyzer in no:
        clearScr()
        exploit()
    elif choicewappalyzer == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def builtwith():
    clearScr()
    print("""
    Find out what websites are Built With.
    """)
    choicebuiltwith = raw_input(" Do You Want To Visit BuiltWith? (Y/N) : ")
    if choicebuiltwith in yes:
        os.system("firefox https://builtwith.com/")
    elif choicebuiltwith in no:
        clearScr()
        exploit()
    elif choicebuiltwith == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def wafwoof():
    clearScr()
    print("""
    WAFW00F allows one to identify and fingerprint Web Application Firewall (WAF) products protecting a website.
    """)
    choicewafwoof = raw_input(" Do You Want To Download WAFW00F? (Y/N) : ")
    if choicewafwoof in yes:
        os.system(" git clone https://github.com/EnableSecurity/wafw00f.git")
    elif choicewafwoof in no:
        clearScr()
        exploit()
    elif choicewafwoof == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def assetnote():
    clearScr()
    print("""
    Assetnote is a subdomains supervision tools which allow for real-time notifications 
    about newlly added subdomains.
    """)
    choiceassetnote = raw_input(" Do You Want To Download AssetNote? (Y/N) : ")
    if choiceassetnote in yes:
        os.system(" git clone https://github.com/infosec-au/assetnote")
    elif choiceassetnote in no:
        clearScr()
        exploit()
    elif choiceassetnote == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def jsbeautifier():
    clearScr()
    print("""
    Beautifier for javascript. https://beautifier.io
    """)
    choicejsbeautifier = raw_input(" Do You Want To Download JavaScript Beautifier? (Y/N) : ")
    if choicejsbeautifier in yes:
        os.system(" git clone https://github.com/beautify-web/js-beautify.git")
    elif choicejsbeautifier in no:
        clearScr()
        exploit()
    elif choicejsbeautifier == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def linkfinder():
    clearScr()
    print("""
    A python script that finds endpoints in JavaScript files.
    """)
    choicelinkfinder = raw_input(" Do You Want To Download LinkFinder? (Y/N) : ")
    if choicelinkfinder in yes:
        os.system(" git clone https://github.com/GerbenJavado/LinkFinder.git")
    elif choicelinkfinder in no:
        clearScr()
        exploit()
    elif choicelinkfinder == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def mobsf():
    clearScr()
    print("""
    Mobile Security Framework is an automated, all-in-one mobile application (Android/iOS/Windows)
    pen-testing framework capable of performing static analysis, dynamic analysis, malware analysis 
    and web API testing. https://opensecurity.in
    """)
    choicemobsf = raw_input(" Do You Want To Download Mobile-Security-Framework? (Y/N) : ")
    if choicemobsf in yes:
        os.system(" git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git")
    elif choicemobsf in no:
        clearScr()
        exploit()
    elif choicemobsf == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def genymotion():
    clearScr()
    print("""
    Android Emulator.
    """)
    choicegenymotion = raw_input(" Do You Want To Download GenyMotion? (Y/N) : ")
    if choicegenymotion in yes:
        os.system("firefox https://www.genymotion.com/")
    elif choicegenymotion in no:
        clearScr()
        exploit()
    elif choicegenymotion == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def apktool():
    clearScr()
    print("""
    A tool for reverse engineering Android apk files.
    """)
    choiceapktool = raw_input(" Do You Want To Download APKTool? (Y/N) : ")
    if choiceapktool in yes:
        os.system(" git clone https://github.com/iBotPeaches/apktool.git")
    elif choiceapktool in no:
        clearScr()
        exploit()
    elif choiceapktool == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def dex2jar():
    clearScr()
    print("""
    Tools to work with android .dex and java .class files.
    """)
    choicedex2jar = raw_input(" Do You Want To Download dex2jar? (Y/N) : ")
    if choicedex2jar in yes:
        os.system("firefox https://sourceforge.net/projects/dex2jar/files/dex2jar-2.0.zip/download")
    elif choicedex2jar in no:
        clearScr()
        exploit()
    elif choicedex2jar == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def jdgui():
    clearScr()
    print("""
    A standalone graphical utility that displays Java sources from CLASS files.
    """)
    choicejdgui = raw_input(" Do You Want To Download JD-GUI? (Y/N) : ")
    if choicejdgui in yes:
        os.system(" git clone https://github.com/java-decompiler/jd-gui.git")
    elif choicejdgui in no:
        clearScr()
        exploit()
    elif choicejdgui == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def idb():
    clearScr()
    print("""
    idb is a tool to simplify some common tasks for iOS pentesting and research. 
    Originally there was a command line version of the tool, but it is no longer 
    under development so you should get the GUI version. http://www.idbtool.com/
    """)
    choiceidb = raw_input(" Do You Want To Download idb? (Y/N) : ")
    if choiceidb in yes:
        os.system(" git clone https://github.com/dmayer/idb.git")
    elif choiceidb in no:
        clearScr()
        exploit()
    elif choiceidb == "":
        clearScr()
        exploit()
    else:
        clearScr()
        exploit()


def bugtips():
    os.system('clear')
    print("""

    -----------------------------------------------------------

    * Always Read The Source Code.
    * Get Subdomains and Start with Unpopuler Domains. 
    * Always Check The Backend CMS & Backend Language.
    * Use Google Dorks.
    * Check Each Request and Response.
    * Active Mind - Think Out of The Box. ;)
    """)
    choicebugtips = raw_input(" Press Enter and Go Back To Menu : ")
    if choicebugtips == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def platforms():
    os.system('clear')
    print(""" 

    -----------------------------------------------------------

    Bugcrowd : https://bugcrowd.com/
    Hackerone : https://hackerone.com/    
    Google : https://google.com/about/appsecurity/    
    Facebook : https://facebook.com/BugBounty/
    Open Bug Bounty : https://www.openbugbounty.org/ 
    HackTrophy : https://hacktrophy.com/
    BountyGraph : https://bountygraph.com/
    PlugBounty : https://www.plugbounty.com/
    intigriti : https://www.intigriti.com/   
    More Bug Bounty Programs List : https://bugcrowd.com/bug-bounty-list/\n
    """)
    choiceplatforms = raw_input(" Press Enter and Go Back To Menu : ")
    if choiceplatforms == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def pocs():
    os.system('clear')
    print(""" 
    Proof of Concepts and Write-Ups from Other Hackers..
    -----------------------------------------------------------

    Bug Bounty write-ups : https://forum.bugcrowd.com/t/researcher-resources-bounty-bug-write-ups/
    Awesome Bug Bounty : https://github.com/djadmin/awesome-bug-bounty
    SecurityBreached-BugBounty POC : https://blog.securitybreached.org/category/bugbounty-poc/
    Facebook Hunting POC : https://m.facebook.com/notes/phwd/facebook-bug-bounties/707217202701640/?__tn__=%2As-R
    Bug Hunting Tutorials : https://forum.bugcrowd.com/t/researcher-resources-tutorials/370
    PentesterLand Bug Bounty Writeups : https://pentester.land/list-of-bug-bounty-writeups.html
    Hackerone POC Reports : http://h1.nobbd.de/
    Bug Bounty POC : http://www.xsses.com/
    Netsec on Reddit : https://www.reddit.com/r/netsec
    Bug Bounty World : https://bugbountyworld.com/\n
    """)
    choiceplatforms = raw_input(" Press Enter and Go Back To Menu : ")
    if choiceplatforms == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def cheatsheet():
    os.system('clear')
    print(""" 

    -----------------------------------------------------------------

    Pentest Bookmarks : https://github.com/kurobeats/pentest-bookmarks/blob/master/BookmarksList.md
    Awesome OSINT Cheat-Sheet : https://github.com/jivoi/awesome-osint
    Awesome Pentest Cheat-Sheet : https://github.com/enaqx/awesome-pentest
    Bug Bounty Cheat-Sheet : https://github.com/EdOverflow/bugbounty-cheatsheet
    Awesome Hacking Cheat-Sheet : https://github.com/Hack-with-Github/Awesome-Hacking
    Awesome-Infosec Cheat-Sheet : https://github.com/onlurking/awesome-infose
    SQL Injection Cheat-Sheet : http://pentestmonkey.net/blog/mssql-sql-injection-cheat-sheet/
    XSS Cheat-Sheet : https://gist.github.com/kurobeats/9a613c9ab68914312cbb415134795b45
    XXE Payload : https://gist.github.com/staaldraad/01415b990939494879b4\n
    """)
    choiceplatforms = raw_input(" Press Enter and Go Back To Menu : ")
    if choiceplatforms == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def eyewitness():
    clearScr()
    print("""
    EyeWitness is designed to take screenshots of websites, RDP services, and open VNC servers, 
    provide some server header info, and identify default credentials if possible.
    """)
    choiceeyewitness = raw_input(" Do You Want To Download EyeWitness (Y/N) : ")
    if choiceeyewitness in yes:
        os.system(" git clone https://github.com/FortyNorthSecurity/EyeWitness.git")
    elif choiceeyewitness in no:
        clearScr()
        reporting()
    elif choiceeyewitness == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def httpscreenshot():
    clearScr()
    print("""
    HTTPScreenshot is a tool for grabbing screenshots and HTML of large numbers of websites.
    The goal is for it to be both thorough and fast which can sometimes oppose each other.
    """)
    choicehttpscreenshot = raw_input(" Do You Want To Download HTTPScreenshot (Y/N) : ")
    if choicehttpscreenshot in yes:
        os.system(" git clone https://github.com/breenmachine/httpscreenshot.git")
    elif choicehttpscreenshot in no:
        clearScr()
        reporting()
    elif choicehttpscreenshot == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def bbtemplates():
    clearScr()
    print("""
    A collection of templates for bug bounty reporting, with guides on how to write and fill out.
    """)
    choicebbtemplates = raw_input(" Do You Want To Download Bug Bounty Templates (Y/N) : ")
    if choicebbtemplates in yes:
        os.system(" git clone https://github.com/ZephrFish/BugBountyTemplates.git")
    elif choicebbtemplates in no:
        clearScr()
        reporting()
    elif choicebbtemplates == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def gentemplates():
    clearScr()
    print("""
    A simple variable based template editor using handlebarjs+strapdownjs. The idea is to use 
    variables in markdown based files to easily replace the variables with content. Data is 
    saved temporarily in local storage. PHP is only needed to generate the list of files in 
    the dropdown of templates.
    """)
    choicegentemplates = raw_input(" Do You Want To Download Template Generator (Y/N) : ")
    if choicegentemplates in yes:
        os.system(" git clone https://github.com/fransr/template-generator.git")
    elif choicegentemplates in no:
        clearScr()
        reporting()
    elif choicegentemplates == "":
        clearScr()
        reporting()
    else:
        clearScr()
        reporting()


def clearScr():
    if system() == 'Linux':
        os.system('clear')
    if system() == 'Windows':
        os.system('cls')


if __name__ == "__main__":
    menu()
