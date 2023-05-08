const express = require('express');

const app = express();
const appAdmin = express();

const port = 5050;
const admin_port = 8080;

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/me', function(req, res) {
  res.send("I am a copilot service");
});
app.listen(port, () => {
  console.log(`Now listening on port ${port} for main app`);
});

appAdmin.get('/admin', function(req, res) {
  res.send('request to admin app');
});

appAdmin.get('/admin/me', function(req, res) {
 res.send("I am a copilot admin app");
});

appAdmin.listen(admin_port, () => {
  console.log(`Now listening on port ${admin_port} for main app`);
});
