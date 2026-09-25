'use client'
import Image from 'next/image';
import logo from '@/app/assets/logo.png'
import Link from 'next/link';
import NavButton from './NavbarButtons/NavButton';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname()
  const links = <>
    <li><Link className={pathname === '/' ? 'text-[#C2F800]': ''}  href={'/'}>Workouts</Link></li>
    <li><Link className={pathname === '/my-plan' ? 'text-[#C2F800]': ''}  href={'/my-plan'}>My Plan</Link></li>
  </>
  return (
    <div className="navbar bg-base-100 shadow-lg p-5 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex justify-center'>
          <Image className="w-10 hidden lg:flex" src={logo} alt='Logo' width={30} height={1}
          ></Image>
          <Link href={'/'} className="btn btn-ghost text-3xl font-extrabold">FITLOG</Link>

        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
       <NavButton></NavButton>

      </div>
    </div>
  );
};

export default Navbar;