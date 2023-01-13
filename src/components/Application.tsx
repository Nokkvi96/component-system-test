import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { globalStyles } from 'src/theme';
import { router } from 'src/router';

const Application: React.FC = () => {
  globalStyles();

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default Application;
