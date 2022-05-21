import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <a className='relative w-20 h-full flex items-center justify-center rounded-r-3xl overflow-hidden'>
        <span className='block absolute top-0 h-full w-full bg-mid-purple'></span>
        <span className='block absolute bottom-0 h-1/2 w-full bg-light-purple rounded-tl-3xl'></span>
        <span className='block absolute rounded-full bg-white w-8 h-8'></span>
      </a>
    </Link>
  );
}
