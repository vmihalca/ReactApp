exports = module.exports = () => {
    return {
        http: {
            port: 3001 | process.env.port,
            host: '127.0.0.1'
        },
        db: {
            user: 'postgres',
            host: '127.0.0.1',
            database: 'achiveDB',
            password: 'admin',
            port: 5432,
        }
    }
}