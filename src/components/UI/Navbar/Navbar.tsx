import { Link } from 'react-router-dom';

export const Navbar = () => {
   return (
      <div className="px-10 h-1/5 flex flex-col justify-center border-2 rounded-md text-xl">
         <Link className="hover:text-blue-400 transition-colors duration-300 ease-in-out" to="/">
            TODOS
         </Link>
         <Link className="hover:text-blue-400 transition-colors duration-300 " to="/about_us">
            ABOUT
         </Link>
      </div>
   );
};
