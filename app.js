const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("Hello!!");
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    //res.redirect("/");
    res.send("Hello node!!");
});

app.listen(3001, function () {
    console.log("Server running on port 3001");
});