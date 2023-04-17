import React from 'react';
import Home from './Home';

const MainHome =() => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  return <Home onLogin={handleLogin} onSearch={handleSearch} />;
}

export default MainHome;

