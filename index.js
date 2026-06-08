import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).send('Missing "name" query parameter');
  res.send(`Hello-${name}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
