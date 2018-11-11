# gsrai.github.io #

My Personal Website

## development ##

`source` is the dev branch, master is only used for deployment
as github pages uses the `master` branch as source.

### todo ###

- remove resources and just have public or dist
- update react and other deps using new boilerplate
- use paper css and update about and footer
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

Step 1: Install dependencies and Build

```npm i && npm run build```

Step 2.a: Start the app

```npm run start```

#### Testing, Linting and Git ####

Run the tests with the command ```npm run test```.
Run the linter with the command ```npm run lint```
Watch the tests with the command ```npm run test:watch```

There is a precommit hook to git which will run the linter and the unit tests.

***