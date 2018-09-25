
const functions = require('firebase-functions');

var nodemailer = require('nodemailer');

var myCreds = {
  mail: 'georgioupolis.transfer@gmail.com',
  password: 'georgioupolis.taxi1!'
};

exports.sendBookTransferEmail = functions.https.onRequest((req, res) => {

  //names must not contain symbols
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const email = req.query.email;
  const noPeople = req.query.noPeople;
  const babySheat = req.query.babySheat;
  const comments = req.query.comments;
  const date = req.query.date;
  const time = req.query.time;
  const meetingPoint = req.query.meetingPoint;
  const destination = req.query.destination;

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: myCreds.mail,
          pass: myCreds.password
      }
  });

  var babySheatMessage = '';
  if(babySheat == 'true')
    babySheatMessage = ' with a baby sheat';

  var commentsMessage = '';
  if(comments != '')
    commentsMessage = '<p>Also you mentioned: \'' + comments + '\'</p>';
  
  var message = "<p>Dear " + firstName + " " + lastName + ",</p>\
    <p>You successfully booked transfer for " + noPeople + " people" + babySheatMessage
    +", from: "+ meetingPoint + ", to: " + destination + ".</p>"
    + commentsMessage + "<br>"
    +"Scheduled date: "+ date + ", at " + time + "."
    +"<p>Thank you,<br>Georgioupolis Taxi</p>"
    +"<p>tel: +306937127600</p>";

  // setup e-mail data with unicode symbols
  var mailOptions = {
    // sender address
    from: 'Georgioupolis Taxi <' + myCreds.mail + '>', 
    cc: 'Georgioupolis Taxi <' + myCreds.mail + '>', 
    // list of receivers
    to: email,  
    // Subject line
    subject: 'Transfer Info', 
    // rich text html body
    html: message,
  };


  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("content-type","application/json");

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){

    if(error){
        res.json(error);
    }else{
        res.json(info.response);
    }

  });
});

exports.sendTourEmail = functions.https.onRequest((req, res) => {

  //names must not contain symbols
  const email = req.query.email;
  const message = req.query.message;

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: myCreds.mail,
          pass: myCreds.password
      }
  });

  var htmlMessage = "<p>Message: <br>\'" + message + "\'.</p>\
    <p>Successfully sent by: " + email + " .</p>" + "<br>\
    <p>We will response as soon as possible.</p>\
    <p>Thank you,<br>Georgioupolis Taxi</p>"
    +"<p>tel: +306937127600</p>";

  // setup e-mail data with unicode symbols
  var mailOptions = {
    // sender address
    from: 'Georgioupolis Taxi <' + myCreds.mail + '>', 
    cc: 'Georgioupolis Taxi <' + myCreds.mail + '>', 
    // list of receivers
    to: email,  
    // Subject line
    subject: 'Transfer Info', 
    // rich text html body
    html: htmlMessage,
  };


  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("content-type","application/json");

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){

    if(error){
        res.json(error);
    }else{
        res.json(info.response);
    }

  });
});

/*
curl -s --user 'api:key-00aeb7daa5702f2d243ab9e014462bf4' 
https://api.mailgun.net/v3/sandboxb690e4f92feb44c3b68a0c440a422d55.mailgun.org/messages 
-F from='Mailgun Sandbox <postmaster@sandboxb690e4f92feb44c3b68a0c440a422d55.mailgun.org>' 
-F to='Nikolaos Xenakis <nikosxenakis94@gmail.com>' 
-F subject='Hello' -F 
text='You are truly awesome!'
*/