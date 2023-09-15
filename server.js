// server.js
const express = require('express');
const bodyParser = require('body-parser');
const stringSimilarity = require('string-similarity');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/check-plagiarism', (req, res) => {
  const { textToCheck, database } = req.body;

  const similarities = stringSimilarity.findBestMatch(textToCheck, database);

  // Calculate plagiarism percentage
  const plagiarismPercentage = 100 - similarities.bestMatch.rating * 100;

  res.json({ plagiarismPercentage });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
