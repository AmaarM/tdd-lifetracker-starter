const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const Nutrition = require("../models/nutrition");
const Activity = require("../models/activity");


router.get("/", security.requireAuthenticatedUser, async (req,res,next) => {
    try{
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const totalPerDay = await Activity.calculateDailyCaloriesSummaryStats(user);
        const totalPerCategory = await Activity.calculatePerCategoryCaloriesSummaryStats(user);
        res.status(200).json({ totalPerDay, totalPerCategory })
    }
    catch(err){
        next(err);
    }
})

router.get("/exercise", security.requireAuthenticatedUser, async (req,res,next) => {
    try{
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const avgMinPerCat = await Activity.calculateAverageMinutesPerCategory(user);
        const totalMinPerCat = await Activity.calculateTotalMinutesPerCategory(user);
        res.status(200).json({ avgMinPerCat, totalMinPerCat })
    }
    catch(err){
        next(err);
    }
})


module.exports = router;