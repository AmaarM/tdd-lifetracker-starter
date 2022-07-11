const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");

class Exercise{

    static async makeExerciseEntry(data){
        const requiredFields = ["name", "category", "duration"];
        requiredFields.forEach((e) => {
            if(!data.hasOwnProperty(e)){
                throw new BadRequestError(`Missing ${element} in Request Body`);
            }
        });

        const user = await User.fetchUserByEmail(data.email);
        const user_id = user.id;

        const result = await db.query(
            `
            INSERT INTO exercise(
                name,
                category,
                duration,
                user_id 
            )
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, category, duration, user_id, created_at;
            `,
                [data.name, data.category, data.duration, user_id]
        );

        const exerciseEntry = result.rows[0];
        return exerciseEntry;
    }


    static async listExercisesForUser(id){
        if(!id){
            throw new BadRequestError("Need Valid ID");
        }

        const query = `SELECT * FROM exercise WHERE user_id = $1`;
        const result = await db.query(query, [id]);
        const exercises = result.rows;
        return exercises;
    }



}

module.exports = Exercise;