'use client';

import dynamic from 'next/dynamic';

const AppDynamic = dynamic(() => import('../components/Layout/Layout'), {
  ssr: false,
});

export const ClientOnlyApp = ({ children }) => {
  return <AppDynamic>{children}</AppDynamic>;
};

export default ClientOnlyApp;
