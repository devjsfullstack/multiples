import express, { Application } from 'express'
import { json, urlencoded } from 'body-parser'
import { join } from 'path'
import { createServer } from 'http'
import swig, { renderFile } from 'swig'
import { config } from 'dotenv'
import { routes } from './routes'

config()

const app: Application = express()
const port = process.env.PORT
const host = process.env.HOST
const server = createServer(app)

/**
 * @description
 * Configuración para realizar peticiones post, put, delete, etc.
*/
app.use(json({limit: '50mb'}))
app.use(urlencoded({extended: true, limit: '50mb'}))

/**
 * @description
 * Establecer motor de plantilla
*/
app.engine('html', renderFile)
app.set('view engine', 'html')
app.set('views', join(__dirname, 'views'))

app.set('view cache', false);
// Deshabilitar el caché de Swig
swig.setDefaults({ cache: false });

/**
 * @description
 * Cargar archivos estáticos
*/
app.use(express.static(join(__dirname, 'public')))

/**
 * @description
 * Agregar rutas
*/
app.use(routes)

/**
 * @description
 * Redirecciona automaticamente, cuando se abre la liga en el navergador
*/
app.use('*', function(req, res) {
    res.redirect(`http://${host}:${port}/multiples`)
})

server.listen(port).on('error', (err: any) => { throw new Error(err) })
server.on('listening', () => console.log(`Server started at: http://${host}:${port}`));