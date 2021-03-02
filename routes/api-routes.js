const db = require("../models");
const router = require("express").Router();

// create workout using activity 13 as guide
router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
        console.log(err);
    })
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id},
    { $push: { exercises: req.body}},
    { new: true})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
        console.log(err);
    });

});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
        console.log(err);
    })
});

router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;