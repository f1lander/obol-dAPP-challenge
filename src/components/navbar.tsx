import React from 'react';
import Logo from './logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import ConnectButton from './connect-button';

function NavBar() {
  return (
    <>
      <header className="navbar_container">
        <div className="flex flex-col md:flex-row md:justify-center gap-x-2 items-center">
          <Logo />
        </div>

        <Link href="/" className="text-muted font-bold text-[28px] hidden md:block hover:animate-pulse cursor-pointer">
          Pokemon List
        </Link>

        <div className="flex gap-x-2 items-center">
          <ConnectButton />
          <Link href="/my-pokemons">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="user" />
              <AvatarFallback>me</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
      <div className="w-full text-center">
        <h1 className="text-muted px-3 font-bold text-[20px] block md:hidden text-center">Pokemon List</h1>
      </div>
    </>
  );
}

export default NavBar;
