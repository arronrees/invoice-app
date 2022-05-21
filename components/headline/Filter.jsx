import { useState } from 'react';
import FilterForm from './FilterForm';

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
      <FilterForm filterActive={filterActive} />
    </div>
  );
}
