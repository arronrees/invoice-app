import FilterFormInput from './FilterFormInput';

export default function FilterForm() {
  return (
    <form className='absolute shadow-xs drop-shadow-xl p-6 pr-24 pl-8 bg-white rounded-lg left-0 transition duration-300 z-10 -bottom-36'>
      <FilterFormInput id='draft' name='draft' text='Draft' />
      <FilterFormInput id='pending' name='pending' text='Pending' />
      <FilterFormInput id='paid' name='paid' text='Paid' />
    </form>
  );
}
