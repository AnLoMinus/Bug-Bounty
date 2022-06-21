#!/bin/bash -i

#Creating tools directory if not exist
mkdir -p /root/OK-VPS/tools /root/OK-VPS/tools/file;
clear;

ENVIRONMENT () {
	echo -e ${BLUE}"[ENVIRONMENT]" ${RED}"Packages required installation in progress ...";
	
    apt-get update -y > /dev/null 2>&1 && apt install software-properties-common -y -qq &>/dev/null && apt update -y -qq &>/dev/null && apt install git -y -qq &>/dev/null && apt install --assume-yes p7zip-full &>/dev/null2>&1;
    apt install wget -y -qq &>/dev/null && apt install python3 -y -qq &>/dev/null && apt install python3-pip -y -qq &>/dev/null &&
    apt install dig -y -qq &>/dev/null && apt install host -y -qq &>/dev/null && apt install make -y -qq &>/dev/null && apt install git -y -qq &>/dev/null && 
    apt install gcc -y -qq &>/dev/null && apt install jq -y -qq &>/dev/null && apt-get install libldns-dev -y -qq  > /dev/null 2>&1;
        apt-get install python > /dev/null 2>&1;
        apt-get install python2 > /dev/null 2>&1;
        apt-get install python3 > /dev/null 2>&1;
        apt-get install pip -ygo > /dev/null 2>&1;
        python install pip1 > /dev/null 2>&1;
        python install pip2 > /dev/null 2>&1;
        python install pip3 > /dev/null 2>&1;
        apt-get install libpython-stdlib > /dev/null 2>&1;
        apt-get install python-argparse > /dev/null 2>&1;
        apt-get autoremove -y > /dev/null 2>&1;
        python get-install pip.py > /dev/null 2>&1;
        python install-requests > /dev/null 2>&1;
        apt-get update --fix-missing > /dev/null 2>&1;
	#Specific Kali Linux
		#Specificity :
        apt-get update -y > /dev/null 2>&1;
	 apt-get upgrade -y > /dev/null 2>&1;
       
}


  Go(){
	#Bash colors
	#Generic fot both OS - Golang environment
	echo -e ${BLUE}"[ENVIRONMENT]" ${RED}"Golang environment installation in progress ...";
	cd /root/OK-VPS/tools/file && wget https://storage.googleapis.com/golang/go1.18.2.linux-amd64.tar.gz && tar -zxvf go1.18.2.linux-amd64.tar.gz -C /usr/local/ && echo 'export GOROOT=/usr/local/go' >> ~/.bashrc && echo 'export GOPATH=$HOME/go' >> ~/.bashrc && echo 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> ~/.bashrc && apt-get install golang;
	echo -e ${BLUE}"[ENVIRONMENT]" ${GREEN}"Golang environment installation is done !"; echo "";
}

SUBDOMAINS_ENUMERATION () {
	#Subfinder
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Subfinder installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest > /dev/null 2>&1 && ln -s ~/go/bin/subfinder /usr/local/bin/;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Subfinder installation is done !"; echo "";
	#Assetfinder
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Assetfinder installation in progress ...";
	go install github.com/tomnomnom/assetfinder@latest > /dev/null 2>&1 && ln -s ~/go/bin/assetfinder /usr/local/bin/;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Assetfinder installation is done !"; echo "";
	#Findomain
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Findomain installation in progress ...";
	cd /root/OK-VPS/tools/file && wget install https://github.com/Edu4rdSHL/findomain/releases/latest/download/findomain-linux && chmod +x findomain-linux && mv findomain-linux /usr/local/bin/findomain;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Findomain installation is done !"; echo "";
	#Github-subdomains
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Github-subdomains installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/gwen001/github-search.git > /dev/null 2>&1 && pip install colored && pip install tldextract;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Github-subdomains installation is done !"; echo "";
	#Amass
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Amass installation in progress ...";
	cd /root/OK-VPS/tools/file && wget install https://github.com/OWASP/Amass/releases/download/v$AMASSVER/amass_linux_amd64.zip && unzip amass_linux_amd64.zip > /dev/null 2>&1 && mv amass_linux_amd64/amass /usr/local/bin/;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Amass installation is done !"; echo "";
	#Crobat
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${RED}"Crobat installation in progress ...";
	go install github.com/cgboal/sonarsearch/cmd/crobat@latest > /dev/null 2>&1 && ln -s ~/go/bin/crobat /usr/local/bin/;
	echo -e ${BLUE}"[SUBDOMAINS ENUMERATION]" ${GREEN}"Crobat installation is done !"; echo "";
	#Sudomy
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"Sudomy installation in progress ...";
	cd /root/OK-VPS/tools && git clone --recursive https://github.com/screetsec/Sudomy.git > /dev/null 2>&1 && cd Sudomy && python3 -m pip install -r requirements.txt && apt-get install npm && apt-get install jq && npm install -g phantomjs && apt-get install jq nmap phantomjs npm chromium parallel -y && npm i -g wappalyzer wscat && cp sudomy /usr/local/bin && cp sudomy.api /usr/local/bin && cp slack.conf /usr/local/bin && cp sudomy.conf /usr/local/bin > /dev/null 2>&1 && ln -s /root/OK-VPS/tools/Sudomy/sudomy /usr/local/bin/;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"Sudomy installation is done !"; echo "";
	#Sudomy
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"Mapcidr installation in progress ...";
	go install -v github.com/projectdiscovery/mapcidr/cmd/mapcidr@latest > /dev/null 2>&1 && ln -s ~/go/bin/mapcidr /usr/local/bin/;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"Mapcidr installation is done !"; echo "";
}

