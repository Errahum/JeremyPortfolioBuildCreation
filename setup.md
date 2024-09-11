# Apprendre React et configurer

Documentation: https://react.dev/
Télécharger node.js: https://nodejs.org/fr

### Créer un projet React
Ouvre un terminal dans VSCode ou ton terminal de préférence.
Utilise create-react-app pour générer un projet React.
```sh
npx create-react-app mon-portfolio
```

Cela va créer une nouvelle application React dans un dossier nommé mon-portfolio.

Structure:
```sh
mon-portfolio/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── package.json
└── ...

```

public/ : Contient les fichiers publics (le HTML principal et d'autres ressources statiques).

src/ : Contient le code source React, c'est ici que tu développes.

App.js : Le composant principal de ton application.

index.js : Le point d'entrée du projet.


### Tester l'application localement
**`npm start`**

http://localhost:3000


### Configurer le déploiement sur GitHub Pages

#### Modifier le fichier package.json :
Ajoute le champ homepage pour pointer vers ton dépôt GitHub Pages.
Modifie les scripts pour déployer l'application.

package.json :

```
{
  "name": "mon-portfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://ton-nom-utilisateur.github.io/nom-du-depot",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ...
  }
}

```
Remplace "https://ton-nom-utilisateur.github.io/nom-du-depot" par l'URL de ton futur site GitHub Pages.
Le script "predeploy" construit le projet, et "deploy" l’envoie sur GitHub Pages.

#### Initialiser un dépôt Git et ajouter ton projet : Si tu n'as pas encore initialisé de dépôt, fais-le :
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ton-nom-utilisateur/nom-du-depot.git
```

#### Déployer sur GitHub Pages : Exécute la commande suivante pour construire et déployer ton projet:
```
npm run deploy
```

Cela va créer une branche gh-pages et déployer ton portfolio sur GitHub Pages.


#### Continuer le développement
Chaque fois que tu souhaites mettre à jour ton portfolio, fais des modifications, puis redeploie simplement en exécutant :

```
npm run deploy
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
