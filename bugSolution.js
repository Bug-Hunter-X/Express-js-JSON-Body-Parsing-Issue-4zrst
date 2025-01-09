const express = require('express');
const app = express();
// Middleware must be placed BEFORE route handlers
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body); // Now req.body will contain the parsed JSON
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));