DNS_RESOLVER () {
	#MassDNS
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"MassDNS installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/blechschmidt/massdns.git > /dev/null 2>&1 && cd massdns && make > /dev/null 2>&1 && ln -s /root/OK-VPS/tools/massdns/bin/massdns /usr/local/bin/;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"MassDNS installation is done !"; echo "";
	#dnsx
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"dnsx installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/dnsx/cmd/dnsx@latest > /dev/null 2>&1 && ln -s ~/go/bin/dnsx /usr/local/bin/;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"dnsx installation is done !"; echo "";
	#PureDNS
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"PureDNS installation in progress ...";
	GO111MODULE=on go install github.com/d3mondev/puredns/v2@latest > /dev/null 2>&1 && ln -s ~/go/bin/puredns /usr/local/bin;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"PureDNS installation is done !"; echo "";
	#shuffledns
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"SHuffleDNS installation in progress ...";
	go install -v github.com/projectdiscovery/shuffledns/cmd/shuffledns@latest > /dev/null 2>&1 && ln -s ~/go/bin/shuffledns /usr/local/bin;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"SHuffelDNS installation is done !"; echo "";
	#dnsvalidator
	echo -e ${BLUE}"[DNS RESOLVER]" ${RED}"DNSvalidator installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/vortexau/dnsvalidator.git > /dev/null 2>&1 && cd dnsvalidator && python3 setup.py install > /dev/null 2>&1 && ln -s /root/OK-VPS/tools/dnsvalidator/dnsvalidator /usr/local/bin/;
	echo -e ${BLUE}"[DNS RESOLVER]" ${GREEN}"DNSvalidator installation is done !"; echo "";
}

VISUAL_/root/OK-VPS/tools () {
	#Aquatone
	echo -e ${BLUE}"[VISUAL /root/OK-VPS/tools]" ${RED}"Aquatone installation in progress ...";
	cd /root/OK-VPS/tools/file && wget install https://github.com/michenriksen/aquatone/releases/download/v$AQUATONEVER/aquatone_linux_amd64_$AQUATONEVER.zip > /dev/null 2>&1 && unzip aquatone_linux_amd64_$AQUATONEVER.zip > /dev/null 2>&1 && mv aquatone /usr/local/bin/;
	echo -e ${BLUE}"[VISUAL /root/OK-VPS/tools]" ${GREEN}"Aquatone installation is done !"; echo "";
	#Gowitness
	echo -e ${BLUE}"[VISUAL /root/OK-VPS/tools]" ${RED}"Gowitness installation in progress ...";
	go install github.com/sensepost/gowitness@latest > /dev/null 2>&1 && ln -s ~/go/bin/gowitness chmod +x /usr/local/bin/;
	echo -e ${BLUE}"[VISUAL /root/OK-VPS/tools]" ${GREEN}"Gowitness installation is done !"; echo "";
}

