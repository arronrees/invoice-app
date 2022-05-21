import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Headline from '../components/headline/Headline';
import InvoiceGrid from '../components/invoices/InvoiceGrid';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Headline />
      <InvoiceGrid />
    </Layout>
  );
}
