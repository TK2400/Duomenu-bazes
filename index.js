const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority")

mongoClient.connect(function (error, client) {
    const database = client.db("usersdb")
    const collection = database.collection("users")
    // const newUser = { name: "Steve", age: 30 }
    // collection.insertOne(newUser, function (err, result) {
    //     if (err) {
    //         return console.log("failed to add an user")
    //     }
    //     console.log(result)
    //     client.close()
    // })
collection.find().toArray(function(err, result) {
    if(err) {
        return console.log("err", err)
    }

    console.log("Result:", result)
    client.close()
})
});



