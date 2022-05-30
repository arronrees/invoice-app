export default function InvoiceNumbers() {
  return (
    <section className='bg-x-light-grey mt-8 rounded-xl'>
      <ul className='px-4 py-8 xs:px-8'>
        <li className='pb-2 last-of-type:pb-0'>
          <p className='font-bold text-lg pb-1'>Banner Design</p>
          <div className='flex justify-between items-end'>
            <p className='text-light-blue'>
              <span>1</span> <span>x</span> <span>£156.00</span>
            </p>
            <p className='text-lg font-semibold'>£156.00</p>
          </div>
        </li>
        <li className='pb-2 last-of-type:pb-0'>
          <p className='font-bold text-lg pb-1'>Email Design</p>
          <div className='flex justify-between items-end'>
            <p className='text-light-blue'>
              <span>2</span> <span>x</span> <span>£200.00</span>
            </p>
            <p className='text-lg font-semibold'>£400.00</p>
          </div>
        </li>
      </ul>
      <div className='bg-dark-blue text-white flex justify-between items-center py-8 px-4 xs:px-8 rounded-b-xl'>
        <p className='font-light'>Grand Total</p>
        <p className='text-xl font-semibold sm:text-3xl'>£556.00</p>
      </div>
    </section>
  );
}
