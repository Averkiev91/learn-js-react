"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppDynamic = dynamic(() => import("../components/App/App"), {
  ssr: false,
});

const ClientOnlyApp = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <main>
        <h1>Главная страница</h1>
        <Link href="/restaurants">К ресторанам</Link>
      </main>
    );
  }
  return <AppDynamic />;
};

export default ClientOnlyApp;
