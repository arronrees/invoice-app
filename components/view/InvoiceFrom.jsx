export default function InvoiceFrom() {
  return (
    <section className='md:flex md:justify-between'>
      <div>
        <p className='font-bold xs:text-lg'>#XM9141</p>
        <p className='text-light-blue mb-8 xs:text-lg'>Graphic Design</p>
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
  );
}
