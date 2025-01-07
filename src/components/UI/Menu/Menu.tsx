import { Switcher } from '../Switcher/Switcher';
import { Navbar } from '../Navbar/Navbar';

export const Menu = () => {
   const currentYear = new Date().getFullYear();
   return (
      <div className="h-full w-30vw py-5 flex flex-col justify-between items-center border-r-2">
         <Switcher />
         <Navbar />
         <div className="text-center">
            <p className="font-bold"> All rights reserved </p>
            <p> ©{currentYear} </p>
         </div>
      </div>
   );
};
