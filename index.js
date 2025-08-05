const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

const port = process.env.PORT || 3000;
const path = require('path');

//middleware
app.use(cookieParser())

app.get('/' , (req,res) => {
    res.send("Welcome to user Profile server");
})

app.get('/api/profile' , (req,res) => {
    const user = [
        {
        id : 1,
        name : "Uttam",
        who : "student"
        },

        {
            id:2,
            name : "Alif"
        }


]
    res.send(user);
})


//set cookie
app.get('/set-custom-cookie' , (req,res) => {
    res.cookie('customCookie1','123xyzUttamsharma',{
        maxAge: 60000,
        httpOnly : true,
        secure : true
    })
    res.send("Cookie set")
})

//get custom cookie
app.get('/get-custom-cookie',(req,res) => {
    const cookie = req.cookies.customCookie1;
    if(!cookie) {
        res.send("Not Found")
    }
    res.send(`your cookie is:${cookie}`)
})

//delete-custom-cookie
app.get('/delete-custom-cookie' ,(req,res) => {
    res.clearCookie('customCookie1')
    res.send("Cookie deleted succesfully")

})


//profile html page
app.get('/profile' ,(req,res) => {
    const cookie = req.cookies.customCookie1;

    if(!cookie){
        return res.status(200).json({
            message : "Unauthorized"
        })
    }
    
    const filePath = path.join(process.cwd(), 'public' , 'profile.html')
    console.log(filePath);
    res.sendFile(filePath);
})



app.listen(port , () => {
    console.log(`The server is listening on port: ${port}`)
})

