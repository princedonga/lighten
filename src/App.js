// src/App.js

import React, { useState, useEffect } from 'react';
import Layout from './Componets/Layout';
import Preloader from './Componets/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Preloader /> : <Layout />}
      
    </div>
  );
}

export default App;
