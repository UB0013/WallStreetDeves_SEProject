//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const cors = require("cors")

//import path module
const path=require('path');

app.use(cors());

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'../Front-End/build')))

//DB connection URL
const dbUrl='mongodb+srv://Varun:Varun@cluster0.klf74.mongodb.net/';

//connect with mongoDB server
mclient.connect(dbUrl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("commondatabase");

  //create collection objects
  let userCollectionObject=dbObj.collection("usercollection");
  let adminCollectionObject=dbObj.collection("admincollection");
  let postCollectionObject=dbObj.collection("postcollection");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
  app.set("adminCollectionObject",adminCollectionObject);
  app.set('postCollectionObject',postCollectionObject)

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))


//import userApp and productApp
const userApp = require("./APIS/userApi");
const postApp = require('./APIS/postApi')
//excute specific middleware based on path
app.use("/user-api", userApp);
app.use("/post-api", postApp)


// dealing with page refresh
app.use('/',(request,response)=>{
  response.sendFile(path.join(__dirname,'../Front-End/build'))
})


//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
const port=4000;
app.listen(port, () => console.log(`Web server listening on port ${port}`));