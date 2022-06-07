export default function BillTo() {
  return (
    <section className='mb-8'>
      <h2 className='font-bold text-mid-purple mb-2 text-xl'>Bill To</h2>
      <div className='mb-4'>
        <label className='block' htmlFor='name'>
          <span className='text-mid-grey inline-block pb-1'>Client Name</span>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
      <div className='mb-4'>
        <label className='block' htmlFor='email'>
          <span className='text-mid-grey inline-block pb-1'>Client Email</span>
          <input
            type='text'
            name='email'
            id='email'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
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
      <div className='mb-4'>
        <label className='block' htmlFor='invoiceDate'>
          <span className='text-mid-grey inline-block pb-1'>Invoice Date</span>
          <input
            type='date'
            name='invoiceDate'
            id='invoiceDate'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
      <div className='mb-4'>
        <label className='block' htmlFor='paymentTerms'>
          <span className='text-mid-grey inline-block pb-1'>Payment Terms</span>
          <select
            type='text'
            name='paymentTerms'
            id='paymentTerms'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          >
            <option value='30'>30 Days</option>
            <option value='60'>60 Days</option>
            <option value='90'>90 Days</option>
          </select>
        </label>
      </div>
      <div className='mb-4'>
        <label className='block' htmlFor='description'>
          <span className='text-mid-grey inline-block pb-1'>
            Invoice Description
          </span>
          <input
            type='text'
            name='description'
            id='description'
            className='block w-full rounded-md border-light-grey bg-transparent font-bold'
          />
        </label>
      </div>
    </section>
  );
}
