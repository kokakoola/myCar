#!/bin/bash
python toyota_kujundus.py
compare -compose src references/Firefoxindex.png screenshots/Firefoxindex.png Firefoxindex-diff.png
compare -compose src ./screenshots/Firefoxloginregister.png ./screenshots/Firefoxloginregister.png Firefoxloginregister.png



compare -compose src file:///Volumes/Data/Documents/Work/NG/myToyota/Build/rasmuse-test/references/Firefoxindex.png file:///Volumes/Data/Documents/Work/NG/myToyota/Build/rasmuse-test/references/Firefoxindex.png Firefoxindex.png