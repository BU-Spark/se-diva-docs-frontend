import React from 'react';
import companyLogo from './path/to/logo.jpg';

const Welcome = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <img src={companyLogo} alt="BigCo Inc. logo"/>
      <h1>Welcome to Black Women MD Network</h1>
    </div>
  );
};
  
export default Welcome;