module.exports = name => {
    return {
        name,
        full: 100,
        fill: Math.floor(Math.random() * (100 - 10) + 10)
    }
}
