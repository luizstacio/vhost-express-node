vhost-express-node
=================


Simple rounting for applications with express.


###Installing
```
  git clone git@github.com:luizstacio/tgit.git
  npm install
```


###Configure
Edit the `config.json`


###Template
The template is a simple request regex, you can read about this on api doc `express.vhost`.
```
  [
    { "host": "<RegExpString>", "app": "<Path>"  }
  ]
```


###Configured
In this case the host will redirect all requests that starts with `api.` for the application in `../api/app.js`.
```
  [
    { "host": "api.*", "app": "../api/app.js"  },
    { "host": "*.com.br", "app": "../www/app.js"  }
  ]
```


###Using
Start server.js and redirect all request for this server.
```
  node index.js
```