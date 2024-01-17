const app = require('./app')
const PORT = 3000;

app.listen(PORT , ()=>{
    console.log(`Your server is runnig at http://localhost:${PORT}`)
})