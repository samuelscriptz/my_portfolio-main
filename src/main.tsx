import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import LoaderProgressiveBar from './components/ui/loader-progressive-bar';
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.querySelector('section#hero video') as HTMLVideoElement;

    const finishLoading = () => {
      setIsLoading(false);
      
      // Show main content
      const content = document.getElementById('app-content');
      if (content) {
        content.style.opacity = '1';
        content.style.visibility = 'visible';
      }
    };

    // Enforce a 4-second wait time to ensure the loading animation is visible
    const timer = setTimeout(finishLoading, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f0f]">
        <LoaderProgressiveBar />
      </div>
    );
  }

  return null;
};

const loaderRoot = document.getElementById('loader-root');
if (loaderRoot) {
  ReactDOM.createRoot(loaderRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
