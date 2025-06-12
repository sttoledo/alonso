import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="container">
      <main style={{ flex: 1 }}>
        <Hero />
      </main> 
    </div>
  );
}

export default App;