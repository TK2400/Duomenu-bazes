const express = require("express");
const app = express();
const port = 3000;
//5-a eilute reikalinga jei naudojame POST metoda
app.use(express.json())


const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb+srv://TK:TK2400@cluster0.y5udm.mongodb.net/?retryWrites=true&w=majority")
let database
mongoClient.connect(function (err, client) {
    database = client.db("usersdb");
    // const collection = database.collection("users");

    // collection
    //     .find({ name: "Brad" })
    //     .toArray(function (err, result) {
    //         console.log(result)
    //         client.close()
    //     })

    // collection
    // .find( {age: { $gt: 35} })
    // . toArray(function (err, result) {
    //     console.log(result);
    //     client.close()
    //     return
    // })

    // const newUsers = [
    //     { name: "Tom", age: 30 },
    //     { name: "Adam", age: 40 },
    //     { name: "Jon", age: 60 },
    //     { name: "Brad", age: 50 },
    //     { name: "Tim", age: 15 },
    // ];

    // collection.insertMany(newUsers, function (err, result) {
    //     if (err) {
    //         return console.log("Failed to write an user");
    //     }

    //     collection.find().toArray(function (err, result) {
    //         if (err) {
    //             return console.log("errr", err);
    //         }
    //         console.log("Result:", result);
    //         client.close();
    //     });
    // });
});



app.get("/", (req, res) => {
    database
        .collection("users")
        .find()
        .toArray((err, result) => err ? res.send(err) : res.send(result))
}
)




app.get("/users/:name", (req, res) => {

    return database
        .collection("users")

        // 72 eiluteje naujas find uzrasymas, jeigu dirbama per duomenu baze
        .find({ name: req.params.name })
        .toArray(function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
})

app.post("/users/user", (req, res) => {

    const newUser = req.body
    database.collection("users").insertOne(newUser, function (err, result) {
        if (err) {
            return console.log("failed to add an user")
        }
        console.log(res.send(result))
        client.close()
    })
   

    // if (database.collection("users").find(user.name === newUser.name || user.age === newUser.age)) {
    //     return res.send("user su tokiais pata duomenis jau yra")
    // }
    // else {
    //     database.collection("users").push({ ...newUser })
    //     return res.send("naujas useris pridetas")
    // }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

