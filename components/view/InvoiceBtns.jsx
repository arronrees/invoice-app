export default function InvoiceBtns({ className }) {
  return (
    <div className={className}>
      <button className='inline-block text-center font-bold bg-x-light-grey text-light-blue px-8 py-6 rounded-full transition duration-300 hover:bg-light-grey focus:ring-2 ring-bg-light-grey ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
        Edit
      </button>
      <button className='inline-block text-center font-bold bg-mid-red text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-red focus:ring-2 ring-mid-red ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
        Delete
      </button>
      <button className='inline-block text-center font-bold bg-mid-purple text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-purple focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none lg:text-lg'>
        Mark as paid
      </button>
    </div>
  );
}
