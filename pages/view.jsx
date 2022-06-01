import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Wrapper from '../components/layout/Wrapper';
import GoBack from '../components/layout/GoBack';
import Status from '../components/view/Status';
import InvoiceDetail from '../components/view/InvoiceDetail';
import InvoiceTop from '../components/view/InvoiceFrom';
import InvoiceMid from '../components/view/InvoiceTo';
import InvoiceNumbers from '../components/view/InvoiceNumbers';
import InvoiceBtns from '../components/view/InvoiceBtns';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <GoBack href='/' />
        <Status />
        <InvoiceDetail>
          <InvoiceTop />
          <InvoiceMid />
          <InvoiceNumbers />
          <InvoiceBtns className='mt-6 flex items-center flex-col sm:flex-row lg:hidden' />
        </InvoiceDetail>
      </Wrapper>
    </Layout>
  );
}
