// importing express library
const express = require("express");
// logger to be seen in the console
// the porpouse is to see our requests
const logger = require("morgan");

// we inject in the order of our import
// see last comment on line: exports['@require'] = ['lib/settings',]
exports = module.exports = (settings, handler, loginHandler, auth) => {
  // i've imported the settings for port and host
  const PORT = settings.http.port;
  const HOST = settings.http.host;

  // we make an instance of express so we can acces its methods
  let app = express();

  // this is the logger for each of your requests
  // you can change from 'combined' to 'tiny'
  app.use(logger("combined"));
  // this is where any data in json format is parsed or stringified
  app.use(express.json());
  // translated the URL with deep search
  // ex: http://localhost:3001/get/1/files
  // if false deep search is deactivated
  app.use(express.urlencoded({ extended: true }));

  // see C.O.R.S
  app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, email');
		next();
	});


  // C.R.U.D. (create, read, update, delete)
  // here are the endpoints for resourses
  // call them to either get,post,update or delete a resourse
  app.post('/login',loginHandler.login);
  app.post("/admin/add",auth.verify, handler.addData);
  app.get("/admin/get",auth.verify, handler.getData);
  app.put("/admin/update/:id",auth.verify, handler.updateData);
  app.delete("/admin/delete/:id",auth.verify, handler.removeData);

  // here we have the only functions that we can directly access in this module
  // a module needs to return something in order to be accessed
  return {
    start() {
      app.listen(PORT, console.log(`Server is up on http://${HOST}:${PORT}`));
    }
  };
};

// CONFIG MODULE
// we tell that this is a singleton module
exports["@singleton"] = true;
// we handle asyncronicity
exports["@async"] = false;
// imports all that we need in this module
exports["@require"] = ["lib/settings", "handler/dataHandler", 'handler/loginHandler','lib/authentication'];
