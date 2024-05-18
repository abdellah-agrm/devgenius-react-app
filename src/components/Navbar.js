import ModeSwitcher from "./ModeSwitcher";

function Navbar(){
  return(
    <nav className="container p-6 mx-auto justify-between">
      <div className="flex items-center justify-between px-2">
          <a href="/">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">Dev<span className="text-gray-900 dark:text-white">Genius</span></p>
          </a>
        <div>
          <ModeSwitcher/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;