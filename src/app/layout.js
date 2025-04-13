import { ClientOnlyApp } from './app';

export const metadata = {
  title: 'Learn JS React',
  description: 'React + Next.js + Redux',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <ClientOnlyApp>{children}</ClientOnlyApp>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
