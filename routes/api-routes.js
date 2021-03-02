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

});

router.get("/api/workouts", (req, res) => {

});

router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;