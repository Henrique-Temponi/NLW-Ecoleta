import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('yeet');

    response.json([
        'test',
        'test2',
        'test',
        'testt'
    ]);
});

app.listen('3333');