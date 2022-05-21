import FilterFormInput from './FilterFormInput';

export default function FilterForm({ filterActive }) {
  return (
    <form
      className={`absolute shadow-xs drop-shadow-xl p-6 pr-20 bg-white rounded-lg left-1/2 -translate-x-1/2 transition duration-300 z-10 ${
        filterActive
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <FilterFormInput id='draft' name='draft' text='Draft' />
      <FilterFormInput id='pending' name='pending' text='Pending' />
      <FilterFormInput id='paid' name='paid' text='Paid' />
    </form>
  );
}
