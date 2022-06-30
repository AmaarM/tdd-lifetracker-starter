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
import { AuthContextProvider } from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/auth";
import { ActivityContextProvider } from "/Users/amaar/siteProjects/tdd-lifetracker-starter/lifetracker-ui/src/contexts/activity";

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <AuthContextProvider>
            <ActivityContextProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegistrationPage />}></Route>
                <Route path="/activity" element={<ActivityPage />}></Route>
                <Route path="/nutrition/*" element={<NutritionPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                </Routes>
              </ActivityContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
