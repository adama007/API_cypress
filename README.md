# API_cypress

Un projet de test d'API avec Cypress JS.

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Tests d'API](#tests-dapi)
- [Fichiers de Test](#fichiers-de-test)
- [Contributions](#contributions)
- [Licence](#licence)

## Prérequis

Assurez-vous d'avoir les éléments suivants installés avant de commencer :

- Node.js (version recommandée)
- Cypress (version supérieure à 10)
- Navigateur Chrome ou Electron

## Installation

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/adama007/API_cypress.git
    ```

2. **Allez dans le répertoire du projet :**

    ```bash
    cd API_cypress
    ```

3. **Installez les dépendances Cypress :**

    ```bash
    npm install
    ```

## Configuration

La configuration de Cypress se trouve dans le fichier `cypress.json`. Assurez-vous de configurer les paramètres appropriés, tels que la version de Cypress, le navigateur à utiliser, etc.

Exemple de fichier `cypress.json` :

```json
{
  "baseUrl": "https://api.example.com",
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 5000,
  "viewportWidth": 1280,
  "viewportHeight": 720
}

## Tests d'API

Pour exécuter les tests d'API, utilisez la commande suivante :
npm run test:api

*
## Fichiers de Test
Le projet inclut les fichiers de test d'API suivants :

** BasicAuth.cy.js
** HeadersAndCookies.cy.js
** HttpRequests.cy.js
** JsonSchemaValid.cy.js
** ParsingJsonResponse.cy.js
** PostCalls.cy.js
** queryParams.cy.js
** Chaque fichier de test peut être exécuté individuellement ou collectivement en fonction de vos besoins.

Contributions
Toute contribution est la bienvenue ! Si vous souhaitez contribuer, suivez ces étapes :

Fork du projet
Créez une nouvelle branche (git checkout -b feature/nouvelle-fonctionnalité)
Committez vos changements (git commit -am 'Ajout d'une nouvelle fonctionnalité')
Pushez la branche (git push origin feature/nouvelle-fonctionnalité)
Créez une Pull Request
