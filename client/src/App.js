import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
    <Welcome />
    <About />
    <Footer />
    <Navbar />
    <Login />
    <Profile />
    <Signup />
    </div>
  );
}

export default App;
