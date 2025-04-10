import Layout from "../Layout/Layout";

import 'normalize.css';
import '../../styles/global.css';
import '../../styles/variables.css';

import Providers from '../Providers/Providers';

const App = ({ children }) => {
  return (
    <Providers>
      <Layout>
        {children}
      </Layout>
    </Providers>
  );
};

export default App;
