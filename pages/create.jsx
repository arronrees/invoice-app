import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import GoBack from '../components/layout/GoBack';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Wrapper className='bg-white'>
        <GoBack href='/' />
        <div>
          <h1 className='font-semibold text-3xl mb-6'>New Invoice</h1>
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2'>Bill From</h2>
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
            <div className='mb-4 grid grid-cols-2 gap-4'>
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
                <span className='text-mid-grey inline-block pb-1'>
                  Postcode
                </span>
                <input
                  type='text'
                  name='postcode'
                  id='postcode'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block' htmlFor='country'>
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
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2'>Bill To</h2>
            <div className='mb-4'>
              <label className='block' htmlFor='name'>
                <span className='text-mid-grey inline-block pb-1'>
                  Client Name
                </span>
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
                <span className='text-mid-grey inline-block pb-1'>
                  Client Email
                </span>
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
            <div className='mb-4 grid grid-cols-2 gap-4'>
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
                <span className='text-mid-grey inline-block pb-1'>
                  Postcode
                </span>
                <input
                  type='text'
                  name='postcode'
                  id='postcode'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block' htmlFor='country'>
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
                <span className='text-mid-grey inline-block pb-1'>
                  Invoice Date
                </span>
                <input
                  type='date'
                  name='invoiceDate'
                  id='invoiceDate'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block' htmlFor='country'>
                <span className='text-mid-grey inline-block pb-1'>Country</span>
                <select
                  type='text'
                  name='country'
                  id='country'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                >
                  <option value='30'>30 Days</option>
                  <option value='60'>60 Days</option>
                  <option value='90'>90 Days</option>
                </select>
              </label>
            </div>
          </section>
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2'>Item List</h2>
            <div className='mb-4'>
              <label className='block' htmlFor='itemName'>
                <span className='text-mid-grey inline-block pb-1'>
                  Item Name
                </span>
                <input
                  type='text'
                  name='itemName'
                  id='itemName'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
              </label>
              <div className='mt-4 grid grid-cols-4 gap-x-4 items-center'>
                <p className='text-mid-grey pb-2'>Qty.</p>
                <p className='text-mid-grey pb-2'>Price</p>
                <p className='text-mid-grey pb-2'>Total</p>
                <p className='text-mid-grey pb-2'></p>
                <input
                  type='text'
                  name='qty'
                  id='qty'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
                <input
                  type='text'
                  name='price'
                  id='price'
                  className='block w-full rounded-md border-light-grey bg-transparent font-bold'
                />
                <p className='font-bold text-mid-grey'>400.00</p>
                <button className='flex items-center justify-center hover:text-mid-red transition duration-300'>
                  <svg
                    width='13'
                    height='16'
                    viewBox='0 0 13 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.44442 0L9.33333 0.888875H12.4444V2.66667H0V0.888875H3.11108L4 0H8.44442ZM2.66667 16C1.68442 16 0.888875 15.2045 0.888875 14.2222V3.55554H11.5555V14.2222C11.5555 15.2045 10.76 16 9.77779 16H2.66667Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </Layout>
  );
}
