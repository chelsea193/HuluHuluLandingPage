import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AppV2 from './v2/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppV2 />
  </StrictMode>,
);
