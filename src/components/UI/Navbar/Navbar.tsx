import { Link } from 'react-router-dom';

export const Navbar = () => {
   return (
      <div className="px-10 flex flex-col justify-center border-2 h-1/3">
         <Link to="/"> Todos </Link>
         <Link to="/about_us"> About </Link>
      </div>
   );
};
