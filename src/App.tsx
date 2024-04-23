import Category from './components/Category';
import Footer from './components/Footer';

import Home from './components/Home';
import Menu from './components/Menu';
import MenuMain from './components/MenuMain';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <Menu />
      <MenuMain />
      <Category />
      <Footer/>
    </>
  );
}

export default App;
