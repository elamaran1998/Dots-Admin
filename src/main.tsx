// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './Redux/store.tsx';
// import { BrowserRouter } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
   
  // </StrictMode>,
)
