# gsrai.github.io #

My Personal Website

## development ##

`source` is the dev branch, master is only used for deployment
as github pages uses the `master` branch as source.

### todo ###

- remove resources and just have public or dist
- update react and other deps using new boilerplate
- use paper css and update about and footer
- postcss?
- build blog and use dist/assets/posts to store md blog posts

***

### Requirements ###

- node.js v9.11 or higher

***

### Usage ###

#### Development ####

Step 1: Install dependencies:

```npm i```

Step 2: Run development server

```npm run dev```

Step 3: Open the browser @ http://localhost:8080

#### Production ####

Because I am using github pages to host the app, deployment to production is slightly awkward and different.
There is a Deploy script that will build the app and copy it to a hidden folder (`.build`). It will then checkout
master and override the contents with the contents of `.build` and commit + push.

Step 1: Install dependencies

```npm i```

Step 2: Build and Deploy

```./deply.sh```

#### Testing, Linting and Git ####

Run the tests with the command ```npm run test```.
Run the linter with the command ```npm run lint```
Watch the tests with the command ```npm run test:watch```

There is a precommit hook to git which will run the linter and the unit tests.

***