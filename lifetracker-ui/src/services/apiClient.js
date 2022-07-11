import axios from "axios"
import React from "react";
import constants from "constants";

console.log(constants);

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl;
        this.token = null;
        this.tokenName = "lifetracker_token"
    }

    //Sets the token
    async setToken(token){
        this.token = token;
        localStorage.setItem(this.tokenName, this.token);
    }

    async removeToken(){
        this.token = null;
        localStorage.removeItem(this.tokenName);
    }

     reload() {
        window.location.reload();
        return false;
    }

    //Issues axios requests
    async request({endpoint, method = "GET", data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }
        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }
        try {
            const request = await axios({url, method, data, headers});
            if(request){ 
                return {data: request.data, error:null};
            }
        }
        catch(err){
            console.log(err)
            return {data:null, error:err};
        }
    }

    async fetchUserFromToken(){
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

    //Sends a request to Auth/Login
     async login(loginData){
        return await this.request({endpoint: `auth/login`, method:`POST`, data:loginData})
    }

   async signup(loginData){   
    return await this.request({endpoint: `auth/register`, method:`POST`, data:loginData})
    }

    async logNutrition(nutritionData){
        return await this.request({endpoint: `nutrition`, method:`POST`, data: nutritionData})
    }
    async getNutrition(){
        return await this.request({ endpoint: `nutrition`, method: `GET` })
    }

    async getActivity(){
        return await this.request({ endpoint: `activity`, method: `GET` })
    }
    async getActivityExercise(){
        return await this.request({ endpoint: `activity/exercise`, method: `GET` })
    }

    async getExercises(){
        return await this.request({ endpoint: `exercise`, method: `GET` })
    }
    async logExercises(exerciseData){
        return await this.request({endpoint: `exercise`, method:`POST`, data: exerciseData})
    }
} 


export default new ApiClient("https://lifetracker-site-amaar.herokuapp.com");