HTTP_PROBE () {
	#httpx
	echo -e ${BLUE}"[HTTP PROBE]" ${RED}"httpx installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest > /dev/null 2>&1 && ln -s ~/go/bin/httpx /usr/local/bin/;
	echo -e ${BLUE}"[HTTP PROBE]" ${GREEN}"Httpx installation is done !"; echo "";
	#httprobe
	echo -e ${BLUE}"[HTTP PROBE]" ${RED}"httprobe installation in progress ...";
	go install github.com/tomnomnom/httprobe@latest > /dev/null 2>&1 && ln -s ~/go/bin/httprobe /usr/local/bin/;
	echo -e ${BLUE}"[HTTP PROBE]" ${GREEN}"httprobe installation is done !"; echo "";
}

WEB_CRAWLING () {
	#Gospider
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"Gospider installation in progress ...";
	go install github.com/jaeles-project/gospider@latest > /dev/null 2>&1 && ln -s ~/go/bin/gospider /usr/local/bin/;
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"Gospider installation is done !"; echo "";
	#Hakrawler
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"Hakrawler installation in progress ...";
	go install github.com/hakluke/hakrawler@latest > /dev/null 2>&1 && ln -s ~/go/bin/hakrawler /usr/local/bin/;
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"Hakrawler installation is done !"; echo "";
	#ParamSpider
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"ParamSpider installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/devanshbatham/ParamSpider > /dev/null 2>&1 && cd ParamSpider && pip3 install -r requirements.txt 
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"ParamSpider installation is done !"; echo "";
	#Waybackurls
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"Waybackurls installation in progress ...";
	go install github.com/tomnomnom/waybackurls@latest > /dev/null 2>&1 && ln -s ~/go/bin/waybackurls /usr/local/bin/;
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"Waybackurls installation is done !"; echo "";
	#Gua
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"Gau installation in progress ...";
	go install github.com/lc/gau/v2/cmd/gau@latest > /dev/null 2>&1 && ln -s ~/go/bin/gau /usr/local/bin/;
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"Gau installation is done !"; echo "";
	#GF
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"GF installation in progress ...";
	go install github.com/tomnomnom/gf@latest > /dev/null 2>&1 && ln -s ~/go/bin/gf /usr/local/bin/;
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"GF installation in progress ...";
	#GF_P
	echo -e ${BLUE}"[WEB CRAWLING]" ${RED}"GF_P installation in progress ...";
	cd /root && mkdir -p .gf &&  cd /root/OK-VPS/tools/file && git clone https://github.com/tomnomnom/gf && cd /root/OK-VPS/tools/file/gf/examples && cp *.json $HOME/.gf && cd /root/OK-VPS/tools/file && git clone https://github.com/1ndianl33t/Gf-Patterns && cd /root/OK-VPS/tools/file/Gf-Patterns && cp *.json $HOME/.gf; 
	echo -e ${BLUE}"[WEB CRAWLING]" ${GREEN}"GF_P installation in progress ...";
}

NETWORK_SCANNER () {
	#Nmap
	echo -e ${BLUE}"[NETWORK SCANNER]" ${RED}"Nmap installation in progress ...";
	apt-get install nmap -y && apt install -y libpcap-dev > /dev/null 2>&1;
	echo -e ${BLUE}"[NETWORK SCANNER]" ${GREEN}"Nmap installation is done !"; echo "";
	#masscan
	echo -e ${BLUE}"[NETWORK SCANNER]" ${RED}"Masscan installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/robertdavidgraham/masscan > /dev/null 2>&1 && cd masscan && make > /dev/null 2>&1 && make install > /dev/null 2>&1 && mv bin/masscan /usr/local/bin/;
	echo -e ${BLUE}"[NETWORK SCANNER]" ${GREEN}"Masscan installation is done !"; echo "";
	#naabu
	echo -e ${BLUE}"[NETWORK SCANNER]" ${RED}"Naabu installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/naabu/v2/cmd/naabu@latest > /dev/null 2>&1 && ln -s ~/go/bin/naabu /usr/local/bin/;
	echo -e ${BLUE}"[NETWORK SCANNER]" ${GREEN}"Naabu installation is done !"; echo "";
}

