const express = require('express');
const cors = require('cors');
const sequelize = require('./utile.js');   // Connexion Sequelize
const User = require('./fonction.js/form.js'); // Ton modèle User

const app = express();

// Middleware CORS pour autoriser le frontend Vite
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware pour lire JSON
app.use(express.json());

// Synchronisation Sequelize → CRÉE la table Users dans MySQL Docker
sequelize.sync({ alter: true })
  .then(() => console.log("📦 Tables synchronisées avec MySQL Docker"))
  .catch(err => console.error("❌ Erreur sync:", err));

// Route POST
app.post('/api/v1/submit', async (req, res) => {
  try {
    const form = await User.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// Route GET
app.get('/', (req, res) => res.send('Hello World!'));

// Lancement du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});