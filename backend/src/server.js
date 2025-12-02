import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const restaurants = [
  {
    id: 1,
    name: 'Dunapart Bistro',
    cuisine: 'Hungarian',
    city: 'Budapest',
    address: 'Fő utca 1.',
    phone: '+36 1 555 0001',
    seats: 42,
  },
  {
    id: 2,
    name: 'Mediterraneo',
    cuisine: 'Italian',
    city: 'Szeged',
    address: 'Tisza-part 3.',
    phone: '+36 62 555 0002',
    seats: 60,
  },
];

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/restaurants', (_req, res) => {
  res.json({ data: restaurants });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Unexpected error' });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
