import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import CategoryCards from './components/Categories/Categories';
import ProductCatalog from './components/Catalog/ProductCatalog';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}
      {/* <CategoryCards /> */}
      <ProductCatalog />
      <Footer />
    </div>
  );
}

export default App;
