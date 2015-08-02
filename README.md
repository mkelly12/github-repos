# ZURB Client Template

This is the template for front-end coding projects done for ZURB clients. It's based on the "juiced" Foundation libsass template, and works exactly like that one.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `sudo npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `sudo npm install -g bower`

## Getting Started

**Download the repository here.** Don't clone the project directly unless you want to make changes to how it works.

Once you've downloaded the files, you'll probably want to rename the folder to the name of your client.

Next, navigate into the directory:
```
cd client
```

Install all the dependincies (if `npm install` fails, you might need to run it as `sudo`):
```
npm install
bower install
```

While you're working on your project, run:
```
grunt
```

This will assemble all the pages and compile the Sass. You're all set to start working!

## Directory Structure

* `dist`: Static pages are assembled here. This is where you should view the site in your browser. **Don't edit these files directly. They will be overwritten!**
* `src`: This is the directory you'll work in. 
* `src/assets`: All assets (scss, images, fonts, js, etc) go here.
* `src/assets/scss/_settings.scss`: Foundation configuration settings go in here.
* `src/assets/scss/app.scss`: Application styles go here.


## Notes
Only get 100 results back at a time from repo API request. Could potentially paginate, but that would not all sorting (could potentially make multiple requests to fix this).

Omitted watchers in UI because of a bug in the GitHub API (See api_bug folder)

Some commits don't have full author or committer records. Worked around this by pulling the name from short author data if full data is not available.

## TODO
Maintain state with pushState (to allow use of back button and deep linking)
Come up with a more meaningful metric to sort the list by


## TODO Maybe
Resolve author vs. committer, do we need to show both? What do we do when the author is not present (right now we omit the avatar)? 
Different metrics to sort by
Add type ahead search
Use languange icon next to each project
List commits from all branches
Allow person to load more commits
Cache requests for commits
Figure out some way to search all orgs on Github. Clone the whole set, or scrape google results?
Add footer with support info

## TODO Done
fix bug with recent dates
Create list of tests
Add search to select the org that we will sort by
Define global settings in one place
Loading state for repos
Allow toggle of commits
Show full commit message (done with title attribute)
See why mixpanel is sending requests.... (it was Mozbar extension)