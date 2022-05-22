import Link from 'next/link';

export default function InvoiceItem() {
  return (
    <article className='mb-6 last-of-type:mb-0'>
      <Link href='/'>
        <a className='block p-6 bg-white rounded-lg shadow-xs drop-shadow-md transition duration-300 border-2 border-white hover:ring-2 hover:drop-shadow-lg focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none w-full md:flex md:justify-between md:items-center'>
          <div className='mb-6 flex justify-between items-center md:mb-0'>
            <h3 className='font-bold text-sm md:mr-8 md:text-lg'>#RT3080</h3>
            <p className='font-normal text-sm text-mid-grey md:text-lg'>
              Jensen Huang
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='md:flex md:items-center'>
              <p className='font-normal text-sm text-mid-grey mb-1 md:mb-0 md:text-lg'>
                Due 19 Aug 2022
              </p>
              <h4 className='font-bold text-xl md:mx-8'>
                <span className='mr-1'>£</span>
                1800.90
              </h4>
            </div>
            <div className='flex items-center justify-center py-3 px-8 rounded-lg bg-light-green text-green md:text-lg'>
              <span className='bg-green w-2 h-2 rounded-full mr-4'></span>
              <span className='inline-block  font-bold'>Paid</span>
            </div>
          </div>
          <div className='hidden'>
            <svg
              width='7'
              height='10'
              viewBox='0 0 7 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L5 5L1 9' stroke='#7C5DFA' strokeWidth='2' />
            </svg>
          </div>
        </a>
      </Link>
    </article>
  );
}
