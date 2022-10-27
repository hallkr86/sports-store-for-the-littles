const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/sports", (req, res) => {
    db.Sport.find({}).then (foundSports => {
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

module.exports = router;