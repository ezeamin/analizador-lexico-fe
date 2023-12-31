import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import App from './App.jsx';
import ErrorBoundary from './error/ErrorBoundary.jsx';
import SymbolsModal from './components/Symbols/SymbolsModal.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <App />
        <SymbolsModal />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
