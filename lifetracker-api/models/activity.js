const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");


class Activity {

    static async calculateDailyCaloriesSummaryStats(user){
        const nutrition = await Nutrition.listNutritionForUser(user.id);
        let arr = [];

        //Loop through and check if the date is already in the array,
        //If the date isnt in the array, add it in the correct format, 
        //If the date is in the array, update the total calories for that entry and repeat.
        nutrition.forEach(e => {
            console.log(e.created_at.toDateString());
            let index = arr.findIndex(element => e.created_at.toDateString() === element.date)
            if(index === -1){
                let obj = {date: e.created_at.toDateString(), totalCaloriesPerDay: e.calories};
                arr.push(obj);
            }
            else{
                arr[index].totalCaloriesPerDay += e.calories;
            }
        })
        return arr;
    }



    static async calculatePerCategoryCaloriesSummaryStats(user){
        const nutrition = await Nutrition.listNutritionForUser(user.id);
        let arr = [];

        //Loop through, and add total calories to same categories;
        nutrition.forEach(e => {
         
            let index = arr.findIndex(element => e.category.toLowerCase() === element.category.toLowerCase())
            if(index === -1){
                let obj = {category: e.category.toLowerCase(), totalCaloriesPerDay: e.calories, count: 1};
                arr.push(obj);
            }
            else{
                arr[index].totalCaloriesPerDay += e.calories;
                arr[index].count += 1;
            }
        })


        //Loop through arr and format to get avgCaloriesPerDay.
        let outputArr = [];
        arr.forEach(e => {
            let avgCaloriesPerCategory = e.totalCaloriesPerDay / e.count;
            let obj = {category: e.category, avgCaloriesPerCategory: avgCaloriesPerCategory}
            outputArr.push(obj);
        })

        return outputArr;
    }


}


module.exports = Activity;