import axios from 'axios';
import React from 'react';
import apiClient from "../../services/apiClient"

const AuthContext = React.createContext();

export function useContext(){
    return useContext(AuthContext);
}

export function AuthContextProvider( { children } ){

    const [user, setUser] = React.useState({});
    const [initialized, setInitial] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(async () => {
        if(localStorage.getItem("lifetracker_token")){
            apiClient.setToken(localStorage.getItem("lifetracker_token"))
        }
        try{
            const req = await axios.get("http://localhost:3001/auth/me")
            setUser(req.user);
            setError(null);
        }
        catch(err){
            setError("error...");
        }

        setIsProcessing(false);
        setInitial(true);
    },[])



    //makes a request to log in user
    async function loginUser(){

    }

    //makes a request to signupUser
    async function signupUser(){

    }


    //grabs user from token
    async function fetchUserFromToken(){

    }

    //remove lifetracker_token from local storage and refresh the page
    async function logOutUser(){
        
    }

    return (
        <AuthContext.Provider value={object = {user: [user, setUser], initialized: [initialized, setInitial], processing: [isProcessing, setIsProcessing], error: [error, setError]}}>
            {children}
        </AuthContext.Provider>
    )
}