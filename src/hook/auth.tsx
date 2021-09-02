import React, { createContext, useState, useContext, ReactNode } from 'react';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  refreshToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    const respone = await api.post('/sessions', {
      email,
      password,
    });

    const { token, refreshToken, user } = respone.data;
    console.log(respone.data);

    api.defaults.headers.authorization = `Bearer ${refreshToken}`;

    setData({ token, refreshToken, user });
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
