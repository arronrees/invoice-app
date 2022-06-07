import Link from 'next/link';

export default function CreateBtns() {
  return (
    <div className='flex items-center flex-col sm:flex-row'>
      <Link href='/'>
        <a className='inline-block text-center font-bold bg-x-light-grey text-light-blue px-8 py-6 rounded-full transition duration-300 hover:bg-light-grey focus:ring-2 ring-bg-light-grey ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-auto'>
          Discard
        </a>
      </Link>
      <button className='inline-block text-center font-bold bg-dark-grey text-white px-8 py-6 rounded-full transition duration-300 hover:bg-dark-blue focus:ring-2 ring-dark-grey ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
        Save as Draft
      </button>
      <button className='inline-block text-center font-bold bg-mid-purple text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-purple focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none lg:text-lg'>
        Save & Send
      </button>
    </div>
  );
}
