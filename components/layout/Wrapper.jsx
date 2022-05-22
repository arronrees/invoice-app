export default function Wrapper({ children }) {
  return (
    <section className='mx-auto lg:mt-16 w-full lg:px-4 max-w-5xl'>
      {children}
    </section>
  );
}
