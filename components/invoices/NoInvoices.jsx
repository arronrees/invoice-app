import Image from 'next/image';

export default function NoInvoices() {
  return (
    <div className='p-8 text-center'>
      <figure className='h-48 mb-16'>
        <Image
          className='object-contain'
          src='/empty.svg'
          alt='#'
          layout='fill'
        />
      </figure>
      <h2 className='font-bold text-2xl mb-4'>There is nothing here</h2>
      <p className='text-mid-grey font-light'>
        Create an invoice by clicking the
        <br />
        <strong className='font-semibold'>New</strong> button and get started
      </p>
    </div>
  );
}
