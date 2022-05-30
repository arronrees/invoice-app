import Logo from './Logo';
import ProfileBtn from './ProfileBtn';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  return (
    <header className='bg-dark-grey flex items-center justify-between h-20 lg:h-screen lg:flex-col lg:fixed'>
      <Logo />
      <ThemeToggler />
      <ProfileBtn />
    </header>
  );
}
