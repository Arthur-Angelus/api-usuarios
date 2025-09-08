//simulação de um banco de dados em memoria
let users = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com' },
    { id: 3, name: 'Roberto', email: 'roberto@gmail.com' }
];

//função para buscar todos os usuarios
const findAll = () => {
    return users
};

//função para buscar um usuario por ID
const findById = (id) => {
    return users.find(user => user.id === id);
};

//função para adicionar um novo usuario
const create = (newUser) => {
    const newId = user.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithId = { id: newId, ...newUser };
    users.push(userWithId);
    return userWithId;
};

module.exports = {
    findAll,
    findById,
    create
};