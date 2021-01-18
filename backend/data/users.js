import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'Admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Aidan E.',
        email: 'aidan@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Bella Roo',
        email: 'bella@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;