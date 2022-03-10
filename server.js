const express = require('express')
const server = express()
const resize = require('./resize')
const port = 8080;
server.get('/', (req, res) => {
    const widthStr = req.query.width
    const heightStr = req.query.height
    const format = req.query.format
    let width, height
    if (widthStr) {
        width = parseInt(widthStr)
    }
    if (heightStr) {
        height = parseInt(heightStr)
    }
    res.type(`image/${format || 'png'}`)
    resize('images/normal/nodejs.png', format, width, height).pipe(res)
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
})
