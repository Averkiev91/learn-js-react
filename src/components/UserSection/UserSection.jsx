'use client';

import React from 'react';
import { useUser } from '../../redux/hooks/useUser';
import UserPanel from '../UserPanel/UserPanel';
import LoginForm from '../Loginform/LoginForm';

const UserSection = () => {
  const { user } = useUser();
  return user ? <UserPanel /> : <LoginForm />;
};

export default UserSection;
