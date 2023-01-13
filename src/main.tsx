import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from '@components/Application';

import './assets/fonts/Poppins/Poppins-Bold.ttf';
import './assets/fonts/Poppins/Poppins-Medium.ttf';
import './assets/fonts/Poppins/Poppins-Regular.ttf';
import './assets/fonts/Poppins/Poppins-SemiBold.ttf';

import './assets/fonts/Lora/Lora-Bold.ttf';
import './assets/fonts/Lora/Lora-Italic.ttf';
import './assets/fonts/Lora/Lora-Medium.ttf';
import './assets/fonts/Lora/Lora-Regular.ttf';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <Application />;

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
