import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <h1>Главная страница</h1>
      <Link href="/restaurants">К ресторанам</Link>
    </main>
  );
};

export default HomePage;