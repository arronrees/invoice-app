export default function NewItem() {
  return (
    <div className='mb-4'>
      <label className='block' htmlFor='itemName'>
        <span className='text-mid-grey inline-block pb-1'>Item Name</span>
        <input
          type='text'
          name='itemName'
          id='itemName'
          className='block w-full rounded-md border-light-grey bg-transparent font-bold'
        />
      </label>
      <div className='mt-4 grid grid-cols-4 gap-x-4 items-center'>
        <p className='text-mid-grey pb-2'>Qty.</p>
        <p className='text-mid-grey pb-2'>Price</p>
        <p className='text-mid-grey pb-2'>Total</p>
        <p className='text-mid-grey pb-2'></p>
        <input
          type='text'
          name='qty'
          id='qty'
          className='block w-full rounded-md border-light-grey bg-transparent font-bold'
        />
        <input
          type='text'
          name='price'
          id='price'
          className='block w-full rounded-md border-light-grey bg-transparent font-bold'
        />
        <p className='font-bold text-mid-grey'>400.00</p>
        <button className='flex items-center justify-center hover:text-mid-red transition duration-300'>
          <svg
            width='13'
            height='16'
            viewBox='0 0 13 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.44442 0L9.33333 0.888875H12.4444V2.66667H0V0.888875H3.11108L4 0H8.44442ZM2.66667 16C1.68442 16 0.888875 15.2045 0.888875 14.2222V3.55554H11.5555V14.2222C11.5555 15.2045 10.76 16 9.77779 16H2.66667Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
