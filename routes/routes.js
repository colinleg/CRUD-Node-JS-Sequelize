import { Router } from 'express'
import { getAll, getOne, createOne, updateOne, deleteOne } from '../actions/cardsAction.js'

const routes = Router()

routes.get('/getAllCards', getAll )
routes.get('/getOneCard/:id', getOne )
routes.post('/createOne', createOne )
routes.put('/updateCard/:id', updateOne )
routes.delete('/deleteCard/:id', deleteOne )

export default routes