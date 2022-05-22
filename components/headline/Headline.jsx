import NewBtn from '../buttons/NewBtn';
import Filter from '../headline/Filter';

export default function Headline() {
  return (
    <section className='px-6 py-8 flex items-center justify-between max-w-5xl mx-auto'>
      <div>
        <h1 className='font-bold text-xl'>Invoices</h1>
        <p className='font-medium text-xs text-mid-grey'>7 Invoices</p>
      </div>
      <Filter />
      <NewBtn />
    </section>
  );
}
