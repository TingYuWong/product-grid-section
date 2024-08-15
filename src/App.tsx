import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from './layout/Footer';
import Toast from './components/prototypes/Toast';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
