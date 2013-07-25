sbjs.org
========

The Santa Barbara JavaScript website

GIT Set up:
--------------

1. Fork this repository. (use the fork button)
2. `git clone https://github.com/USERNAME/sbjs.org.git` clone the fork repository locally.
3. `cd sbjs.org` cd into the newly created project.
4. `git remote add upstream https://github.com/sbjs/sbjs.org.git` 
5. `git remote set-url --push upstream no-pushing`

Step 4 allows us to pull the latest code from the main sbjs repo when it gets updated.
Step 5 prevents us from accidently pushing to upstream. You never want to do this, rather you
should use a pull request to make changes.

Since we gave it the alias 'upstream', we can `git pull upstream master` to get the latest code.
DO NOT PUSH to https://github.com/sbjs/sbjs.org.git - use a pull request.

Issuing a `git remove -v` you should see:
origin  https://github.com/USERNAME/sbjs.org (fetch)
origin  https://github.com/USERNAME/sbjs.org (push)
upstream        https://github.com/sbjs/sbjs.org.git (fetch)
upstream        no-pushing (push)

One thing you will notice is that when you push, you are required to use unpw auth. If you want to use ssh for auth,
reset your origin like this:
`git remote set-url origin git@github.com:joshball/sbjs.org.git`
Now, issuing a `git remove -v` you should see:

origin  git@github.com:USERNAME/sbjs.org.git (fetch)
origin  git@github.com:USERNAME/sbjs.org.git (push)
upstream        https://github.com/sbjs/sbjs.org.git (fetch)
upstream        no-pushing (push)

Building Project dependencies
-----------------------------

1. `npm install` # adds local npm packages
3. `bower update` # updates all bower packages

Voilà!
------
You should now be able to run `grunt server`
