# MERN Stack API - Gestion Utilisateurs et Contacts

Une API RESTful construite avec **Express**, **MongoDB** et **Node.js**, permettant de gérer des utilisateurs et leurs contacts avec authentification et opérations CRUD.

---

## 🔧 Prérequis

- Node.js v18+  
- npm ou yarn  
- MongoDB (local ou Atlas)  

---

## ⚙️ Installation

1. Cloner le dépôt :  
```bash
git clone <URL_DE_TON_REPO>
cd server

```

2. Installer les dépendances :

npm install


3. Créer un fichier .env à la racine et ajouter: 

PORT=5000
MONGO_URI=<ton_URI_mongodb>
JWT_SECRET=<ton_secret_jwt>

4. Lancer le serveur:

npm start       # production
npm run dev     # développement avec nodemon


Le serveur sera accessible sur http://localhost:8000.

---

## 🏃 Scripts utiles

Dans le dossier `server` :

- `npm start` : démarre le serveur en mode production
- `npm run dev` : démarre le serveur avec nodemon (développement)
- `npm test` : lance les tests unitaires

Dans le dossier `my-app` (front React) :

- `npm start` : lance l'application React en mode développement
- `npm run build` : build de production

---


### Endpoints principaux

| Méthode | Endpoint                  | Description                        | Authentification |
|---------|---------------------------|------------------------------------|------------------|
| POST    | /api/auth/register        | Inscription utilisateur            | Non              |
| POST    | /api/auth/login           | Connexion utilisateur (JWT)        | Non              |
| GET     | /api/users                | Liste des utilisateurs             | Oui              |
| GET     | /api/user/:id             | Détail d'un utilisateur            | Oui              |
| PATCH   | /api/update/user/:id      | Modifier un utilisateur            | Oui              |
| DELETE  | /api/delete/user/:id      | Supprimer un utilisateur           | Oui              |
| GET     | /api/contacts             | Liste des contacts                 | Oui              |
| POST    | /api/contacts             | Créer un contact                   | Oui              |
| GET     | /api/contact/:id          | Détail d'un contact                | Oui              |
| PATCH   | /api/contact/:id          | Modifier un contact                | Oui              |
| DELETE  | /api/contact/:id          | Supprimer un contact               | Oui              |

> Pour plus de détails et d'exemples de requêtes, consulte la documentation Swagger :
> http://localhost:8000/api-docs

---

## 🗂️ Structure du projet

```
my-app/         # Frontend React
server/         # Backend Express/MongoDB
	config/     # Config, swagger, cors
	controller/ # Contrôleurs
	middlewares/# Middlewares
	model/      # Modèles Mongoose
	routes/     # Routes Express
	tests/      # Tests unitaires
```

---


---

## 🧪 Identifiants de test

Pour tester rapidement l'API, tu peux utiliser l'utilisateur suivant (à créer via /api/auth/register si besoin) :

- **Email** : test@example.com
- **Mot de passe** : password123

Ces identifiants sont utilisés dans les tests automatiques et peuvent servir pour explorer l'API avec Postman ou Swagger.

---

## 🔗 Liens utiles

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://react.dev/)
- [Swagger](https://swagger.io/)

---


