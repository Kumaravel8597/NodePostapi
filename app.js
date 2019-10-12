const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended : true}));


Mongoose.connect("mongodb://interntest:easyas123@interncluster-shard-00-00-zmzoh.mongodb.net:27017,interncluster-shard-00-01-zmzoh.mongodb.net:27017,interncluster-shard-00-02-zmzoh.mongodb.net:27017/test?ssl=true&replicaSet=InternCluster-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser : true});

app.post("/authordetails" , async(request , response) =>{
    authordetails = new Authordetails(request.body);
    console.log("post called");
    var result = await authordetails.save();
    response.send(result);
});


const details = Mongoose.model("books",{
    "name" : String,
    "phonenumber" : Number,
     "email" : String,
     "books" : [{

        "name" : String,
       "author" : String,
        "price" : Number

     }]
})


app.listen(8888, () =>{
    console.log("server started");
});
