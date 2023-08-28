import { useParams } from 'react-router-dom';
import { mockedInvoices } from './InvoicesPage';

export default function InvoicePage() {
  const params = useParams();

  const invoice = mockedInvoices.find(
    (invoice) => String(invoice.id) === params.id
  );

  if (!invoice) return null;

  return <div>INVOICE DETAILS: {invoice.title}</div>;
}
