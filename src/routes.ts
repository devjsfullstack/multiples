import { Router } from 'express'
import { index, calculate } from './modules/index'

const routes = Router()

routes.get('/multiples', index)
routes.post('/calculate', calculate)

export { routes }