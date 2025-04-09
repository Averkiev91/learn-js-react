import Layout from "../Layout/Layout";
import Link from "next/link";

import 'normalize.css';
import '../../styles/global.css';
import '../../styles/variables.css';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import { ThemeProvider } from '../../context/ThemeProvider';
import { UserProvider } from '../../context/UserProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout title='Рестораны'>
          <p>Перейти на страницу ресторанов</p>
          <Link href="/restaurants">Рестораны</Link>
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
