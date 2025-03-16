# Core Package for Micro Frontend

This project is a **Shared Core package** designed to solve the problem of sharing common components, hooks, icons, and utilities between microfrontend projects in different repositories. After considering several options, using **GitHub Packages** turned out to be the best solution, offering faster development cycles and simplified dependency management. (Although **Monorepo** is also a great option for projects within a single repository, it introduces deployment challenges.)

## Features
- **Rollup** for bundling and optimization.
- **Storybook** for component documentation and testing.
- **SVGR** for managing and utilizing SVG icons.
- **CI/CD** with **GitHub Actions** for automated builds and releases.
- **Multi-language support** using **i18n** and **i18n-next**.
- **GitHub Packages** for easy installation and use in different projects.

## CI/CD Workflow
Every time a change is merged into the master branch, the CI/CD pipeline is triggered, and the build and release process is automatically executed via **GitHub Actions**.

## Why GitHub Packages instead of a Monorepo?
- **Independence for projects:** Each project has its own version and is not dependent on changes in other projects.
- **Faster development process:** No need to sync the entire monorepo—only the core package is updated.
- **Simplified CI/CD process:** Only the core package is released, not the entire repository.
- **Easy integration:** The package can be installed effortlessly into different projects without extra configuration.

## How to Use

### Step 1: Configure GitHub Secrets
In the `publish.yml` file, there are environment variables that are essential for using GitHub Actions. You only need to define a secret called `GT_TOKEN` in your GitHub secrets (you can change the token name in `publish.yml` if necessary).

To set up the secrets, follow this guide: [GitHub Secrets Setup](https://lnkd.in/dX4Q7Axr).

### Step 2: Transfer Shared Components
Move your shared components, icons, helpers, or any other shared modules into the **core** package.

### Step 3: Push Changes
Once you've made your changes, push them to the master branch. This will trigger the CI/CD pipeline, and the build and release process will be automatically started by GitHub Actions. (The action starts when changes are made to the master branch, but you can change this in the `publish.yml` file if needed.)

### Step 4: Configure `npmrc` for Installation
To use this package in other projects, you need to add a `.npmrc` file in the root of your project. This file should include your GitHub token to access GitHub Packages.

You can use this guide for setting up `npmrc`: [GitHub Packages Setup](https://lnkd.in/dMiRjUPj).

### Package Naming Convention
Your package will always follow this format: @PACKAGE_NAME/{GITHUB_USERNAME}


### Step 5: Install the Package
After configuring `npmrc`, you can install the package in your project by running:

```bash
npm install @sadegh1379/es-core


