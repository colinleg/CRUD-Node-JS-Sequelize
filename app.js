import express from 'express'
import routes from './routes/routes.js'
import Db from './db/db.js'
const app = express()
app.use(express.json())
app.use(routes)

Db.sync()
    .then( () => console.log('Database OK !'))
    .catch( (e) => console.log(e))


app.listen(8000, () => console.log('Le serveur écoute sur le port 8000'))