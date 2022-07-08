import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage";
import NutritionPage from "components/NutritionPage/NutritionPage";
import NotFound from "components/NotFound/NotFound";
import LandingPage from "components/LandingPage/LandingPage";
import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
import { ActivityContextProvider } from "../../contexts/activity";
import { NutritionContextProvider } from "../../contexts/nutrition"
import { ExerciseContextProvider } from "../../contexts/exercises";
import NutritionForm from "components/NutritionForm/NutritionForm";
import NutritionNew from "components/NutritionNew/NutritionNew";
import ExerciseForm from "components/ExerciseForm/ExerciseForm";
import ExerciseNew from "components/ExerciseForm/ExerciseForm"
import SleepForm from "components/SleepForm/SleepForm";
import ExerciseOverview from "components/ExerciseOverview/ExerciseOverview";

export default function AppContainer(){
  return (
    <AuthContextProvider>
      <ActivityContextProvider>
        <NutritionContextProvider>
          <ExerciseContextProvider>
            <App />
          </ExerciseContextProvider>
        </NutritionContextProvider>
      </ActivityContextProvider>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext();
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegistrationPage />}></Route>
                <Route path="/activity" element={<ActivityPage />}></Route>
                <Route path="/nutrition" element={<NutritionPage />}></Route>
                <Route path="/nutrition/create" element={<NutritionNew />}></Route>
                <Route path="/exercise" element={<ExerciseOverview />}></Route>
                <Route path="/exercise/create" element={<ExerciseForm />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
