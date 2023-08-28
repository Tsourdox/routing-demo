import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex h-screen">
      <aside className="flex flex-col w-48 gap-4 p-4 bg-neutral-100">
        <h1 className="text-2xl font-bold text-green-400">Fakebooks</h1>

        <nav className="flex flex-col">
          <SidebarNavLink to="">Dashboard</SidebarNavLink>
          <SidebarNavLink to="accounts">Accounts</SidebarNavLink>
          <SidebarNavLink to="sales">Sales</SidebarNavLink>
          <SidebarNavLink to="expenses">Expenses</SidebarNavLink>
          <SidebarNavLink to="reports">Reports</SidebarNavLink>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

function SidebarNavLink(props: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-1 font-semibold rounded-lg ${isActive && 'bg-neutral-200'}`
      }
      {...props}
    >
      {props.children}
    </NavLink>
  );
}
