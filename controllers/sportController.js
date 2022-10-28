const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/sports", (req, res) => {
    db.Sport.find({}).populate("items").then (foundSports => {
        res.json(foundSports)
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to retreive sports.",
        });
    });
});

router.get("/api/sport/:id", (req, res) => {
    db.Sport.findById(req.params.id).then(foundSport => {
        res.json(foundSport);
    }).catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: `Failed to retreive item with id: ${req.params.id}`,
        });
    });
});

router.post("/api/sports", (req, res) => {
    db.Sport.create(req.body).then((newSport) => {
        res.json(newSport);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to create new sport",
        });
    });
});

router.put("/api/sport/:id", (req, res) => {
    db.Sport.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedSport) => {
        res.json(updatedSport);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Failed to update sport",
        });
    });
});

router.delete("/api/sport/:id", (req, res) => {
    db.Sport.findByIdAndDelete(req.params.id).then(response => {
        console.log(response);
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.json({
        error: true,
        data: null,
        message: "Failed to delete sport",
        });
    });
});

module.exports = router;