HTTP_PARAMETER () {
	#Arjun
	echo -e ${BLUE}"[HTTP PARAMETER DISCOVERY]" ${RED}"Arjun installation in progress ...";
	pip3 install arjun > /dev/null 2>&1;
	echo -e ${BLUE}"[HTTP PARAMETER DISCOVERY]" ${GREEN}"Arjun installation is done !"; echo "";
	#x8
	echo -e ${BLUE}"[HTTP PARAMETER DISCOVERY]" ${RED}"x8 installation in progress ...";
	cd /root/OK-VPS/tools/file && wget install https://github.com/Sh1Yo/x8/releases/download/v"$X8VER"/x8_linux.tar.gz > /dev/null 2>&1 && tar -zxvf x8_linux.tar.gz > /dev/null 2>&1 && mv x8 /usr/local/bin/x8;
	echo -e ${BLUE}"[HTTP PARAMETER DISCOVERY]" ${GREEN}"x8 installation is done !"; echo "";
}

FUZZING_TOOLS () {
	#ffuf
	echo -e ${BLUE}"[FUZZING TOOLS]" ${RED}"ffuf installation in progress ...";
	go install github.com/ffuf/ffuf@latest > /dev/null 2>&1 && ln -s ~/go/bin/ffuf /usr/local/bin/;
	echo -e ${BLUE}"[FUZZING TOOLS]" ${GREEN}"ffuf installation is done !"; echo "";
	#gobuster
	echo -e ${BLUE}"[FUZZING TOOLS]" ${RED}"Gobuster installation in progress ...";
	go install github.com/OJ/gobuster/v3@latest > /dev/null 2>&1 && ln -s ~/go/bin/gobuster /usr/local/bin/;
	echo -e ${BLUE}"[FUZZING TOOLS]" ${GREEN}"Gobuster installation is done !"; echo "";
	#wfuzz
	echo -e ${BLUE}"[FUZZING TOOLS]" ${RED}"wfuzz installation in progress ...";
	apt-install install wfuzz -y > /dev/null 2>&1;
	echo -e ${BLUE}"[FUZZING TOOLS]" ${GREEN}"wfuzz installation is done !"; echo "";
}

LFI_TOOLS () {
	#LFISuite
	echo -e ${BLUE}"[LFI TOOLS]" ${RED}"LFISuite installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/D35m0nd142/LFISuite.git > /dev/null 2>&1;
	echo -e ${BLUE}"[LFI TOOLS]" ${GREEN}"LFISuite installation is done !"; echo "";
}

SSRF_TOOLS () {
	#SSRFmap
	echo -e ${BLUE}"[SSRF TOOLS]" ${RED}"SSRFmap installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/swisskyrepo/SSRFmap > /dev/null 2>&1 && cd SSRFmap && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[SSRF TOOLS]" ${GREEN}"SSRFmap installation is done !"; echo "";
	#Gopherus
	echo -e ${BLUE}"[SSRF TOOLS]" ${RED}"Gopherus installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/tarunkant/Gopherus.git > /dev/null 2>&1 && cd Gopherus && chmod +x install.sh && ./install.sh > /dev/null 2>&1;
	echo -e ${BLUE}"[SSRF TOOLS]" ${GREEN}"Gopherus installation is done !"; echo "";
	#Interactsh
	echo -e ${BLUE}"[SSRF TOOLS]" ${RED}"Interactsh installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/interactsh/cmd/interactsh-client > /dev/null 2>&1 && ln -s ~/go/bin/interactsh-client /usr/local/bin/;
	echo -e ${BLUE}"[SSRF TOOLS]" ${GREEN}"Interactsh installation is done !"; echo "";
}

SSTI_TOOLS () {
	#tplmap
	echo -e ${BLUE}"[SSTI TOOLS]" ${RED}"tplmap installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/epinna/tplmap.git > /dev/null 2>&1 && cd tplmap && pip install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[SSTI TOOLS]" ${GREEN}"tplmap installation is done !"; echo "";
}

