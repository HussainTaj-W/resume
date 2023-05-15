[![Tests](https://github.com/HussainTaj-W/resume/actions/workflows/tests.yml/badge.svg)](https://github.com/HussainTaj-W/resume/actions/workflows/tests.yml) [![Build and Deploy](https://github.com/HussainTaj-W/resume/actions/workflows/build_and_deploy_to_pages.yml/badge.svg)](https://github.com/HussainTaj-W/resume/actions/workflows/build_and_deploy_to_pages.yml)

# Resume

A resume / portfolio / cv made in React.

## Demo

- [Demo](https://hussaintaj-w.github.io/resume/) shows a default build of this repo.
- [hussain.taj.contact](https://hussain.taj.contact) is my customized version.

## Getting Started

### Adding your information

1. Go to [./src/data](./src/data) and populate the YMLs with your information.
2. You can add your images or files under [./src/assets/](./src/assets/). To use them in data YMLs, you can use the following format `/assets/your-file.ext`.
3. Use [formspree.io](formspree.io/) to create an id for your contact form.
4. Update [./index.html](./index.html) and fill in your metadata.

### Running locally

Clone this repo and run the following commands to start the dev server.

```bash
npm install
npm run dev
```

### Building

You can create a production build by running the following command.

```bash
npm run build
```

### Deploy to GitHub Pages

This repo comes with a workflow to make it easy to make changes and deploy them to GitHub pages. To set it up, follow these steps:

1. Fork this repo.
2. In the forked repo's settings, enable Pages and set source to `GitHub Actions`.
3. Add a repository secret `GH_PAT` this will be your GitHub PAT (Personal Access Token). You will need at least Pages write access permission on this token.
4. You can trigger the "Build and Deploy" workflow from Actions tab to deploy the resume to pages. Any subsequent changes on `main` will trigger this workflow.

### Changing Styles

You can find the two primary colors under [./src/styles/\_colors.scss](./src/styles/_colors.scss). We don't have much else yet.

# Contributing

There are no formal guidelines for contributing. Feel free to open issues, discussions, PRs etc.
