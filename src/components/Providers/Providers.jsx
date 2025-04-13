import { ThemeProvider } from '../../context/ThemeProvider';
import { UserProvider } from '../../context/UserProvider';
import ReduxProvider from './ReduxProvider';

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
