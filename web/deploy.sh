
#!/bin/sh

SSH=pi@192.168.1.110

while getopts ":r" opt; do
  case $opt in
    a)
      echo "------ Remote work push! -------" >&2
      SSH="luma.madhacker.biz -p 1337"
      echo "$ALPHA"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done


cd /Users/osx/Projects/http/gatex/
git add -A 
git commit -m "automatic push"
git push origin master


ssh -t $SSH << HERE
 cd /var/www/html/gatex
 sudo git pull
HERE

echo "-------- Deployed! --------"