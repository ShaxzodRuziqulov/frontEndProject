import axios from "../axios.ts";
import type {RegisterUser} from "../type/User.ts";

export const AuthService = {
    async signup(user: RegisterUser) {
        const response = await axios.post("/auth/signup", user);
        return response.data;
    },
    async login(user: { email: string, password: string }) {
        const response = await axios.post("/auth/login", user);
        return response.data;
    }

};

