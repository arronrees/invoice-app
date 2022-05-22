import InvoiceItem from './InvoiceItem';
import NoInvoices from './NoInvoices';

export default function InvoiceGrid() {
  return (
    <section className='py-8'>
      <InvoiceItem />
      <NoInvoices />
    </section>
  );
}
