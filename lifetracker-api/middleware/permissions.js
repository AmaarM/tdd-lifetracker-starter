const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");


const authedUserOwnNutrition = (req,res,next) => {
    const endpoint = req.path;

    //query the db using ID placed in endpoint

    

    //Check against Authenticated User, if yes then attacth to res.locals;
}