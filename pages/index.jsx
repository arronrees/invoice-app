import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Headline from '../components/headline/Headline';
import InvoiceGrid from '../components/invoices/InvoiceGrid';
import Wrapper from '../components/layout/Wrapper';

export default function Home() {
  return (
    <Layout>
      <div className='lg:flex'>
        <Header />
        <Wrapper>
          <Headline />
          <InvoiceGrid />
        </Wrapper>
      </div>
    </Layout>
  );
}
