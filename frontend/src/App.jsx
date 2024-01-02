import Header from './components/Layout/Header/Header';
import Slider from './components/Slider/Sliders';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Policy from './components/Layout/Policy/Policy';
import Footer from './components/Layout/Footer/Footer';
import './App.css'
function App() {

  return (
    <div>
      <Header/>
     <Slider/>
     <Categories/>
     <Products/>
     <Policy/>
     <Footer/>
    </div>
  )
}

export default App
