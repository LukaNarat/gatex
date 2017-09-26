
#!/bin/sh

while getopts ":a:" opt; do
  case $opt in
    a)
      echo "-a was triggered, Parameter: $OPTARG" >&2
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done


cd /Users/osx/Projects/http/gatex/
git add -A 
git commit -m "automatic push"
git push origin master


ssh -t pi@192.168.1.110 << HERE
 cd /var/www/html/gatex
 sudo git pull
HERE

echo "-------- Deployed! --------"