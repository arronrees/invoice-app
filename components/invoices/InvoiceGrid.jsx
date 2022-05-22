import InvoiceItem from './InvoiceItem';
import NoInvoices from './NoInvoices';

export default function InvoiceGrid() {
  return (
    <section className='px-4 py-8 max-w-5xl mx-auto'>
      <InvoiceItem />
      <NoInvoices />
    </section>
  );
}
