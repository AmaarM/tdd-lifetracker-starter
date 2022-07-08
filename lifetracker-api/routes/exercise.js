const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const Exercise = require("../models/exercise");



router.get("/", security.requireAuthenticatedUser, async (req,res,next) => {
    console.log(res.locals.user);
    try {
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const listExercises = await Exercise.listExercisesForUser(user.id);
        return res.status(200).json({ listExercises });
    }
    catch(err){
        next(err);
    }
})


router.post("/", async(req,res,next) => {
    console.log(req.body);
    try{
        const makeExerciseEntry = await Exercise.makeExerciseEntry(req.body);
        const user = await User.fetchUserByEmail(req.body.email);
        const listExercises = await Exercise.listExercisesForUser(user.id);
        return res.status(200).json({ listExercises })
    }
    catch(err){
        next(err);
    }
})


module.exports = router;