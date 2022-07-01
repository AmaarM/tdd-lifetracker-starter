import axios from "axios";
import React, { useContext } from "react";
import apiClient from "../services/apiClient";

const AuthContext = React.createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState("");
  const [initialized, setInitial] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(async () => {
    if (localStorage.getItem("lifetracker_token")) {
      apiClient.setToken(localStorage.getItem("lifetracker_token"));
    }
    try {
      const req = await axios.get("http://localhost:3001/auth/me");
      setUser(req.user);
      setError(null);
    } catch (err) {
      setError("error...");
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
        console.log(getData);
        setUser(getData.data.user);
      } catch (err) {
        console.log(err);
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
        console.log(getData);
      } catch (err) {
        console.log(err);
      }
  }

  const authValue = { user, setUser, loginUser, signUpUser };

  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);




/* //makes a request to log in user
export async function loginUser(email, password) {
  const { user, setUser } = useAuthContext();
  const req = async () => {
    try {
      const getData = await axios.post("http://localhost:3001/auth/login", {
        email: email,
        password: password,
      });
      setUser(getData);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  req();
}

//makes a request to signupUser
export async function signupUser(data) {
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
    console.log(getData);
  } catch (err) {
    console.log(err);
  }
}

//grabs user from token
async function fetchUserFromToken() {}

//remove lifetracker_token from local storage and refresh the page
async function logOutUser() {} */
