import Link from 'next/link';
import NewItem from './NewItem';

export default function ItemList() {
  return (
    <section className='mb-8'>
      <h2 className='font-bold text-mid-purple mb-2 text-xl'>Item List</h2>
      <NewItem />
      <div className='mb-4'>
        <button
          type='button'
          className='w-full flex items-center justify-center text-center font-bold bg-x-light-grey text-light-blue px-8 py-4 rounded-full transition duration-300 hover:bg-light-grey focus:ring-2 ring-bg-light-grey ring-offset-2 focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
            className='h-6 w-6 mr-2'
          >
            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
          </svg>
          <span>Add New Item</span>
        </button>
      </div>
    </section>
  );
}
