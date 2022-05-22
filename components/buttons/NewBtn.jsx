export default function NewBtn() {
  return (
    <button className='flex items-center font-bold bg-mid-purple text-white p-2 rounded-full transition duration-300 hover:bg-light-purple focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none lg:text-lg'>
      <span className='bg-white rounded-full p-2 flex items-center justify-center mr-2 w-8 h-8'>
        <svg
          width='11'
          height='11'
          viewBox='0 0 11 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.31311 10.0234V6.3136H10.0229V3.73327H6.31311V0.0234375H3.73278V3.73327H0.0229492V6.3136H3.73278V10.0234H6.31311Z'
            fill='#7C5DFA'
          />
        </svg>
      </span>
      <span className='pr-4 sm:pr-1'>New</span>
      <span className='hidden sm:block sm:pr-4'>Invoice</span>
    </button>
  );
}
