const { BadRequestError, UnauthorizedError } = require("../utils/error");
const { BCRYPT_WORK_FACTOR } = require('../config.js');
const bcrypt = require("bcrypt");
const db = require("../db");


class User{


    //function used for login and add to db
    static async login(){

    }

    //function used to register and add to db
    static async register(){

    }


    //Grabs email from database.
    static async fetchUserByEmail(email){
        if(!email){
            throw new BadRequestError("Need Valid Email");
        }

        const query = `SELECT * FROM users WHERE email = $1`
        const result = await db.query(query, [email.toLowerCase()]);

        const user = result.rows[0];
        return user;
    }


}