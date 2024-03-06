const express = require('express');
const path = require('path')
//const cors = require('cors');

const PORT = 3300;

const app = express()


app.use(express.static(path.resolve(__dirname, "public")))
app.get('*', (req,res) => { res.sendFile(path.resolve(__dirname,'public','index.html'))})
app.listen(PORT, () => console.log('server started'))