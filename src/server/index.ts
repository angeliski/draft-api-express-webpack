import * as express from 'express'


const startApp = (routes: any) => {
  const app = express()
  app.set('port', process.env.PORT || 3000)

  app.use(routes)

  app.listen(app.get('port'), () => {
    const port = app.get('port')

    console.log(
      ('App is running at http://localhost:%d in %s mode'),
      app.get('port'),
      app.get('env')
    )
    console.log('  Press CTRL-C to stop\n')
  })

}

export default startApp
