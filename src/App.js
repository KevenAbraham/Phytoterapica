import style from './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Filtrar from './components/Filtrar';
import Newsletter from './components/Newsletter';
import SecondInformation from './components/SecondInformation';
import Footer from './components/Footer';
import BelowFooter from './components/BelowFooter';
import Produtos from './components/Produtos';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <Filtrar />

      <div className='containerApp'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" name="Lavanda (gt.França)" valor="60,00" parcelas="20,00" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" name="Alecrim (qt. Cineol)" valor="37,00" parcelas="12,33" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156017/Mockup_Caixa_OE_Hortela_5ml_1000x1000px.jpg?v=637976556731430000" name="Hortelã-Pimenta" valor="52,00" parcelas="17,33" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" name="Melaleuca (Tea Tree)" valor="50,00" parcelas="16,66" /> 
      </div>

      <div className='containerApp'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155814/oleo-essencial-geranio-5ml-phytoterapica-01.jpg?v=637725623120030000" name="Gerânio " valor="44,00" parcelas="14,66" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155886/oleo-essencial-laranja-organico-10ml-phytoterapica-01.jpg?v=637753643540330000" name="" valor="60,00" parcelas="20,00" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155820/oleo-essencial-eucalipto-globulus-10ml-phytoterapica-01.jpg?v=637725633480370000" name="Eucalipto Globulus" valor="35,20" parcelas="11,73" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155838/oleo-essencial-bergamota-5ml-phytoterapica-01.jpg?v=637725646137900000" name="Lavanda (gt.França)" valor="40,00" parcelas="13,33" /> 
      </div>

      <div className='containerApp'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155415/_leo_essencial_de_lim_o-tahiti_10ml_-_phytoterapica_1_.jpg?v=637653490559770000" name="Limão-Tahiti" valor="34,20" parcelas="11,40" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000" name="Olíbano" valor="84,00" parcelas="28,00" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155415/_leo_essencial_de_lim_o-tahiti_10ml_-_phytoterapica_1_.jpg?v=637653490559770000" name="Limão-Tahiti" valor="34,20" parcelas="11,40" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000" name="Olíbano" valor="84,00" parcelas="28,00" /> 
       
      </div>

      <div className='containerApp'>
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155798/oleo-essencial-lavanda-10ml-phytoterapica-01.jpg?v=637725599700270000" name="Lavanda (gt.França)" valor="60,00" parcelas="20,00" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155804/oleo-essencial-alecrim-10ml-phytoterapica-01.jpg?v=637725608065330000" name="Alecrim (qt. Cineol)" valor="37,00" parcelas="12,33" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/156017/Mockup_Caixa_OE_Hortela_5ml_1000x1000px.jpg?v=637976556731430000" name="Hortelã-Pimenta" valor="52,00" parcelas="17,33" /> 
        <Produtos foto="https://phytoterapica.vtexassets.com/arquivos/ids/155808/oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica-01.jpg?v=637725610656700000" name="Melaleuca (Tea Tree)" valor="50,00" parcelas="16,66" /> 
      </div>
      
      <Newsletter />
      <SecondInformation />
      <Footer />
      <BelowFooter />
    </div>
  );
}

export default App;



