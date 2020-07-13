# ALICE Site built with Gatsby

ALICE combines a first-of-its-kind construction planning platform with a powerful AI engine to help you digitize your way to build and save big on your project.

## Installing / Getting started

## Developing


### Built With
 - React
 - Styled-Components
 - gatsby-universal (boilerplate)

### Prerequisites
Make sure you have the [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/pt-BR/docs/install) installed on your machine.
You will need commit signature verification. Every commit must have your signature, otherwise you will not be able to contribute. Use homebrew to install gnupg ```brew install gnupg``` You can then use the following guide to set up signature verification: https://help.github.com/en/github/authenticating-to-github/about-commit-signature-verification Because of the recent Mac OS updates, you might have authentication issues. In that case, use the following set of instructions in your terminal to modify you bash profile. 
```
test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile 
echo 'export GPG_TTY=$(tty)' >> ~/.profile
```
### Setting up Dev

Clone the repository, and install it's dependencies

```
git clone https://github.com/alicetechnologies/alicetechnologies.com.git
cd alicetechnologies.com
sudo npm i -g gatsby-cli
brew install yarn
yarn install
```

### Runing Locally

```
yarn develop
```

### Building
Build in `dev` environment. Make sure to build the project in another terminal window.
```
yarn run build
```
Open your local project in http://localhost:8000/.

### Deploying / Publishing
Push your code updates to a feature branch, and merge it into `master` branch. Netlify will automatically pick up new changes to master and it will auto-publish the new deploy. Before merging, make sure that you check that the commit has been properly built by Netlify. 

## Tests

```
yarn test
```
