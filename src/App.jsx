import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import { HomePage } from "./pages/home/HomePage";
import { ProductsViewPage } from "./pages/productsView/ProductsViewPage";
import { AuthPage } from "./pages/auth/AuthPage";

import { useAuth , AuthProvider} from "./components/Auth/AuthContext";

function AppContent() {
    
    const location = useLocation();
    const { user } = useAuth();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage user={user} />} />
                <Route path="/products/view/:path" element={<ProductsViewPage user={user} />} />
                <Route path="/auth" element={<AuthPage user={user} />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
