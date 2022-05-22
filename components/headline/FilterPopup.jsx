import { Popover } from '@headlessui/react';
import FilterForm from './FilterForm';
import Chevron from '../icons/Chevron';

export default function FilterPopup() {
  return (
    <Popover className='relative'>
      <Popover.Button>
        <span className='sm:pr-1'>Filter</span>
        <span className='hidden sm:block'>by status</span>
        <span className='ml-2'>
          <Chevron />
        </span>
      </Popover.Button>

      <Popover.Panel className='absolute z-10'>
        <FilterForm />
      </Popover.Panel>
    </Popover>
  );
}
