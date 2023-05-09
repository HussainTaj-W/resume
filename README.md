[![Tests](https://github.com/HussainTaj-W/resume/actions/workflows/tests.yml/badge.svg)](https://github.com/HussainTaj-W/resume/actions/workflows/tests.yml) [![Build and Deploy](https://github.com/HussainTaj-W/resume/actions/workflows/build_and_deploy_to_pages.yml/badge.svg)](https://github.com/HussainTaj-W/resume/actions/workflows/build_and_deploy_to_pages.yml)

# Resume

## [Demo](https://hussaintaj-w.github.io/resume-deploy/)

A resume / portfolio / cv made in React.

## Getting Started

### Add your information

Go to [./src/data](./src/data) and populate the JSONs with your information.

> Use [formspree.io](formspree.io/) to create an id for your contact form.

### Run locally

Clone this repo and run the following commands to start the dev server.

```bash
npm install
npm run dev
```

### Build

You can create a production build by running the following command.

```bash
npm run build
```

### Deploy to GitHub Pages

This repo comes with a workflow to make it easy to make changes and deploy them to GitHub pages. To set it up, follow these steps:

1. Fork this repo.
2. Create a repo in your account. You can call it anything, let's call it `your-name/your-build-repo` for this example.
3. Open `your-name/your-build-repo`'s Settings and enable Pages on the `main` branch.
   - Create a deploy key with write enabled. Add your repo url to the comment of the key e.g. `ssh-keygen -t ed25519 -C "https://github.com/your-name/your-build-repo"`.
4. Open your fork of this repo and add the following two secrets:
   - `DEPLOY_REPO`: `your-name/your-build-repo`
   - `DEPLOY_REPO_TOKEN`: `the private key from step 3`
5. Trigger the workflow `Build and Deploy` and your website will be build and deployed to the build repo. You can trigger it by making a small update, I'm not sure if there is another option.

### Changing Styles

You can find the two primary colors under [./src/styles/\_colors.scss](./src/styles/_colors.scss). We don't have much else yet.

# Contributing

There are no formal guidelines for contributing. Feel free to open issues, discussions, PRs etc.
