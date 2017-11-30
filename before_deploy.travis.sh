#!/usr/bin/env bash

# SET YOUR VARIABLES!;
MY_404_TITLE="TinyGU 404 redirect page";                                          # the title of the error page;
MY_REPOSITORY_NAME="tinyGU";                                                      # name of the repository (to set the redirect link);
GIST_ERROR_PAGE="https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git";   # the 404.html you want to use, saved as gist;

GIST_FOLDER="___GIST_FOLDER__GIST_FOLDER___";
echo "$GIST_FOLDER";

basename -s .git "$GIST_ERROR_PAGE";
echo "##################################################################################";
GIST_FOLDER=$(basename -s .git "$GIST_ERROR_PAGE");
echo "$GIST_FOLDER";
GIST_FOLDER="ac3121fbc85ecdedd59b440b551dd02a";
echo "$GIST_FOLDER";

ls -lha;
ls -lha dist/;
ls -R ../ > dist/ls1.txt;

git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git gist-folder-t; # "dist/$GIST_FOLDER";
echo "111";
ls -lha;
ls -lha dist/;
git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git;
echo "222";
ls -lha;
ls -lha dist/;
git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git "/dist/$GIST_FOLDER";
echo "333";
ls -lha;
ls -lha dist/;
git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git "dist/$GIST_FOLDER";
echo "444";
ls -lha;
ls -lha dist/;
git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git "$GIST_FOLDER";
echo "555";
ls -lha;
ls -lha dist/;

git clone --progress https://gist.github.com/ac3121fbc85ecdedd59b440b551dd02a.git ac3121fbc85ecdedd59b440b551dd02a;
ls -lha;
ls -lha dist/;
ls -R ../ > dist/ls2.txt;

mv "$GIST_FOLDER/404.html" dist/; # mv "$GIST_FOLDER"/404.html dist/;
ls -lha;
ls -lha dist/;
ls -R ../ > dist/ls3.txt;

rm -rf "$GIST_FOLDER";
ls -lha;
ls -lha dist/;
ls -R ../ > dist/ls4.txt;

sed -i -e "s/404_TITLE/$MY_404_TITLE/g; s/REPOSITORY_NAME/$MY_REPOSITORY_NAME/g" dist/404.html;
ls -lha;
ls -lha dist/;
ls -R ../ > dist/ls5.txt;
