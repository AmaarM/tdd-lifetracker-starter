const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");


class Nutrition {
    static async createNutrition(data){
        const requiredFields = ["name", "category", "calories", "image_url", "email"];
        console.log(data);
        requiredFields.forEach((element) => {
            if(!data.hasOwnProperty(element)){
                throw new BadRequestError(`Missing ${element} in request body`)
            }
        });

        const user = await User.fetchUserByEmail(data.email);
        const user_id = user.id;

        if(user){
        const result = await db.query(   
            `INSERT INTO nutrition(
                    name,
                    category,
                    calories,
                    image_url,
                    user_id
                )
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id, name, category, calories, image_url, user_id;
                `, 
                    [data.name, data.category, data.calories, data.image_url, user_id]
            )
        

        const nutritionData = result.rows[0];
        return nutritionData;
    }
    }


    static async fetchNutritionById(id){
        if(!id){
            throw new BadRequestError("Need Valid Id");
        }

        const query = `SELECT * FROM nutrition WHERE id = $1`
        const result = await db.query(query, [id]);
        console.log(result);
        if(result.rows.length <= 0){
            throw new NotFoundError("ID Not Found");
        }

        const nutrition = result.rows[0];
        return nutrition;
    }

    static async listNutritionForUser(id){
        if(!id){
            throw new BadRequestError("Need Valid Id");
        }

        const query = `SELECT * FROM nutrition WHERE user_id = $1`
        const result = await db.query(query, [id]);

        const nutrition = result.rows;
        return nutrition;
    }
}


module.exports = Nutrition;