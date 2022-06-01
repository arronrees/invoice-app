export default function Wrapper({ children, className }) {
  return (
    <section
      className={`mx-auto lg:px-8 lg:pt-16 w-full px-4 max-w-5xl ${className}`}
    >
      <div className='lg:pl-24'>{children}</div>
    </section>
  );
}
