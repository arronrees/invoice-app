import Link from 'next/link';
import Image from 'next/image';

export default function ProfileBtn() {
  return (
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
  );
}
