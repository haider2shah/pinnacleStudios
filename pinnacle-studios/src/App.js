import './App.css';
import { HomePage, AboutUsPage, ServicesPage, ContactUsPage } from './components';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="aboutuspage" element={<AboutUsPage />}></Route>
      <Route exact path="servicespage" element={<ServicesPage />}></Route>
      <Route exact path="contactuspage" element={<ContactUsPage />}></Route>
    </Routes>

  );
}

export default App;
