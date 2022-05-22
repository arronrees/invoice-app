import NewBtn from '../buttons/NewBtn';
import Filter from '../headline/Filter';

export default function Headline() {
  return (
    <section className='py-8 flex items-center justify-between'>
      <div>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
          Invoices
        </h1>
        <p className='font-medium text-xs text-mid-grey md:text-base lg:text-xl'>
          7 Invoices
        </p>
      </div>
      <Filter />
      <NewBtn />
    </section>
  );
}
