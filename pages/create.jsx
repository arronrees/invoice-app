import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import GoBack from '../components/layout/GoBack';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <GoBack href='/' />
        <div className='bg-white p-6 rounded-lg shadow-xs drop-shadow-md mb-6'>
          <h1 className='font-semibold text-3xl mb-6'>New Invoice</h1>
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2 text-xl'>
              Bill From
            </h2>
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
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2 text-xl'>Bill To</h2>
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
              <label className='block' htmlFor='paymentTerms'>
                <span className='text-mid-grey inline-block pb-1'>
                  Payment Terms
                </span>
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
          <section className='mb-8'>
            <h2 className='font-bold text-mid-purple mb-2 text-xl'>
              Item List
            </h2>
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
            <div className='mt-6 flex items-center flex-col sm:flex-row lg:hidden'>
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
          </section>
        </div>
      </Wrapper>
    </Layout>
  );
}
