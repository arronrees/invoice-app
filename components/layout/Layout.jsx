export default function Layout({ children, className }) {
  return (
    <div
      className={`bg-light-bg tracking-wide text-black min-h-screen ${className}`}
    >
      {children}
    </div>
  );
}
