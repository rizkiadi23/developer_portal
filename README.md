### SIMPLE DEVELOPER PORTAL APPS - MERN STACKS

- a simple portal created on top of MERN stacks technology.

### Pre-Installation

1. Setup your environment by setting the configuration in `default.json` file:
```javascript
{
  "mongoURI": "your_mongodb_connection_string",
  "jwtSecret": "create_secret_key_whatever_you_want",
  "githubClientId": "put_your_client_id_from_github",
  "githubSecret": "put_your_github_secret_from_github"
}
```

### Installation

- Clone this repository
- Run `npm install`
- Run `npm run server` to start the server in development mode

### Development Flow
- Backend: to add new api put the main logic in `routes/api` folder
- Frontend: to add new functionality you can add a component, create action & reducer (if needed)