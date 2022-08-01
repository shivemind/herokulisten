const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5254

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))


//Here is your listener.
app.use(express.json())
//middleware to read req.body.<params>
//CREATE USER
app.post("/createUser", async (req,res) => {
    console.log(req.body)
// const user = req.body.name;

//     var isProduction = false;
    
//     var strSimulator  = "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";
//     var strLive = "https://ipnpb.paypal.com/cgi-bin/webscr";
//     var paypalURL = strSimulator;
    
//     if (isProduction)  paypalURL = strLive;
    
//     var payload = "cmd=_notify-validate&" + req.body;
  
//     var options =
//       {
//         "method" : "post",
//         "payload" : payload,
//       };
      
//     var resp = UrlFetchApp.fetch(paypalURL, options); //Handshake with PayPal - send acknowledgement and get VERIFIED or INVALID response
    
//     if (resp == 'VERIFIED') {
//       if (e.parameter.payment_status  == 'Completed') {
//         if (e.parameter.receiver_email == 'receiver@email.com') {
//           //Implement paid amount validation. If accepting payments in multiple currencies, use e.parameter.exchange_rate to convert to reference currency (USD) if paid in any other currency
//           if (amountValid) {
          
//             //All validated - can process the payment here
  
//             if (!(processSuccess)) {
//               //Process of payment failed - raise notification to check it out
//             }
//           } else {
//             //Payment does not equal expected purchase value
//           }
//         } else {
//          //Request did not originate from my PayPal account 
//         }
//       } else {
//        //Payment status not Completed 
//       }
//     } else
//     {
//      //PayPal response INVALID 
//     }
})
