#!/bin/bash
fuser -k 3000/tcp
fuser -k 5000/tcp

sudo service redis_6379 start
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
ng build --watch &
cd ../executor
if [ -d "tmp" ]; then
sudo rm -rf tmp 
fi
mkdir tmp
sudo pip install -r requirements.txt
sudo python executor_server.py &

echo "=================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp
sudo service redis_6379 stop
