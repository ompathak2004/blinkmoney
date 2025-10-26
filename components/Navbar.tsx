'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // User details - you can later fetch this from your store/API
  const user = {
    name: 'OM PATHAK',
    initials: 'OP'
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center">
            <Image
              src="/BlinkMoneyLogo.png"
              alt="BlinkMoney Logo"
              width={150}
              height={40}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Link 
                href="/profile" 
                className="flex h-fit w-fit cursor-pointer items-center justify-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-t from-[#E4C8BB] to-[#FFF0E5] text-[#A47764] text-sm font-semibold">
                  {user.initials}
                </div>
                <p className="text-base font-bold text-[#171717] hidden sm:block">
                  {user.name}
                </p>
              </Link>
            )}

            <Link 
              href="/help-center" 
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Support"
            >
              <Image
                src="/support.svg"
                alt="Support"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
