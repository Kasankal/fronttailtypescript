import { useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const stylez = {menub:'flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center text-lg p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full z-40'}
  let isExpanded 
  const menubar = useRef();
  const menubtn = useRef();

  const [expanded, setExpanded] = useState(false);
    function handleClick(){
      setExpanded(!expanded)
       console.log(isExpanded)
      console.log(isExpanded)
    }

    return (
      <div>
         <nav className="mx-auto p-4 bg-amber-400">
          <div className="container mx-auto flex items-center justify-between">
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
                <img
                  className="w-48 md:w-64 lg:w-72"
                  src= "logo.svg"
                  alt="website logo"
                />
              </a>


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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
        <header className='relative pt-16 md:24 lg:48 '>
          <div className='
          absolute
          inset-0
          bottom-8
          md:bottom-24
          xl:bottom-32
          -z-10
          bg-gradient-to-b
          from-amber-400
          to-amber-600
          '></div>
          <div className="container
          mx-auto
          grid 
          grid-rows-1
          place-items-end
          px-2
          
          ">
            <img
              src='couch.png'
              className='
              row-start-1
              row-end-2
              col-start-1
              col-end-2
              mx-auto
              '
             />
              

            <img
              src='app.svg'
              className='
              row-start-1
              row-end-2
              col-start-1
              col-end-2
              mx-auto
              w-40
              sm:w-52
              md:w-64
              lg:w-72
              '
 
            />
          </div>
        </header>
        <main className='
        grid
        grid-12
        sm:gap-16
        md:gap-24
        lg:gap-32
        px-8
        overflow-hidden
        '>
          <Link href='#'>
            <a className='
               py-2
               px-6
               mx-auto
               my-12
               flex
               gap-2

               bg-amber-400
               shadow-xl
               hover:shadow-none
               transition-shadow
               focus:outline-none
               focus-visible:ring-4 
               ring-amber-400
                rounded-md
                ring-offset-4 
               ring-offset-neutral-800
            '>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
             </svg>
              <span>Download the App</span>
            </a>
          </Link>
          <section aria-aria-labelledby='qualities' className="relative">
            <h2 id="qualities" className='sr-only'>Our qualities</h2>
            <div className="container
            mx-auto
            max-width-5xl
            flex
            gap-12
            flex-wrap
            items-start
            justify-centre
            md:justify-between
            ">
              <div className="grid
              gap-4
              justify-items-center
              text-center
              md:flex-1
              ">
                <div className='
                rounded-full
                border-8
                border-amber-400
                text-amber-400
                p-4
        
                '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className='text-white text-3xl font-bold'>Safe</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="grid
              gap-4
              justify-items-center
              text-center
              md:flex-1
              ">
                <div className='
                rounded-full
                border-8
                border-amber-400
                text-amber-400
                p-4
        
                '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className='text-white text-3xl font-bold'>Efficient</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <div className="grid
              gap-4
              justify-items-center
              text-center
              md:flex-1
              ">
                <div className='
                rounded-full
                border-8
                border-amber-400
                text-amber-400
                p-4
        
                '>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className='text-white text-3xl font-bold'>Proven</h3>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

          </section>
        </main>
      </div>
       


          


    )
  }

      





