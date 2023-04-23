import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Info from './components/Info';
import Destaque from './components/Destaque';
import SecondBanner from './components/SecondBanner';
import Serum from './components/Serum';
import Imagens from './components/Imagens';
import Lancamentos from './components/Lancamentos';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <Info />
      <Destaque />
      <SecondBanner />
      <Serum />
      <Imagens />
      <Lancamentos />
      <Newsletter />
    </div>
  );
}

export default App;



