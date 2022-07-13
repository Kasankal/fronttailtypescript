export default function Home() {
    return (
      <body className="max-w-7xl mx-auto text-neutral-90  bg-neutral-400 dark:bg-white">
        <nav className="mx-auto p-4 bg-amber-400">
          <div className="container mx-auto flex items-center justify-between">
            <a href="/" 
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
              <img src="logo.svg" alt="website logo" className="w-48 md:w-64 lg:w-72"/>
            </a>
            <button id="menu" className="
            lg:hidden
            focus:outline-none
            focus-visible:ring-4 
            ring-neutral-900
            rounded-sm 
            ring-offset-4 
            ring-offset-amber-400
            text-neutral-900
            hover:text-neutral-600
            transition-colors
            
            ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div role="menubar" className="
            flex
            flex-col
            gap-4
            absolute
            right-0
            left-0
            top-16
            bg-amber-400
            shadow-xl
            text-center
            text-lg
            p-6
            items-center
            lg:flex
            lg:flex-row
            lg:static
            lg:shadow-none
            lg:justify-between
            lg:w-full

            ">
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
              " href="/">Home </a>
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
              " href="/">Contact </a>
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
              " href="/">Login </a>
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
              " href="/">Sign Up </a>
            </div>
          </div>
        </nav>
      </body>
    )
  }

      


