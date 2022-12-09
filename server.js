const express = require("express");
const app = express();
const port = 3000

//static file
app.use(express.static("public"))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/images',express.static(__dirname + 'public/images'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

/*
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + "/views/login.html")
});
*/

//app.listen(port, () => console.info(`Listening on port ${port}`))

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
  });

//Connect to MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbCCAPDEV19:dbCCAPDEV19@ccapdevmp.pojqxdn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ccapdevmp").collection("mpdata");
  console.log("Connected to MongoDB");
  client.close();
});