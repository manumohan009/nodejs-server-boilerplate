const express = require('express');
const http = require('http');

// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  const db = mongoose.connect('mongodb://127.0.0.1:27017/clientPanelDB', {useCreateIndex: true, useNewUrlParser: true} );
  console.log('Connected to database');
});


const Schema = mongoose.Schema;
const clientSchema = new Schema(
  {
    clientId: {
      type: String,
      unique: true
    }
  }
);
mongoose.model('Client', clientSchema);
const ClientModel = mongoose.model('Client');



app.get('/api/v1/clients/all', function(req, res) {
    ClientModel.find()
      .select('-__v -_id')
      .lean()
      .exec((err, result) => {
        if(err) {
          res.send('Failed to find client details');
        }else {
          res.send(result);
        }
      })
});

app.get('/split/name/query', (req, res) => {
  let fullName = req.query;
  fullName = fullName.fullName;
  let firstName = fullName.split(' ').slice(0, -1).join(' ');
  let lastName = fullName.split(' ').slice(-1).join(' ');
  const response = {
    firstName, lastName
  };
  res.send(response);
});

app.get('/calculate/age/query', (req, res) => {
  let dob = req.query;
  dob = dob.dob;
  let dob_arr = dob.split('-');
  let today = new Date();
  let year = Number(dob_arr[0]);
  let month = Number(dob_arr[1]);
  let day = Number(dob_arr[2]);
  let age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
  }
  const response = {
    age
  };
  res.send(response);
});

// const express = require('express');
// const app = express();
// const http = require('http');

// const server = http.createServer(app);
// app.get('*', function(req, res) {
//     res.send('Hello World!');
// });





