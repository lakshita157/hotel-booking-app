import { RegisterFormData } from "./pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;// this is how we import environment variables

export const register = async(formData: RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        // credentials: "include",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if(!response.ok){
        throw new Error(responseBody.message);
    }
};