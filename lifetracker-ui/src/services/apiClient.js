import axios from "axios"


class apiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl;
        this.token = null;
    }


    //Sets the token
    static setToken(token){
        this.token = token;
    }


    //Issues axios requests
    static async request({endpoint, method = "GET", data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const request = await axios({url, method, data, headers});
            return {data: request.data, error:null};
        }
        catch(err){
            console.log(err);
            return {data:null, error:err};
        }
    }

    //Sends a request to Auth/Login
    static async login(loginData){
        return await this.request({endpoint: 'auth/login', method:'POST', data:loginData})
    }

    static async signup(){
        return await this.request({endpoint: 'auth/register', method:'POST', data:loginData})
    }

    static async fetchUserFromToken(){
        try {
            const request = await this.request("http://localhost:3001/auth/me")
            return request.data;
        }
        catch(err){
            return err;
        }
    }
} 


export default new apiClient("https://localhost:3001");
