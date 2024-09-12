import e from "express"
const app = e()

app.get('/people' , (req , res) => {
    res.render('helloo')
})

app.listen(3000 , () => console.log('app listening on port 3000'))