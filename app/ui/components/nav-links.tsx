'use client'
import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
  BookOpenIcon,
  MapIcon
} from '@heroicons/react/24/outline';
  
  const links = [
    { name: 'Home', 
      href: '/',
      icon: BookOpenIcon },
    {
      name: 'Characters',
      href: '/ui/character',
      icon: UserGroupIcon,
    },
    { name: 'Houses', 
      href: '/ui/houses',
      icon: HomeIcon },

    { name: 'Locations', 
      href: '/ui/locations',
      icon: MapIcon },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 bg-black-50 p-3 text-sm font-medium 
                        hover:bg-black hover:bg-opacity-25 hover:text-brown-40 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  