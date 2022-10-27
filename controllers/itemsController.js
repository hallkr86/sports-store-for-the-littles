const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/items", (req, res) => {
    db.Item.find({}).then (foundItems => {
        res.json(foundItems)
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retreive items.",
        });
    });
});

router.post("/api/items", (req, res) => {
    db.Item.create(req.body).then((newItem) => {
        res.json(newItem);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to create new item",
        });
    });
});

module.exports = router;