
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Robust error handling for root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find root element');
  throw new Error('Failed to find the root element');
}

// Create root with explicit error handling
try {
  const root = createRoot(rootElement);
  
  // Render without StrictMode to prevent double mounting issues
  root.render(<App />);
} catch (error) {
  console.error("Error rendering application:", error);
}
