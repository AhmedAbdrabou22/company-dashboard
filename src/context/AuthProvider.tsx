import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>({
        name: "Ahmed Mohamed",
        email: "ahmed@company.com",
        role: "serviceProvider",
    });

    const login = (userData: User) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};