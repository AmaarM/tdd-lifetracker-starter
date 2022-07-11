import axios from "axios";

export default constants = {
    PRODUCTION_API_BASE: "http://localhost:3001",
    DEVELOPMENT_API_BASE_URL: "http://localhost:3001",
    API_BASE_URL: process.env.NODE_ENV ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL
}