const express = require("express");
const files = require("express-fileupload");

const app = express();
app.use(files());

const users = [];
// app.get('/users',(req,res)=>{
//     // console.log(res.json(users));
//     const getIt= req.body;
//     console.log(getIt);
// });
app.post("/login", (req, res) => {
  res.send("heyo");
  console.log(req.body);
});
app.post("/upload", (req, res) => {
  console.log(req.files.foo); // the uploaded file object
});

// GET https://example.com/user/1

app.get("/user/:userid", (req, res) => {
  console.log(req.params.userid); // "1"
  res.statusCode(200).send("done");
});
//   let options=1;

// app.use('/check',(null,callback)=>{
//   if(options!==1){
//     callback(err,data)

//   }
//   else{
//     callback(new Error('this is not allowed'));
//   }
// })

function greet(name) {
  console.log(`my name is ${name}`);
}

function greetWasha(greetFn) {
  const name = "Washa";
  greetFn(name);
}

greetWasha(greet);

const person = [
  {
    firstname: "molapo",
    secondNaMe: 123,
    addrress: { id: 1, box: 22, Location: "maseru" },
    colors: [],
    port: 3001,
  },
];

app.get("/search", (req, res) => {
  console.log(req.body); // "great-white"
});
app.get("/creatures", (req, res) => {
  console.log(req.protocol); // "https"
  console.log(req.hostname); // "example.com"
  console.log(req.path); // "/creatures"
  console.log(req.originalUrl); // "/creatures?filter=sharks"
  console.log(req.subdomains);
  console.log(req.route); // "['ocean']"
  console.log(req.headers["user-agent"]);
  // console.log(req.body);
  res.download("./Test.js");
});

app.listen(3001, (err) => {
  if (err) return console.log(" error ocured!");
  const ma = person.map((i) => i.port);

  return console.log(ma, "port connected!");
});
