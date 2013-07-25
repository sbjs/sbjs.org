sbjs.org
========

The Santa Barbara JavaScript website

GIT Set up:
--------------

1. Fork this repository. (use the fork button)
2. `git clone https://github.com/your-account/sbjs.org.git` clone the fork repository locally. 
3. `cd sbjs.org` cd into the newly created project.
4. `git remote add upstream https://github.com/sbjs/sbjs.org.git` 
5. `git remote set-url --push upstream no-pushing`

Step 4 allows us to pull the latest code from the main sbjs repo when it gets updated.
Step 5 prevents us from accidently pushing to upstream. You never want to do this, rather you
should use a pull request to make changes.

Since we gave it the alias 'upstream', we can `git pull upstream master` to get the latest code.
DO NOT PUSH TO https://github.com/sbjs/sbjs.org.git - use a pull request.



Building Project dependencies
-----------------------------

1. `npm install` # adds local npm packages
3. `bower update` # updates all bower packages

Voilà!
------
You should now be able to run `grunt server`
