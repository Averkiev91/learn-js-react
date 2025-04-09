"use client";

import dynamic from "next/dynamic";

const AppDynamic = dynamic(() => import('../../components/App/App'), {
  ssr: false,
});

export const ClientOnlyApp = () => {
  return <AppDynamic />;
};