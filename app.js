const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.post('/',(req,res)=>{
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)

    const add = num1 + num2
    const sub = num1 - num2
    const mul = num1 * num2
    const dev = 1
    if(num2 !== 0)  {
        dev = num1/num2
    }else{
        dev = "can't devide by zero"
    }

    res.send('Addition(first_number + second_number) = ' + add)
    res.send('Subtraction(first_number - second_number) = ' + sub)
    res.send('Multiplication(first_number * second_number) = ' + mul)
    res.send('Division(first_number / second_number) = ' + dev)
})

app.listen(5000,(res)=>{
    console.log('server listening at port 5000')
})