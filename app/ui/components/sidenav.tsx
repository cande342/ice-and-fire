import NavLinks from './nav-links';
import Image from 'next/image';


export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 md:w-64"> 
          <div className="mb-2 flex items-end justify-start p-4 cursor-pointer hover:bg-gray-200 rounded-md md:hover:bg-transparent md:rounded-none">
            <Image src="/logo/logo.jpg" alt="Logo" width={300} height={300} className="rounded-full" priority={false}/>
          </div>
          <div className="flex-grow flex flex-row justify-around flex-direction:start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
          </div>
        </div>
      );
    }      