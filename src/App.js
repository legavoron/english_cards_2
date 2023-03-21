import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={logo} alt="english cards" className='logo'/>
      </div>
      <div className="button-container">
        <Link to="/create" className="button" style={{ textDecoration: 'none' }}>
          Create Card
        </Link>
        <Link to="/levels" className="button" style={{ textDecoration: 'none' }}>
          Choose Level
        </Link>
        <Link to="/language" className="button" style={{ textDecoration: 'none' }}>
          Choose Language
        </Link>
        <Link to="/secondPage" className="button" style={{ textDecoration: 'none' }}>
          Start
        </Link>
      </div>
    </div>
  );
}

export default App;