import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <a className='relative w-20 h-full flex items-center justify-center overflow-hidden lg:h-20 lg:w-full'>
        <span className='block absolute top-0 h-full w-full bg-mid-purple rounded-r-3xl lg:rounded-tr-none'></span>
        <span className='block absolute bottom-0 h-1/2 w-full bg-light-purple rounded-tl-3xl rounded-br-3xl'></span>
        <span className='block absolute rounded-full bg-white w-8 h-8'></span>
      </a>
    </Link>
  );
}
