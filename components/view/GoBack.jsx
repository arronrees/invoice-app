import Link from 'next/link';
import Chevron from '../../components/icons/Chevron';

export default function GoBack() {
  return (
    <Link href='/'>
      <a className='flex py-8 px-4 items-center w-max'>
        <Chevron className='rotate-90' />
        <span className='font-bold ml-4'>Go Back</span>
      </a>
    </Link>
  );
}
