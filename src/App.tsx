import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header, Loader } from './components';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

export const appLoader = () => <Loader />;
