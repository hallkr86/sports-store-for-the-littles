const express = require("express");
const mongoose = require("mongoose");
const app = express();


const PORT = process.env.PORT || 3000;


const itemsController = require("./controllers/itemsController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI|| "mongodb://127.0.0.1/sports-store-for-the-littles",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindandModify:false,
}
);

const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});
connection.on("error", (err) => {
    console.log("Mongoose connection error:",err);
});


app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

app.use(itemsController);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});