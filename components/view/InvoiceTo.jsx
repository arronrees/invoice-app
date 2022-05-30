export default function InvoiceTo() {
  return (
    <section className='pt-8 md:flex'>
      <div className='flex pb-4'>
        <div className='pr-8 sm:pr-32'>
          <p className='text-light-blue text-sm xs:text-base'>Invoice Date</p>
          <p className='font-bold xs:text-lg pb-4'>21 Aug 2022</p>
          <p className='text-light-blue text-sm xs:text-base'>Payment Due</p>
          <p className='font-bold xs:text-lg'>20 Sept 2022</p>
        </div>
        <div>
          <p className='text-light-blue text-sm xs:text-base'>Bill To</p>
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
  );
}
