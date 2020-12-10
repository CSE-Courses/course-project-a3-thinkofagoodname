# OpenBeats

Openbeats is a project that is dedicated to giving users an online interface to collaborate with other musicians and artists to create and edit music. 

.github
========
contains a list of codeowners for documentation purposes.


selenium_Tests
========
Tests that could be run to autonomously test features from the main website


groupsite
========
The folder that holds the Django project


groupsite -> general
-------
Holds all the normal website information for website content.

groupsite -> general -> templates -> general
-------
Contains all the html pages for normally accessable content via webpage.

*Sharing* - Webpage for adding a collaborator for a piece of music

*Download* - Webpage for downloading of songs in wav or mp3 formats

*Editor* - Webpage for recording and editing of music pieces

*Home* - Landing page for users upon entering the site

*musicProject_form* - The parent of all other webpages to inherit basic elements necessary for navigation of the website and for consistant style

*project.html* - Page that contains the changelog amongs other project specific information

*shared.html* - Page detailing songs shared with you, who shared them, when they were shared, and when they were last modified

groupsite -> groupsite
-------
Information about various django settings and initializations at time of project creation, or as a baseline for webpages.

groupsite -> media
-------
Holds all default images and music

groupsite -> users
-------
The side of the website that handles users. This includes conecting each page to each other, and the creation and migrations of data concerning the user.

groupsite -> users -> templates -> users 
-------
This is where all the html pages are found

*login* - login page

*logout* - logout page

*register* - page to register account

*profile* - page to look at profile details

db.sqlite3
-------
File for the sqlite database


manage.py
--------

File for running the main django project with administrative controls
