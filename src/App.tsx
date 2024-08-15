import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from './layout/Footer';
import Toast from './components/prototypes/Toast';
import * as $ from './App.style';

function App() {
  return (
    <div>
      <Header />
      <$.Container>
        <Outlet />
        <Footer />
      </$.Container>
      <Toast />
    </div>
  );
}

export default App;
