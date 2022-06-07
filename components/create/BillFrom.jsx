export default function BillFrom() {
  return (
    <section className='mb-8'>
      <h2 className='font-bold text-mid-purple mb-2 text-xl'>Bill From</h2>
      <div className='mb-4'>
        <label className='block' htmlFor='streetAddress'>
          <span className='text-mid-grey inline-block pb-1'>
            Street Address
          </span>
          <input
            type='text'
            name='streetAddress'
            id='streetAddress'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
      <div className='mb-4 grid grid-cols-2 gap-4 md:grid-cols-3'>
        <label className='block' htmlFor='city'>
          <span className='text-mid-grey inline-block pb-1'>City</span>
          <input
            type='text'
            name='city'
            id='city'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold ring-orange'
          />
        </label>
        <label className='block' htmlFor='postcode'>
          <span className='text-mid-grey inline-block pb-1'>Postcode</span>
          <input
            type='text'
            name='postcode'
            id='postcode'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
        <label
          className='block mb-4 col-span-2 md:col-span-1'
          htmlFor='country'
        >
          <span className='text-mid-grey inline-block pb-1'>Country</span>
          <input
            type='text'
            name='country'
            id='country'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
    </section>
  );
}
