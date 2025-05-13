
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Validate root element exists
if (!rootElement) {
  console.error('Failed to find root element');
  throw new Error('Failed to find the root element');
}

// Create root and render with proper error handling
try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Error rendering application:", error);
}
