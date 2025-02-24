import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

import './global.css';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<App />);
