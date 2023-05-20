import './App.css';
import { HomePage, AboutUsPage, ServicesPage } from './components';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="aboutuspage" element={<AboutUsPage />}></Route>
      <Route exact path="servicespage" element={<ServicesPage />}></Route>
    </Routes>

  );
}

export default App;
