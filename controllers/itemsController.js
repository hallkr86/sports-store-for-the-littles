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

router.get("/api/items/:id", (req, res) => {
    db.Item.findById(req.params.id).then(foundItem => {
        res.json(foundItem);
    }).catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: `Failed to retreive item with id: ${req.params.id}`,
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

router.put("/api/items/:id", (req, res) => {
    db.Item.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedItem) => {
        res.json(updatedItem);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to update item",
        });
    });
});

router.delete("/api/items/:id", (req, res) => {
    db.Item.findByIdAndDelete(req.params.id).then(response => {
        console.log(response);
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.json({
        error: true,
        data: null,
        message: "Failed to delete item",
        });
    });
});

module.exports = router;