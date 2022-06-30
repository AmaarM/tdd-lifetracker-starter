PRODUCTION_API_BASE = "http://localhost:3001";
DEVELOPMENT_API_BASE_URL = "http://localhost:3001";
API_BASE_URL = process.env.NODE_ENV ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL;



export default function constants(){
    return (
        {
            PRODUCTION_API_BASE: PRODUCTION_API_BASE,
            DEVELOPMENT_API_BASE_URL: DEVELOPMENT_API_BASE_URL,
            API_BASE_URL: API_BASE_URL
        }
    )
}

