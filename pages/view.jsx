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
          <div className='flex p-8 items-center'>
            <Chevron className='rotate-90' />
            <span className='font-bold ml-4'>Go Back</span>
          </div>
          <section className='flex items-center justify-between bg-white p-6 rounded-lg shadow-xs drop-shadow-md mb-6'>
            <p>Status</p>
            <div className='flex items-center justify-center py-3 px-8 rounded-lg bg-light-green text-green md:text-lg'>
              <span className='bg-green w-2 h-2 rounded-full mr-4'></span>
              <span className='inline-block  font-bold'>Paid</span>
            </div>
          </section>
          <section className='bg-white p-6 rounded-lg shadow-xs drop-shadow-md'></section>
        </Wrapper>
      </div>
    </Layout>
  );
}
