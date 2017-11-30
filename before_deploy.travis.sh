#!/usr/bin/env bash

# SET YOUR VARIABLES!;
MY_404_TITLE="TinyGU 404 redirect page";                                          # the title of the error page;
MY_REPOSITORY_NAME="tinyGU";                                                      # name of the repository (to set the redirect link);
GIST_ERROR_PAGE="https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git";   # the 404.html you want to use, saved as gist;

GIST_FOLDER=$(basename -s .git "$GIST_ERROR_PAGE");
echo "$GIST_FOLDER";

ls -lha;
ls -lha dist/;
#ls -R ../ > dist/ls1.txt;

git clone --progress "$GIST_ERROR_PAGE" "$GIST_FOLDER";
echo "git clone >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>";
ls -lha;
ls -lha dist/;

mv "$GIST_FOLDER/404.html" dist/;
echo "mv >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>";
ls -lha;
ls -lha dist/;
#ls -R ../ > dist/ls3.txt;

rm -rf "$GIST_FOLDER";
echo "rf >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>";
ls -lha;
ls -lha dist/;
#ls -R ../ > dist/ls4.txt;

cat -n "$GIST_FOLDER/404.html";

sed -i -e "s/404_TITLE/$MY_404_TITLE/g; s/REPOSITORY_NAME/$MY_REPOSITORY_NAME/g" dist/404.html;
echo "sed >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>";
ls -lha;
ls -lha dist/;
#ls -R ../ > dist/ls5.txt;

cat -n "$GIST_FOLDER/404.html";
