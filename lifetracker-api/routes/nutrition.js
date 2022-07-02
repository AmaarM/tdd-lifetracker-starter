const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const Nutrition = require("../models/nutrition");


router.get("/", security.requireAuthenticatedUser, async (req,res,next) => {
    try{
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const nutrition = await Nutrition.listNutritionForUser(user.id);
        return res.status(200).json({ nutrition }); 
    }
    catch(err){
        console.log(err);
    }
})


router.post("/", async (req,res,next) => {
    console.log(req.body)
    try {
        const makeNutrition = await Nutrition.createNutrition(req.body.data);
        const user = await User.fetchUserByEmail(req.body.data.email);
        const nutrition = await Nutrition.listNutritionForUser(user.id);
        return res.status(200).json({ nutrition });
    }
    catch(err){
        next(err);
    }
})


module.exports = router;
