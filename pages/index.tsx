import { useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const stylez = {menub:'flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center text-lg p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full'}
  let isExpanded 
  const menubar = useRef();
  const menubtn = useRef();

  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState("hidden");

  
  
      function handleClick(){
        isExpanded = JSON.parse(menubtn.current.ariaExpanded);
        setExpanded(!expanded)
        console.log(isExpanded)
        menubtn.current.ariaExpanded = !isExpanded;
        console.log(isExpanded)

      }
    return (
        <nav className="mx-auto p-4 bg-amber-400">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" >
              <a 
              className="focus:outline-none 
              focus-visible:ring-4 
              ring-neutral-900 
              rounded-sm 
              ring-offset-4 
              ring-offset-amber-400
              lg:absolute
              lg:left-1/2
              lg:-translate-x-1/2
              lg:top-9
              z-50
              hover:opacity-75
              transition-opacity
              " 

              aria-label="go to homepage">
                <Image
                  className="w-48 md:w-64 lg:w-72"
                  src="/logo.svg"
                  height={48}
                  width={180}
                  alt="website logo"
                />
              </a>
            </Link>

            <button ref={menubtn} id="menu" onClick={handleClick} className="
            lg:hidden
            focus:outline-none
            focus-visible:ring-4 
            ring-neutral-900
            rounded-sm 
            ring-offset-4 
            ring-offset-amber-400
            text-neutral-900
            hover:text-neutral-600
            transition-color
            
            "aria-expanded="false"
            aria-label="Open Menu">
              {
                
              }
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>


            </button>
            <div ref ={menubar} role="menubar" className={`${(expanded?'flex':'hidden')} ${stylez.menub}`}
            

            >
              <Link href="/">
                <a role="menuitem" className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none
                focus-visible:ring-4 
                ring-neutral-900
                rounded-sm 
                ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors
                " >Home </a>
              </Link>
              <Link href="/">
                <a role="menuitem" className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none
                focus-visible:ring-4 
                ring-neutral-900
                rounded-sm 
                ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors
                lg:mr-auto
                " >Contact </a>
              </Link>

              <Link href="/">
                <a role="menuitem" className="
                py-1
                px-6
                dark:text-neutral-900
                focus:outline-none
                focus-visible:ring-4 
                ring-neutral-900
                rounded-sm 
                ring-offset-4 
                ring-offset-amber-400
                hover:text-neutral-600
                transition-colors
                " >Login </a>
              </Link>

              <Link href="/">
                <a role="menuitem" className="
                py-2
                px-6
                bg-teal-900
                text-white
                shadow-xl
                hover:shadow-none
                transition-shadow
                focus:outline-none
                focus-visible:ring-4 
                ring-neutral-900
                rounded-md
                ring-offset-4 
                ring-offset-amber-400
                " >Sign Up </a>
              </Link>




            </div>
          </div>
        </nav>
    )
  }

      


