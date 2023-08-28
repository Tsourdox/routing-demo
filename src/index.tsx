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
import AccountsPage from './pages/AccountsPage';
import DashboardPage from './pages/DashboardPage';
import ExpensesPage from './pages/ExpensesPage';
import ReportsPage from './pages/ReportsPage';
import SalesPage from './pages/SalesPage';
import InvoicesPage from './pages/sales/InvoicesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="accounts" element={<AccountsPage />} />
      <Route path="sales" element={<SalesPage />}>
        <Route index element={<div>Overview</div>} />
        <Route path="subscriptions" element={<div>Subscriptions</div>} />
        <Route path="invoices" element={<InvoicesPage />}>
          <Route path=":id" element={<div>INVOICE DETAILS</div>} />
        </Route>
        <Route path="customers" element={<div>Customers</div>} />
        <Route path="deposits" element={<div>Deposits</div>} />
      </Route>
      <Route path="expenses" element={<ExpensesPage />} />
      <Route path="reports" element={<ReportsPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
