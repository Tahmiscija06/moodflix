import { ArrowLeft, Film } from "lucide-react"
import { Link, useResolvedPath } from "react-router-dom"


const Navbar = () => {
  const path = useResolvedPath();
  return (
   <header className="flex items-center h-20 px-4 border-b border-red-800 lg:px-40">
    <Link to="/" className="flex items-center justify-center ">
    <Film className="w-8 h-8 text-red-600 " />
    <span className="ml-2 text-4xl font-bold text-red-600 ">FILMOVI</span>
    </Link>
    <nav className="ml-auto ">
      {path.pathname === "/" ? (
        <ul className="flex gap-4 ">
          <li>
            <Link to= "/"className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600">Features</Link>
          </li>
          <li>
            <Link to = "/"className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600">How It Works</Link>
          </li>
          <li>
            <Link to= "/"className="font-medium text-white transition duration-500 ease-in text-md hover:text-red-600">Newsletter</Link>
          </li>
        </ul>
      ) : (
        <Link to= "/">
          <button className="flex items-center text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Change Mood
          </button>
        </Link>
      ) }
    </nav>
   </header>
  )
}

export default Navbar