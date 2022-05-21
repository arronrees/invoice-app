import Image from 'next/image';
import Link from 'next/link';
import Moon from '../icons/Moon';

export default function Header() {
  return (
    <header className='bg-dark-grey flex items-center justify-between h-20'>
      <div className='relative w-20 h-full flex items-center justify-center rounded-r-3xl overflow-hidden'>
        <span className='block absolute top-0 h-full w-full bg-mid-purple'></span>
        <span className='block absolute bottom-0 h-1/2 w-full bg-light-purple rounded-tl-3xl'></span>
        <span className='block absolute rounded-full bg-white w-8 h-8'></span>
      </div>
      <button type='button' className='ml-auto py-5 px-7'>
        <Moon />
      </button>
      <Link href='/'>
        <a className='py-5 px-7 border-light-blue border-opacity-30 border-l-2'>
          <figure className='w-9 h-9 rounded-full'>
            <Image
              className='rounded-full'
              src='/img.jpg'
              alt='#'
              layout='fill'
            />
          </figure>
        </a>
      </Link>
    </header>
  );
}
