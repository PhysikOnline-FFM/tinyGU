#!/usr/bin/env bash

repoName="https://github.com/$1"

echo "sed before script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
ls -lha

github
ribbonCode="<a href='$repoName' style='position:fixed;padding:5px 45px;width:128px;bottom:50px;left:-50px;\
-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);\
box-shadow:0 0 0 3px #182c42, 0 0 20px -3px rgba(0, 0, 0, 0.5);text-shadow:0 0 0 #ffffff, 0 0 5px rgba(0, 0, 0, 0.3);\
background-color:#182c42;color:#ffffff;font-size:13px;font-family:sans-serif;text-decoration:none;font-weight:bold;\
border:2px dotted #ffffff;-webkit-backface-visibility:hidden;letter-spacing:.5px;'>Fork me on GitHub</a>"
sed -i "/<mat-sidenav/ i $ribbonCode" src/app/app.component.html

cat src/app/app.component.html

echo "sed before script <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
