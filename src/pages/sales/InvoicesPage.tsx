import { NavLink, Outlet } from 'react-router-dom';

interface Invoice {
  id: number;
  title: string;
  price: string;
}

export const mockedInvoices: Invoice[] = [
  {
    id: 1234,
    title: 'Santa Monica',
    price: '$10,800',
  },
  {
    id: 1233,
    title: 'Stankonia',
    price: '$8000',
  },
  {
    id: 2232,
    title: 'Ocean Avenue',
    price: '$9,500',
  },
];

export default function InvoicePage() {
  return (
    <div className="flex flex-col flex-1 gap-6 mt-4">
      <header className="flex gap-6">
        <h3 className="uppercase text-neutral-400">Overdue</h3>
        <div className="flex-1 h-6 bg-green-400 rounded-full"></div>
        <h3 className="uppercase text-neutral-400">Due Soon</h3>
      </header>

      <section className="flex flex-col flex-1">
        <h3 className="uppercase text-neutral-400">Invoice List</h3>

        <div className="flex flex-1 border-2 rounded-lg border-neutral-300">
          <div className="flex-1 border-r-2 border-neutral-300">
            {mockedInvoices.map((invoice) => (
              <InvoiceNavLink invoice={invoice} />
            ))}
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

interface Props {
  invoice: Invoice;
}

function InvoiceNavLink({ invoice }: Props) {
  return (
    <NavLink
      to={String(invoice.id)}
      key={invoice.id}
      className="flex justify-between p-4"
    >
      <h4 className="font-semibold text-neutral-900">{invoice.title}</h4>
      <h4 className="font-semibold text-neutral-900">{invoice.price}</h4>
    </NavLink>
  );
}
