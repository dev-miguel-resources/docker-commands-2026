const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Backend funcionando...')
})

app.get('/health', (req, res) => {
    res.json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')  
})