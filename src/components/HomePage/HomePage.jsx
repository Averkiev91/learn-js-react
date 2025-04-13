import Link from 'next/link';

export const HomePage = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link href='/restaurants'>К ресторанам</Link>
    </div>
  );
};
