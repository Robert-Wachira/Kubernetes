import express from 'express'
const PORT = 5000

const app= express()

app.use('/', (req, res) =>{
    const hello = console.log('Hello. Welcome to this trial.')
    console.log(hello)
    res.send(hello)
})


app.listen(PORT, () =>{
    console.log(`Server listening at port ${PORT}`)
})
