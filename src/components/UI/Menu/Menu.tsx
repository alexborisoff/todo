import { Switcher } from '../Switcher/Switcher';
import { Navbar } from '../Navbar/Navbar';
import { currentYear } from '../../../utils/dates';

interface MenuProps {
   changeThemeMode: () => void;
}

export const Menu = ({ changeThemeMode }: MenuProps) => {
   return (
      <div className="h-full w-30vw py-5 flex flex-col justify-between items-center border-r-2">
         <Switcher changeThemeMode={() => changeThemeMode()} />
         <Navbar />
         <div className="text-center">
            <p className="font-bold"> All rights reserved </p>
            <p> ©{currentYear} </p>
         </div>
      </div>
   );
};