API_TOOLS () {
	#Kiterunner
	echo -e ${BLUE}"[API TOOLS]" ${RED}"Kiterunner installation in progress ...";
	cd /root/OK-VPS/tools/file && wget install https://github.com/assetnote/kiterunner/releases/download/v"$KITERUNNERVER"/kiterunner_"$KITERUNNERVER"_linux_amd64.tar.gz > /dev/null 2>&1 && tar xvf kiterunner_"$KITERUNNERVER"_linux_amd64.tar.gz > /dev/null 2>&1 && mv kr /usr/local/bin;
	cd /root/OK-VPS/tools && mkdir -p kiterunner-wordlists && cd kiterunner-wordlists && wget install https://wordlists-cdn.assetnote.io/data/kiterunner/routes-large.kite.tar.gz > /dev/null 2>&1 && wget install https://wordlists-cdn.assetnote.io/data/kiterunner/routes-small.kite.tar.gz > /dev/null 2>&1 && for f in *.tar.gz; do tar xf "$f"; rm -Rf "$f"; done
	echo -e ${BLUE}"[API TOOLS]" ${GREEN}"Kiterunner installation is done !"; echo "";
}


WORDLISTS () {
	#SecLists
	echo -e ${BLUE}"[WORDLISTS]" ${RED}"SecLists installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/danielmiessler/SecLists.git > /dev/null 2>&1;
	echo -e ${BLUE}"[WORDLISTS]" ${GREEN}"SecLists installation is done !"; echo "";
}

VULNS_XSS () {
	#Dalfox
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${RED}"Dalfox installation in progress ...";
	GO111MODULE=on go install -v github.com/hahwul/dalfox/v2@latest > /dev/null 2>&1 && ln -s ~/go/bin/dalfox /usr/local/bin/;
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${GREEN}"Dalfox installation is done !"; echo "";
	#XSStrike
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${RED}"XSStrike installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/s0md3v/XSStrike > /dev/null 2>&1 && cd XSStrike && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${GREEN}"XSStrike installation is done !"; echo "";
	#kxss
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${RED}"kxss installation in progress ...";
	go install github.com/tomnomnom/hacks/kxss@latest > /dev/null 2>&1 && ln -s ~/go/bin/kxss /usr/local/bin/;
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${GREEN}"kxss installation is done !"; echo "";
	#Gxss
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${RED}"Gxss installation in progress ...";
	go install github.com/KathanP19/Gxss@latest > /dev/null 2>&1 && ln -s ~/go/bin/Gxss /usr/local/bin/;
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${GREEN}"Gxss installation is done !"; echo "";
	#Findom-xss
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${RED}"findom-xss installation in progress ...";
	cd /root/OK-VPS/tools && https://github.com/dwisiswant0/findom-xss.git > /dev/null 2>&1 && cd findom-xss && chmod +x findom-xss.sh && rm -r LinkFinder && git clone https://github.com/GerbenJavado/LinkFinder.git > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY - XSS]" ${GREEN}"findom-xss installation is done !"; echo "";
}

VULNS_SQLI () {
	#SQLmap
	echo -e ${BLUE}"[VULNERABILITY - SQL Injection]" ${RED}"SQLMap installation in progress ...";
	apt-install install -y sqlmap > /dev/null 2>&1
	echo -e ${BLUE}"[VULNERABILITY - SQL Injection]" ${GREEN}"SQLMap installation is done !"; echo "";
	#NoSQLMap
	echo -e ${BLUE}"[VULNERABILITY - SQL Injection]" ${RED}"NoSQLMap installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/codingo/NoSQLMap.git > /dev/null 2>&1 && cd NoSQLMap && python setup.py install > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY - SQL Injection]" ${GREEN}"NoSQLMap installation is done !"; echo "";
}

CMS_SCANNER () {
	#WPScan
	echo -e ${BLUE}"[CMS SCANNER]" ${RED}"WPScan  installation in progress ...";
	gem install wpscan > /dev/null 2>&1;
	echo -e ${BLUE}"[CMS SCANNER]" ${GREEN}"WPScan installation is done !"; echo "";
	#Droopescan
	echo -e ${BLUE}"[CMS SCANNER]" ${RED}"Droopescan installation in progress ...";
	pip3 install droopescan > /dev/null 2>&1;
	echo -e ${BLUE}"[CMS SCANNER]" ${GREEN}"Droopescan installation is done !"; echo "";
	#AEM-Hacking
	echo -e ${BLUE}"[CMS SCANNER]" ${RED}"AEM-Hacking installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/0ang3el/aem-hacker.git > /dev/null 2>&1 && cd aem-hacker && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[CMS SCANNER]" ${GREEN}"AEM-Hacking installation is done !"; echo "";
}

