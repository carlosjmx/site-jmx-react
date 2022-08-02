import { BrowserRouter } from 'react-router-dom';
import Footer from './components/baseSite/Footer';
import Header from './components/baseSite/Header';
import MainRoutes from './MainRoutes';
import './App.css';
import Content from './components/baseSite/Content';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <MainRoutes />
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
