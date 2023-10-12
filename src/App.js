import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './Routes/routes';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';

function App() {
  const routing = useRoutes(routes)
  return (
    <div className="container-fluid-main-container">
      <Navbar />
      <div className="body-background-color">
        {routing}
      </div>
    </div>
  );
}

export default App;
