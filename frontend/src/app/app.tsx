import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {topic} from '../params/header_params';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
    <Header />
    <main>
    <div className="container">
      <div className="left">
        <div className="photo-container">
          {/* Photo Content */}
        </div>
      </div>
      <div className="right">
        <div className="buttons">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
        <div className="photo-container">
          {/* Photo Content */}
        </div>
        <div className="photo-container">
          {/* Photo Content */}
        </div>
        <div className="photo-container">
          {/* Photo Content */}
        </div>
      </div>
    </div>
    </main>
    <Footer />
    </div>
  );
}

export default App;