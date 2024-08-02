require('dotenv').config();

const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
  console.log("DB connected");
}

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Client = mongoose.model('Client', clientSchema);

server.use(cors());
server.use(bodyParser.json());

server.post('/', async (req, res) => {
  let client = new Client();
  client.name = req.body.name;
  client.email = req.body.email;
  client.message = req.body.message;
  const doc = await client.save();

  console.log(doc);
  res.json(doc);
});
 
server.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
