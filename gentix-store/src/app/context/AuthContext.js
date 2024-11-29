"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing user on client-side load
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("https://pjct-e-commerce-back.onrender.com/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        
        const errorData = await response.json().catch(() => null); 
        const errorMessage = errorData?.message || "Falha na autenticação";
        throw new Error(errorMessage);
      }
  

      const userData = await response.json().catch(() => ({})); 
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("./Store");
      return userData;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/client/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          permissionUsers: [
            {
              permission: { id: 1 }, 
            },
          ],
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => null); 
        const errorMessage = errorData?.message || 'Erro desconhecido ao criar conta';
        throw new Error(errorMessage);
      }else{
        alert("Cadastro realizado com sucesso")
      }
  
      const registeredUser = await response.json().catch(() => ({})); 
      return registeredUser; 
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
    router.push("/SignIn");
  };

  const requestRecoveryCode = async (email) => {
    try {
      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/management/recoveryCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Não foi possível enviar o código de recuperação');
      }

      return await response.json();
    } catch (error) {
      console.error('Recovery code error:', error);
      throw error;
    }
  };

  const changePassword = async (recoveryCode, newPassword) => {
    try {
      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/management/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          recoveryCode, 
          password: newPassword 
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha na alteração de senha');
      }

      return await response.json();
    } catch (error) {
      console.error('Change password error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        login, 
        register, 
        logout, 
        requestRecoveryCode, 
        changePassword 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};