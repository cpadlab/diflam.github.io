import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    setPersistence, 
    browserLocalPersistence, 
    signInAnonymously, 
    onAuthStateChanged 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Configurar persistencia
setPersistence(auth, browserLocalPersistence);

const signInAnonymouslyUser = async () => {
    try {
        const user = auth.currentUser;
        const expirationKey = "anonSessionExpiration";

        if (user && user.isAnonymous) {
            const expiration = localStorage.getItem(expirationKey);
            if (expiration && Date.now() < parseInt(expiration)) {
                console.log("Sesión anónima activa.");
                return;
            }
        }

        // Crear nueva sesión anónima
        const userCredential = await signInAnonymously(auth);
        console.log("Nueva sesión anónima creada:", userCredential.user);

        // Guardar expiración en 6 meses
        const sixMonths = 6 * 30 * 24 * 60 * 60 * 1000;
        localStorage.setItem(expirationKey, Date.now() + sixMonths);
    } catch (error) {
        console.error("Error en autenticación anónima:", error);
    }
};

export { auth, db, signInAnonymouslyUser, onAuthStateChanged };
