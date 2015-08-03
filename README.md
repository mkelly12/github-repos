# Github Repos
A simple interactive UI to display a list of an arbitrary organization's Github projects ranked by star gazers.

## Demo
A running demo can be viewed here:
[http://mkelly12.github.io/github-repos](http://mkelly12.github.io/github-repos/)

## Know issues
You only 100 results back at a time from repo API request. Could potentially make multiple requests to fix this but right now it does not work correctly for organization with more then 100 repos.

Omitted watchers count in UI because of a bug in the GitHub API (See api_bug folder)

Some commits don't have full author or committer records in the object returned by the Github API. Worked around this by pulling the name from short author data if full data is not available.

## TODO
Maintain state with pushState (to allow use of back button and deep linking)
Visually show difference between public and private repos


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
Allow entry of a custom GitHub API key
fix bug with recent dates
Create list of tests
Add search to select the org that we will sort by
Define global settings in one place
Loading state for repos
Allow toggle of commits
Show full commit message (done with title attribute)
See why mixpanel is sending requests.... (it was Mozbar extension)


# Building from source

This app uses bower to compile the Sass, partials and JavaScript into the running code. Here is what you'll need to do if you want to build the project from source.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `sudo npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `sudo npm install -g bower`

## Getting Started

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