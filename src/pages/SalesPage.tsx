import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

export default function SalesPage() {
  return (
    <div className="flex flex-col p-8">
      <header className="border-b-2 border-neutral-200">
        <h2 className="my-4 text-4xl font-bold">Sales</h2>
        <nav className="flex gap-3">
          <SalesNavLink to="">Overview</SalesNavLink>
          <SalesNavLink to="subscriptions">Subscriptions</SalesNavLink>
          <SalesNavLink to="invoices">Invoices</SalesNavLink>
          <SalesNavLink to="customers">Customers</SalesNavLink>
          <SalesNavLink to="deposits">Deposits</SalesNavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

function SalesNavLink(props: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-1 font-semibold ${
          isActive ? 'text-neutral-900' : 'text-neutral-400'
        }`
      }
      {...props}
    >
      {props.children}
    </NavLink>
  );
}
