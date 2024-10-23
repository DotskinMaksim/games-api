const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use(cors());
app.use(express.json());

const games = [
    { id: 1, name: "Witcher 3", price: 29.99 },
    { id: 2, name: "Cyberpunk 2077", price: 59.99 },
    { id: 3, name: "Minecraft", price: 26.99 },
    { id: 4, name: "Roblox", price: 0 },
    { id: 5, name: "Grand Theft Auto V", price: 29.99 },
    { id: 6, name: "Valorant", price: 0 },
    { id: 7, name: "Counter-Strike: Global Offensive", price: 0 },
    { id: 8, name: "Forza Horizon 5", price: 59.99 },
];


app.get('/games', (req, res) => {
    res.send(games);
});


app.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) {
        return res.status(404).send({ error: 'Game not found' });
    }
    res.send(game);
});

// Создание новой игры
app.post('/games', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send({ error: 'One or all params are missing' });
    }

    const newGame = {
        id: games.length + 1,
        name,
        price
    };
    games.push(newGame);

    res.status(201)
        .location(`${getBaseUrl(req)}/games/${newGame.id}`)
        .send(newGame);
});

app.delete('/games/:id', (req, res) => {
    const gameId = req.params.id;

    if (!gameId) {
        return res.status(400).send({ error: 'Game ID is not provided' });
    }

    if (typeof games[gameId - 1] === 'undefined') {
        return res.status(404).send({ error: 'Game not Found'});
    }

    games.splice(gameId - 1, 1);
    res.status(204).send();
});


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log(`API app is running at: http://localhost:${port}`);
});


function getBaseUrl(req) {
    return req.connection && req.connection.encrypted
        ? 'https' : 'http' + `://${req.headers.host}`;
}
