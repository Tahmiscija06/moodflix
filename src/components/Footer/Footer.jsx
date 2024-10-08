import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="flex flex-col w-full gap-2 px-4 py-6 text-gray-400 border-t border-red-800 sm:flex-row shrink-0">
        <p className="text-xs ">2024 Filmovi, All rights reserved</p>
    <nav className="flex gap-4 text-xs sm:ml-auto sm:gap-6">
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/privacy">Privacy</Link>
    </nav>
    </footer>
  )
}

export default Footer