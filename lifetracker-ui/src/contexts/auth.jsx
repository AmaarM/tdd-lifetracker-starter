import axios from "axios";
import React, { useContext } from "react";
import apiClient from "../services/apiClient";

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [initialized, setInitial] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(async () => {
    if(localStorage.getItem("lifetracker_token")){
      //apiClient.setToken(localStorage.getItem("lifetracker_token"));
    }
    try {
      const req = await axios.get("http://localhost:3001/auth/me", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}});
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
        const getData = await axios.post("http://localhost:3001/auth/login", {
          email: email,
          password: password,
        });
        localStorage.setItem("lifetracker_token", getData.data.token);
        setUser(getData.data.user);
      } catch (err) {
        console.log(err);
        setError(err.response.data.error.message);
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
        const getData = await axios.post("http://localhost:3001/auth/register", {
          credentials: obj,
        });
        setUser(getData.data.user);
        localStorage.setItem("lifetracker_token", getData.data.token);
      } catch (err) {
        console.log(err);
      }
  }

  const logOutUser = () => {
      localStorage.removeItem("lifetracker_token");
      console.log("hello");
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

