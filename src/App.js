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
        <Link to="/secondPage" className="button" style={{ textDecoration: 'none' }}>
          Start
        </Link>
        <Link to="/levels" className="button" style={{ textDecoration: 'none' }}>
          Choose Level
        </Link>
        <Link to="/language" className="button" style={{ textDecoration: 'none' }}>
          Choose Language
        </Link>
      </div>
    </div>
  );
}

export default App;
