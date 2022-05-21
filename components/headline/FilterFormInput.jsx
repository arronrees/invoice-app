export default function FilterFormInput({ id, name, text }) {
  return (
    <label
      htmlFor={id}
      className='appearance-none flex items-center cursor-pointer font-semibold mb-2 last-of-type:mb-0'
    >
      <input
        type='checkbox'
        name={name}
        id={id}
        className='mr-2 appearance-none rounded-sm text-mid-purple p-2 bg-light-grey border-light-grey focus:ring-2 focus:ring-mid-purple'
      />
      {text}
    </label>
  );
}
