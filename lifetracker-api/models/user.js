const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { BCRYPT_WORK_FACTOR } = require('../config.js');
const bcrypt = require("bcrypt");
const db = require("../db");

class User{
    static async makePublicUser(user){
        return{
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
        }
    }

    //function used for login and add to db
    static async login(credentials) {
        const registerFields = ["password", "email"];

        registerFields.forEach((element) => {
            if(!credentials.hasOwnProperty(element)){
                throw new BadRequestError(`Missing ${element} in request body`);
            }
        });

        const user = await User.fetchUserByEmail(credentials.email);

        if(user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if(isValid){
                this.latestUser = user;
                return User.makePublicUser(user);
            }
        }
        throw new UnauthorizedError("Wrong Password");
    }

    static async register(credentials){ 
        const userData = credentials.credentials
        const registerFields = ["username", "password", "firstName", "lastName", "email"];
        registerFields.forEach((element) => {
            if(!userData.hasOwnProperty(element)){
                throw new BadRequestError(`Missing ${element} in request body`);
            }
        });

        const existingUser = await User.fetchUserByEmail(userData.email);
        if(existingUser){
            throw new BadRequestError(`Email already exists`);
        }

        if(userData.email.indexOf("@") <= 0){
            throw new BadRequestError("Invalid Email");
        }

        const lowercaseEmail = userData.email.toLowerCase();
        const hashedPassword = await bcrypt.hash(userData.password, BCRYPT_WORK_FACTOR);
        const updated_at = "2021-01-01"


        const result = await db.query(
            
            `INSERT INTO users(
                username,
                password,
                first_name,
                last_name,
                email,
                updated_at
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, username, password, first_name, last_name, email, updated_at;
            `, 
                [userData.username, hashedPassword, userData.firstName, userData.lastName, lowercaseEmail, updated_at]
        )

        const user = result.rows[0];
        this.latestUser = user;
        return user;

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

module.exports = User;
