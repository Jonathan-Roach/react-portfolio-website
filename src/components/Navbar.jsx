const Navbar = () => {
  return (
<nav className="bg-transparent border-b-2 border-solid border-yellow-500 ">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="px-4 text-white text-lg font-bold hover:text-yellow-500">JONATHAN ROACH</h1>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
            <div className="text-sm font-bold text-white transition-colors duration-300 hover:text-yellow-500">SKILLS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
            <div className="text-sm font-bold text-white transition-colors duration-300 hover:text-yellow-500">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
            <div className="text-sm font-bold text-white transition-colors duration-300 hover:text-yellow-500">PROJECTS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
            <div href="../assets/resume.pdf" className="text-sm font-bold text-white transition-colors duration-300 hover:text-yellow-500">RESUME</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar