import React from 'react';

interface ButtonProps {
  onClick?: () => void; // Make onClick optional
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  if (typeof window === 'undefined') {
    // Server-side rendering: return button without onClick prop
    return <button>{children}</button>;
  }

  // Client-side rendering: attach onClick prop
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
