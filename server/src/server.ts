import express, { request, response } from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen('3333');


// const users = [
//     'test',
//     'test2',
//     'test',
//     'testt'
// ]

// app.get('/users', (request, response) => {
//     // console.log('yeet');
//     const search = String(request.query.search);

//     const fillteredUsers = search ? users.filter(users => users.includes(search)) : users;

//     return response.json(fillteredUsers);
// });

// app.get('/users/:id', (request, response) => {

//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);

// });

// app.post('/users', (request, response) => {

//     const data = request.body;

//     console.log(data);

//     const user = {
//         nome: data.name,
//         email:data.email
//     }

//     return response.json(user);
// });

