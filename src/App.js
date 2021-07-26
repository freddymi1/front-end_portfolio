import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './assets/style/Accordion.css'
import MainPage from './pages/MainPage';

import 'swiper/swiper-bundle.css';
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


function App() {

  return (
    <BrowserRouter>
      <Route exact path="/">
        <MainPage/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
