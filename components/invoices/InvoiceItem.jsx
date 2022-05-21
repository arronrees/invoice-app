import Link from 'next/link';

export default function InvoiceItem() {
  return (
    <article className='p-6 bg-white rounded-lg shadow-xs drop-shadow-md mb-6 last-of-type:mb-0 transition duration-300 border-2 border-white hover:border-mid-purple hover:drop-shadow-lg'>
      <Link href='/'>
        <a>
          <div className='mb-6 flex justify-between items-center'>
            <h3 className='font-bold text-sm'>#RT3080</h3>
            <p className='font-normal text-sm text-mid-grey'>Jensen Huang</p>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-normal text-sm text-mid-grey mb-1'>
                Due 19 Aug 2022
              </p>
              <h4 className='font-bold text-xl'>
                <span className='mr-1'>£</span>
                1800.90
              </h4>
            </div>
            <div className='flex items-center justify-center py-3 px-8 rounded-lg bg-light-green text-green'>
              <span className='bg-green w-2 h-2 rounded-full mr-4'></span>
              <span className='inline-block  font-bold'>Paid</span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
