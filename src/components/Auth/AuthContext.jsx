import { createContext, useState, useEffect, useContext } from "react";
import { auth, signInAnonymouslyUser, onAuthStateChanged } from "../../config/firebase";
import { signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const expirationKey = "anonSessionExpiration";

        const checkSession = async () => {
            const expiration = localStorage.getItem(expirationKey);
            if (!expiration || Date.now() > parseInt(expiration)) {
                await signInAnonymouslyUser();
            }
        };

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                await checkSession();
            }
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("anonSessionExpiration");
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
