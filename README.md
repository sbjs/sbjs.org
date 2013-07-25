sbjs.org
========

The Santa Barbara JavaScript website

GIT Set up:
--------------

1. Fork this repository. (use the fork button)
2. `git clone https://github.com/your-account/sbjs.org.git` clone the fork repository locally. 
3. `cd sbjs.org` cd into the newly created project.
4. `git remote add upstream https://github.com/sbjs/sbjs.org.git` 

Step 4 allows us to pull the latest code from the main sbjs repo when it gets updated.
Since we gave it the alias 'upstream', we can `git pull upstream master` to get the latest code.

Building Project dependencies
-----------------------------

1. `npm install -g grunt` 
2. `bower update`

Voilà!
------
You should now be able to run `grunt server`
