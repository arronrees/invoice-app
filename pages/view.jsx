import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import Chevron from '../components/icons/Chevron';

export default function Home() {
  return (
    <Layout>
      <div className='lg:flex'>
        <Header />
        <Wrapper>
          <Link href='/'>
            <a className='flex py-8 px-4 items-center'>
              <Chevron className='rotate-90' />
              <span className='font-bold ml-4'>Go Back</span>
            </a>
          </Link>
          <section className='flex items-center justify-between bg-white p-4 rounded-lg shadow-xs drop-shadow-md mb-6 xs:p-6 sm:p-8 lg:justify-start'>
            <p className='lg:mr-6'>Status</p>
            <div className='flex items-center justify-center py-3 px-8 rounded-lg bg-light-green text-green md:text-lg lg:mr-6'>
              <span className='bg-green w-2 h-2 rounded-full mr-4'></span>
              <span className='inline-block  font-bold'>Paid</span>
            </div>
            <div className='hidden lg:flex lg:ml-auto'>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-x-light-grey text-light-blue px-8 py-6 rounded-full transition duration-300 hover:bg-light-grey focus:ring-2 ring-x-light-grey ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
                  Edit
                </a>
              </Link>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-mid-red text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-red focus:ring-2 ring-mid-red ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
                  Delete
                </a>
              </Link>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-mid-purple text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-purple focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none lg:text-lg'>
                  Mark as paid
                </a>
              </Link>
            </div>
          </section>
          <div className='bg-white p-4 rounded-lg shadow-xs drop-shadow-md mb-6 xs:p-6 sm:p-8'>
            <section className='md:flex md:justify-between'>
              <div>
                <p className='font-bold xs:text-lg'>#XM9141</p>
                <p className='text-light-blue mb-8 xs:text-lg'>
                  Graphic Design
                </p>
              </div>
              <address>
                <ul className='text-light-blue not-italic text-sm xs:text-base'>
                  <li>19 Union Terrace</li>
                  <li>London</li>
                  <li>E1 3EZ</li>
                  <li>United Kingdom</li>
                </ul>
              </address>
            </section>
            <section className='pt-8 md:flex'>
              <div className='flex pb-4'>
                <div className='pr-8 sm:pr-32'>
                  <p className='text-light-blue text-sm xs:text-base'>
                    Invoice Date
                  </p>
                  <p className='font-bold xs:text-lg pb-4'>21 Aug 2022</p>
                  <p className='text-light-blue text-sm xs:text-base'>
                    Payment Due
                  </p>
                  <p className='font-bold xs:text-lg'>20 Sept 2022</p>
                </div>
                <div>
                  <p className='text-light-blue text-sm xs:text-base'>
                    Bill To
                  </p>
                  <p className='font-bold text-lg pb-1'>Alex Grim</p>
                  <address>
                    <ul className='not-italic text-light-blue text-sm xs:text-base'>
                      <li>82 Church Way</li>
                      <li>Bradford</li>
                      <li>DB1 9PB</li>
                      <li>United Kingdom</li>
                    </ul>
                  </address>
                </div>
              </div>
              <div className='md:pl-32'>
                <p className='font-bold text-lg'>Sent to</p>
                <p className='text-light-blue'>alexgrim@mail.com</p>
              </div>
            </section>
            <section className='bg-x-light-grey mt-8 rounded-xl'>
              <ul className='px-4 py-8 xs:px-8'>
                <li className='pb-2 last-of-type:pb-0'>
                  <p className='font-bold text-lg pb-1'>Banner Design</p>
                  <div className='flex justify-between items-end'>
                    <p className='text-light-blue'>
                      <span>1</span> <span>x</span> <span>£156.00</span>
                    </p>
                    <p className='text-lg font-semibold'>£156.00</p>
                  </div>
                </li>
                <li className='pb-2 last-of-type:pb-0'>
                  <p className='font-bold text-lg pb-1'>Email Design</p>
                  <div className='flex justify-between items-end'>
                    <p className='text-light-blue'>
                      <span>2</span> <span>x</span> <span>£200.00</span>
                    </p>
                    <p className='text-lg font-semibold'>£400.00</p>
                  </div>
                </li>
              </ul>
              <div className='bg-dark-blue text-white flex justify-between items-center py-8 px-4 xs:px-8 rounded-b-xl'>
                <p className='font-light'>Grand Total</p>
                <p className='text-xl font-semibold sm:text-3xl'>£556.00</p>
              </div>
            </section>
            <section className='mt-6 flex items-center flex-col sm:flex-row lg:hidden'>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-x-light-grey text-light-blue px-8 py-6 rounded-full transition duration-300 hover:bg-light-grey focus:ring-2 ring-x-light-grey ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
                  Edit
                </a>
              </Link>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-mid-red text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-red focus:ring-2 ring-mid-red ring-offset-2 focus:outline-none mb-4 lg:text-lg sm:mb-0 sm:mr-4'>
                  Delete
                </a>
              </Link>
              <Link href='/'>
                <a className='inline-block text-center font-bold bg-mid-purple text-white px-8 py-6 rounded-full transition duration-300 hover:bg-light-purple focus:ring-2 ring-mid-purple ring-offset-2 focus:outline-none lg:text-lg'>
                  Mark as paid
                </a>
              </Link>
            </section>
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
}
