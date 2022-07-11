import axios from "axios";
import React, { useContext } from "react";
import ApiClient from "../services/apiClient";

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [initialized, setInitial] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState("");
  const [testUser, setTestUser] = React.useState({});
  
  React.useEffect(async () => {
    if(localStorage.getItem("lifetracker_token")){
      ApiClient.setToken(localStorage.getItem("lifetracker_token"));
    }
    setIsProcessing(true);
    setInitial(false);
    try {
      const req = await ApiClient.fetchUserFromToken();
      setUser(req.data.user);
      setError(null);
    } catch (err) {
      setError("");
    }

    setIsProcessing(false);
    setInitial(true);
  }, []);


const loginUser = (email,password) => {
  const req = async () => {
    try {
      const getData = await ApiClient.login({
        email: email,
        password: password,
      });
      ApiClient.setToken(getData.data.token)
      setUser(getData.data.user);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  req();
}

const signUpUser = async (data) => {
    let obj = {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      try {
        const getData = await ApiClient.signup({
          credentials: obj,
        });
        
        ApiClient.setToken(getData.data.token)
        setUser(getData.data.user);
      } catch (err) {
        console.log(err);
      }
  }

  const logOutUser = () => {
      ApiClient.removeToken();
      location.reload();
      return false;
  }


  const authValue = { user, setUser, loginUser, signUpUser, logOutUser, error };

  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

