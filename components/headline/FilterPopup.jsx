import { Popover } from '@headlessui/react';
import FilterForm from './FilterForm';

export default function FilterPopup() {
  return (
    <Popover className='relative'>
      <Popover.Button>
        <span className='sm:pr-1'>Filter</span>
        <span className='hidden sm:block'>by status</span>
        <span className='ml-2'>
          <svg
            width='10'
            height='7'
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='transition duration-300'
          >
            <path
              d='M1 1L5.2279 5.2279L9.4558 1'
              stroke='#7C5DFA'
              strokeWidth='2'
            />
          </svg>
        </span>
      </Popover.Button>

      <Popover.Panel className='absolute z-10'>
        <FilterForm />
      </Popover.Panel>
    </Popover>
  );
}
