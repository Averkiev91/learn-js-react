import Providers from '../Providers/Providers';
import LayoutContent from './LayoutContent';

const Layout = ({ children }) => {
  return (
    <Providers>
      <LayoutContent>{children}</LayoutContent>
    </Providers>
  );
};

export default Layout;
