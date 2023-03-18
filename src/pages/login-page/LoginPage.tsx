import React from 'react';
import { useAuth } from '@shared';

const LoginPage = () => {
  const { data } = useAuth();

  return <div>Login page {data?.token}</div>;
};

export default LoginPage;
