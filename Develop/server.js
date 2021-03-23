const express = require('express');
const routes = require('./routes');
const models = require('./models')
const connection = require('./config/connection')
// import.sequelize(connection)


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  connection.sync({
    force: false,
    // DUMP my previous data on MYSQL
  })
  console.log(`App listening on port ${PORT}!`);
});




