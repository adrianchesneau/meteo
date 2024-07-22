
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://chesneau:id4n23KDikz4ndK08N@cluster0.rkbhrci.mongodb.net/weather';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));