VULNS_SCANNER () {
	#Nuclei + nuclei templates
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${RED}"Nuclei installation in progress ...";
	GO111MODULE=on go install -v github.com/projectdiscovery/nuclei/v2/cmd/nuclei@latest > /dev/null 2>&1 && ln -s ~/go/bin/nuclei /usr/local/bin/;
	nuclei -update-templates > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${GREEN}"Nuclei installation is done !"; echo "";
	#Jaeles
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${RED}"Jaeles installation in progress ...";
	GO111MODULE=on go install github.com/jaeles-project/jaeles  > /dev/null 2>&1 && ln -s ~/go/bin/jaeles /usr/local/bin/;
	cd /root/OK-VPS/tools && git clone https://github.com/jaeles-project/jaeles-signatures.git > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${GREEN}"Jaeles installation is done !"; echo "";
	#Nikto
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${RED}"Nikto installation in progress ...";
	apt-install install -y nikto > /dev/null 2>&1;
	echo -e ${BLUE}"[VULNERABILITY SCANNER]" ${GREEN}"Nikto installation is done !"; echo "";
}

JS_HUNTING () {
	#Linkfinder
	echo -e ${BLUE}"[JS FILES HUNTING]" ${RED}"Linkfinder installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/GerbenJavado/LinkFinder.git > /dev/null 2>&1 && cd LinkFinder && pip3 install -r requirements.txt > /dev/null 2>&1 && python3 setup.py install > /dev/null 2>&1;
	echo -e ${BLUE}"[JS FILES HUNTING]" ${GREEN}"Linkfinder installation is done !"; echo "";
	#SecretFinder
	echo -e ${BLUE}"[JS FILES HUNTING]" ${RED}"SecretFinder installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/m4ll0k/SecretFinder.git > /dev/null 2>&1 && cd SecretFinder && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[JS FILES HUNTING]" ${GREEN}"SecretFinder installation is done !"; echo "";
	#subjs
	echo -e ${BLUE}"[JS FILES HUNTING]" ${RED}"subjs installation in progress ...";
	go install -u github.com/lc/subjs@latest > /dev/null 2>&1 && ln -s ~/go/bin/subjs /usr/local/bin/;
	echo -e ${BLUE}"[JS FILES HUNTING]" ${GREEN}"subjs installation is done !"; echo "";
	#Getjs
	echo -e ${BLUE}"[JS FILES HUNTING]" ${RED}"Getjs installation in progress ...";
	go install github.com/003random/getJS@latest > /dev/null 2>&1 && ln -s ~/go/bin/subjs /usr/local/bin/;
	echo -e ${BLUE}"[JS FILES HUNTING]" ${GREEN}"Getjs installation in progress ...";
}

GIT_HUNTING() {
	#GitDorker
	echo -e ${BLUE}"[GIT HUNTING]" ${RED}"gitGraber installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/obheda12/GitDorker.git > /dev/null 2>&1 && cd GitDorker && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[GIT HUNTING]" ${GREEN}"gitGraber installation is done !"; echo "";
	#gitGraber
	echo -e ${BLUE}"[GIT HUNTING]" ${RED}"gitGraber installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/hisxo/gitGraber.git > /dev/null 2>&1 && cd gitGraber && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[GIT HUNTING]" ${GREEN}"gitGraber installation is done !"; echo "";
	#GitHacker
	echo -e ${BLUE}"[GIT HUNTING]" ${RED}"GitHacker installation in progress ...";
	pip3 install GitHacker > /dev/null 2>&1;
	echo -e ${BLUE}"[GIT HUNTING]" ${GREEN}"GitHacker installation is done !"; echo "";
	#GitTools
	echo -e ${BLUE}"[GIT HUNTING]" ${RED}"GitToolsinstallation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/internetwache/GitTools.git > /dev/null 2>&1;
	echo -e ${BLUE}"[GIT HUNTING]" ${GREEN}"GitTools installation is done !"; echo "";
}


