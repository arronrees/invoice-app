import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import GoBack from '../components/layout/GoBack';
import BillFrom from '../components/create/BillFrom';
import BillTo from '../components/create/BillTo';
import ItemList from '../components/create/ItemList';
import CreateBtns from '../components/create/CreateBtns';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <GoBack href='/' />
        <div className='bg-white p-6 rounded-lg shadow-xs drop-shadow-md mb-6'>
          <h1 className='font-semibold text-3xl mb-6'>New Invoice</h1>
          <BillFrom />
          <BillTo />
          <ItemList />
          <CreateBtns />
        </div>
      </Wrapper>
    </Layout>
  );
}
