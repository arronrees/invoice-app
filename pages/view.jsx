import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import GoBack from '../components/view/GoBack';
import Status from '../components/view/Status';
import InvoiceDetail from '../components/view/InvoiceDetail';
import InvoiceTop from '../components/view/InvoiceFrom';
import InvoiceMid from '../components/view/InvoiceTo';
import InvoiceNumbers from '../components/view/InvoiceNumbers';
import InvoiceBtns from '../components/view/InvoiceBtns';

export default function Home() {
  return (
    <Layout>
      <div className='lg:flex'>
        <Header />
        <Wrapper>
          <GoBack />
          <Status />
          <InvoiceDetail>
            <InvoiceTop />
            <InvoiceMid />
            <InvoiceNumbers />
            <InvoiceBtns className='mt-6 flex items-center flex-col sm:flex-row lg:hidden' />
          </InvoiceDetail>
        </Wrapper>
      </div>
    </Layout>
  );
}
