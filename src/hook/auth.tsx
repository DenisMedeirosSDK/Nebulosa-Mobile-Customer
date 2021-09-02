import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import { database } from '../database';
import { User } from '../database/model/User';
import { api } from '../services/api';

interface IUser {
  id: string;
  userId: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<IUser>({} as IUser);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const respone = await api.post('/sessions', {
        email,
        password,
      });

      const { token, refreshToken, user } = respone.data;

      api.defaults.headers.authorization = `Bearer ${refreshToken}`;

      const userCollection = database.get<User>('users');

      await database.write(async () => {
        await userCollection.create(newUser => {
          (newUser.userId = user.id),
            (newUser.name = user.name),
            (newUser.email = user.email),
            (newUser.token = token),
            (newUser.refreshToken = refreshToken);
        });
      });

      setData({ token, refreshToken, ...user });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<User>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as IUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserStorage() {
      const userCollection = database.get<User>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;
        api.defaults.headers.authorization = `Bearer ${userData.refreshToken}`;
        setData(userData);
      }
    }
    loadUserStorage();
  });

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
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
