
#!/bin/sh

cd /Users/osx/Projects/http/gatex/
git add -A 
git commit -m "automatic push"
git push origin master


ssh -t pi@192.168.1.110 << HERE
 cd /var/www/html/gatex
 sudo git pull
HERE

echo "-------- Deployed! --------"