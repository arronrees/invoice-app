import InvoiceBtns from './InvoiceBtns';

export default function Status() {
  return (
    <section className='flex items-center justify-between bg-white p-4 rounded-lg shadow-xs drop-shadow-md mb-6 xs:p-6 sm:p-8 lg:justify-start'>
      <p className='lg:mr-6'>Status</p>
      <div className='flex items-center justify-center py-3 px-8 rounded-lg bg-light-green text-green md:text-lg lg:mr-6'>
        <span className='bg-green w-2 h-2 rounded-full mr-4'></span>
        <span className='inline-block  font-bold'>Paid</span>
      </div>
      <InvoiceBtns className='hidden lg:flex lg:ml-auto' />
    </section>
  );
}
