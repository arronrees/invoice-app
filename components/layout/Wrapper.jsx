export default function Wrapper({ children }) {
  return (
    <section className='mx-auto lg:px-8 lg:mt-16 w-full px-4 max-w-5xl'>
      {children}
    </section>
  );
}
