import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<div>Dashboard</div>} />
      <Route path="accounts" element={<div>Accounts</div>} />
      <Route path="sales" element={<div>Sales</div>} />
      <Route path="expenses" element={<div>Expenses</div>} />
      <Route path="reports" element={<div>Reports</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
