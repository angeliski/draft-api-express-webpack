import * as Promise from 'bluebird';
import * as express from 'express';
import database from './database';

const startApp = (database: any) => {

  app.get("*", (req, res)=>{
    const versao = 1;
    res.json({ versao });
  })
  
  app.listen(app.get("port"), () => {
      console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
      console.log("  Press CTRL-C to stop\n");
    });
      
}

database
.then(startApp)
.catch((error) => {
  console.log('erro', error);
});

const app = express();
app.set("port", process.env.PORT || 3000);

module.exports = app;
  