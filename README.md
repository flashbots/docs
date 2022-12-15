# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

First create a copy of the environment file `.env.template` in the root of the codebase and rename it to `.env`

Then run the following:

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server (and may open up a browser window). Some changes are reflected live without having to restart the server.

You can open the local docs at http://localhost:3000/docs



## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment


Create a PR and once merged, Github actions automatically deploy it.

The docs use GitHub pages for hosting, and deployment is done by building the website and pushing to the `gh-pages` branch.

Note: below is an artifact, should probably not be done this way:

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

