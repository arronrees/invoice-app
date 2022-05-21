import { useState } from 'react';

export default function Filter() {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className='ml-auto mr-6 relative'>
      <button
        type='button'
        className='flex items-center font-semibold text-sm'
        onClick={() => setFilterActive(!filterActive)}
      >
        <span className='sm:pr-1'>Filter</span>
        <span className='hidden sm:block'>by status</span>
        <span className='ml-2'>
          <svg
            width='10'
            height='7'
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`transition duration-300 ${
              filterActive ? 'rotate-180' : ''
            }`}
          >
            <path
              d='M1 1L5.2279 5.2279L9.4558 1'
              stroke='#7C5DFA'
              strokeWidth='2'
            />
          </svg>
        </span>
      </button>
      <form
        className={`absolute shadow-xs drop-shadow-xl p-6 pr-20 bg-white rounded-lg left-1/2 -translate-x-1/2 -bottom-40 transition duration-300 ${
          filterActive
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <label
          htmlFor='draft'
          className=' flex items-center mb-2 cursor-pointer font-semibold'
        >
          <input
            type='checkbox'
            name='draft'
            id='draft'
            className='mr-2 appearance-none rounded-sm text-mid-purple p-2 bg-light-grey border-light-grey focus:ring-2 focus:ring-mid-purple'
          />
          Draft
        </label>
        <label
          htmlFor='pending'
          className='appearance-none flex items-center mb-2 cursor-pointer font-semibold'
        >
          <input
            type='checkbox'
            name='pending'
            id='pending'
            className='mr-2 appearance-none rounded-sm text-mid-purple p-2 bg-light-grey border-light-grey focus:ring-2 focus:ring-mid-purple'
          />
          Pending
        </label>
        <label
          htmlFor='paid'
          className='appearance-none flex items-center cursor-pointer font-semibold'
        >
          <input
            type='checkbox'
            name='paid'
            id='paid'
            className='mr-2 appearance-none rounded-sm text-mid-purple p-2 bg-light-grey border-light-grey focus:ring-2 focus:ring-mid-purple'
          />
          Paid
        </label>
      </form>
    </div>
  );
}
