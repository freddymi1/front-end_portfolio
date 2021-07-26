import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './assets/style/Accordion.css'
import MainPage from './pages/MainPage';


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