SENSITIVE_FINDING() {
	#DumpsterDiver
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${RED}"gitGraber installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/securing/DumpsterDiver.git > /dev/null 2>&1 && cd DumpsterDiver && pip3 install -r requirements.txt > /dev/null 2>&1;
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${GREEN}"gitGraber installation is done !"; echo "";
	#EarlyBird
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${RED}"EarlyBird installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/americanexpress/earlybird.git > /dev/null 2>&1 && cd earlybird && ./build.sh > /dev/null 2>&1 && ./install.sh > /dev/null 2>&1;
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${GREEN}"EarlyBird installation is done !"; echo "";
	#Ripgrep
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${RED}"Ripgrep installation in progress ...";
	apt-install install -y ripgrep > /dev/null 2>&1
	echo -e ${BLUE}"[SENSITIVE FINDING TOOLS]" ${GREEN}"Ripgrep installation is done !" ${RESTORE}; echo "";
}

Find_Web_Technologies(){
#wappalyzer-cli
echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"wappalyzer-cli installation in progress ...";
cd /root/OK-VPS/tools && git clone https://github.com/gokulapap/wappalyzer-cli  > /dev/null 2>&1 && cd wappalyzer-cli && pip3 install . > /dev/null 2>&1;
echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"wappalyzer-cli installation in progress ...";
}

USEFUL_TOOLS () {
	#installallurls
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"installallurls installation in progress ...";
	GO111MODULE=on go install -v github.com/lc/gau@latest > /dev/null 2>&1 && ln -s ~/go/bin/gau /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"installallurls installation is done !"; echo "";
	#anti-burl
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"anti-burl installation in progress ...";
	go install github.com/tomnomnom/hacks/anti-burl@latest > /dev/null 2>&1 && ln -s ~/go/bin/anti-burl /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"anti-burl installation is done !"; echo "";
	#unfurl
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"unfurl installation in progress ...";
	go install github.com/tomnomnom/unfurl@latest > /dev/null 2>&1 && ln -s ~/go/bin/unfurl /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"unfurl installation is done !"; echo "";
	#anew
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"anew installation in progress ...";
	go install github.com/tomnomnom/anew@latest > /dev/null 2>&1 && ln -s ~/go/bin/anew /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"anew installation is done !"; echo "";
	#subzy
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"subzy installation in progress ...";
	go install -v github.com/lukasikic/subzy@latest > /dev/null 2>&1 && ln -s ~/go/bin/subzy /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"subzy installation in progress ...";
	#gron
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"gron installation in progress ...";
	go install github.com/tomnomnom/gron@latest > /dev/null 2>&1 && ln -s ~/go/bin/gron /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"gron installation is done !"; echo "";
	#qsreplace
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"qsreplace installation in progress ...";
	go install github.com/tomnomnom/qsreplace@latest > /dev/null 2>&1 && ln -s ~/go/bin/qsreplace /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"qsreplace installation is done !"; echo "";
	#Interlace
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"Interlace installation in progress ...";
	cd /root/OK-VPS/tools && git clone https://github.com/codingo/Interlace.git > /dev/null 2>&1 && cd Interlace && python3 setup.py install > /dev/null 2>&1;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"Interlace installation is done !"; echo "";
	#Jq
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"jq installation in progress ...";
	apt-install install -y jq > /dev/null 2>&1;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"jq installation is done !" ${RESTORE}; echo "";
	#cf_check
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"jq installation in progress ...";
	go install github.com/dwisiswant0/cf-check@latest > /dev/null 2>&1 && ln -s ~/go/bin/cf-check /usr/local/bin/;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"jq installation is done !" ${RESTORE}; echo "";
	#Tmux
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"Tmux installation in progress ...";
	apt-install install tmux -y > /dev/null 2>&1;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"Tmux installation is done !"; echo "";
	#Uro
	echo -e ${BLUE}"[USEFUL TOOLS]" ${RED}"Uro installation in progress ...";
	pip3 install uro > /dev/null 2>&1;
	echo -e ${BLUE}"[USEFUL TOOLS]" ${GREEN}"Uro installation is done !" ${RESTORE}; echo "";
}

ENVIRONMENT && SUBDOMAINS_ENUMERATION && DNS_RESOLVER && VISUAL_/root/OK-VPS/tools && HTTP_PROBE && WEB_CRAWLING && NETWORK_SCANNER && HTTP_PARAMETER && FUZZING_TOOLS && LFI_TOOLS && SSRF_TOOLS && SSTI_TOOLS && API_TOOLS && WORDLISTS && VULNS_XSS && VULNS_SQLI && CMS_SCANNER && VULNS_SCANNER && JS_HUNTING && GIT_HUNTING  && SENSITIVE_FINDING && USEFUL_TOOLS;
