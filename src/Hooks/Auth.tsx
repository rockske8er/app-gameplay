import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as AuthSession from 'expo-auth-session';

import {
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from './../Configs';
import { api } from '../Services/Api';

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
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
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

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const { username, id, avatar } = userInfo.data;
        const firstName = username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatar/${id}/${avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token,
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
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
