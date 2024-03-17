// pages/index.tsx
'use client'

import React from 'react';
import Button from '../../components/Button';

const ClientSidePage: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked on client-side!');
  };

  return (
    <div>
      <h1>Client-Side Page</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default ClientSidePage;