import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import SparkFlowPortfolio from './SparkFlowPortfolio.jsx';
import TutorialsPage from './TutorialsPage.jsx';
import './index.css';

const AppRouter = () => {
  const [path, setPath] = useState(window.location.pathname + window.location.hash);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname + window.location.hash);
    window.addEventListener('popstate', onPopState);
    const onClick = (e) => {
      const anchor = e.target.closest('a[data-spa-link]');
      if (anchor && anchor.getAttribute('href')) {
        const href = anchor.getAttribute('href');
        e.preventDefault();
        navigate(href);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const navigate = (href) => {
    window.history.pushState({}, '', href);
    setPath(window.location.pathname + window.location.hash);
    window.scrollTo(0, 0);
  };

  if (path.startsWith('/tutorials')) {
    return <TutorialsPage navigate={navigate} />;
  }

  return <SparkFlowPortfolio navigate={navigate} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
