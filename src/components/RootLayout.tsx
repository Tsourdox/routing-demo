import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-24 bg-neutral-100">Fakebooks</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
