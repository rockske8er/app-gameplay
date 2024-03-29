import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { CDN_IMAGE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

import { api } from '../Services/Api';
import { COLLECTION_USERS } from './../Configs/Storage';
import { useEffect } from 'react';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  const signOut = async () => {
    setUser({} as User);

    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  useEffect(() => {
    const getUserStorage = async () => {
      const user = await AsyncStorage.getItem(COLLECTION_USERS);

      if (user) {
        const userLogged = JSON.parse(user) as User;
        api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
        setUser(userLogged);
      }
    };

    getUserStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

//Hook
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth };
