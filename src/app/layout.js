import App from '../components/App/App';

export const metadata = {
  title: "Learn JS React",
  description: "React + Next.js + Redux",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <App>
          <div id='root'>{children}</div>
        </App>
      </body>
    </html>
  );
};

export default RootLayout;



