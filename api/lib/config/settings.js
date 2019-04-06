exports = module.exports = () => {
    return {
        http: {
            port: 3001 | process.env.port,
            host: '127.0.0.1' 
        }
    }
}