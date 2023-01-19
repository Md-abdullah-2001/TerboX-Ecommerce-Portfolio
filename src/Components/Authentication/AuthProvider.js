import React, { createContext, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import {getAuth} from 'firebase/auth'


const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const allInfo= {user, loading}

    // Create user
    // Log in User  
    // Track User 
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;