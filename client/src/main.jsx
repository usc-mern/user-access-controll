import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider, } from 'react-query';
import AuthProvider from './contexts/AuthProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <ToastContainer position='top-center' />
        <App />
      </AuthProvider>

    </QueryClientProvider>
  </React.StrictMode>,
)
