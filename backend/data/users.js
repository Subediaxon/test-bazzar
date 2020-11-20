const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        isAdmin: true,
        password: bcrypt.hashSync('sample'),
    },
    {
        name: 'bishal',
        email: 'bishal@example.com',
        password: bcrypt.hashSync('sample'),
    },
    {
        name: 'sita',
        email: 'sita@example.com',
        password: bcrypt.hashSync('sample'),
    },
];

module.exports = users;
