const { BadRequestError, UnauthorizedError, NotFoundError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const Exercise  = require("../models/exercise");
const { listExercisesForUser } = require("../models/exercise");


class Activity {

    static async calculateDailyCaloriesSummaryStats(user){
        const nutrition = await Nutrition.listNutritionForUser(user.id);
        let arr = [];

        //Loop through and check if the date is already in the array,
        //If the date isnt in the array, add it in the correct format, 
        //If the date is in the array, update the total calories for that entry and repeat.
        nutrition.forEach(e => {
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

    static async calculateAverageMinutesPerCategory(user){
        //loop through exercise table and calculate average minute spent on each category.
        const exercises = await listExercisesForUser(user.id);
        let arr = [];

        exercises.forEach(e => {
            let index = arr.findIndex(element => e.category.toLowerCase() === element.category.toLowerCase());
            if(index === -1){
                let obj = {category: e.category.toLowerCase(), totalDurationPerDay: e.duration, count: 1};
                arr.push(obj);
            }
            else{
                arr[index].totalDurationPerDay += e.duration;
                arr[index].count += 1;
            }
        })
        let outputArr = [];
        arr.forEach(e => {
            let avgDurationPerCategory = e.totalDurationPerDay / e.count;
            let obj = {category: e.category.toLowerCase(), avgDurationPerCategory:avgDurationPerCategory};
            outputArr.push(obj);
        })


        return outputArr;
    }

    static async calculateTotalMinutesPerCategory(user){
        //loop through exercise table and calculate total minute spent on each category.
        const exercise = await listExercisesForUser(user.id);
        let arr = [];

        exercise.forEach(e => {
            let index = arr.findIndex(element => e.category.toLowerCase() === element.category.toLowerCase())
            if(index === -1){
                let obj = {category: e.category, totalDurationPerCategory: e.duration};
                arr.push(obj);
            }
            else{
                arr[index].totalDurationPerCategory += e.duration;
            }
        })

        return arr;
    }


}


module.exports = Activity;