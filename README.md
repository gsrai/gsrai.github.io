# gsrai.github.io #

My Personal Website

## development ##

`source` is the dev branch, master is only used for deployment
as github pages serves the `master` branch.

### todo ###

- add tests :)

***

### Requirements ###

- node.js v9.11 or higher

### Usage ###

#### Development ####

Step 1: Install dependencies:

```npm i```

Step 2: Run development server

```npm run dev```

Step 3: Open the browser @ http://localhost:8080

#### Production ####

Because I am using github pages to host the app, deployment to production is slightly awkward and different.
There is a Deploy script that will build the app, it will then checkout master and override the contents
with the contents of `dist` and commit + push.

Step 1: Install dependencies

```npm i```

Step 2: Build and Deploy

```./deploy.sh```

#### Testing, Linting and Git ####

Run the tests with the command ```npm run test```.
Run the linter with the command ```npm run lint```
Watch the tests with the command ```npm run test:watch```

There is a precommit hook to git which will run the linter and the unit tests.

***