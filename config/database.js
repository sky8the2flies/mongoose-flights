const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
	
// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function() {
    console.log(`Connected to mongodb on ${db.host}:${db.port}`);
});