import { Switcher } from '../Switcher/Switcher';
import { Navbar } from '../Navbar/Navbar';
import { currentYear } from '../../../utils/dates';
import { useTranslation } from 'react-i18next';

const languages = {
   en: { nativeName: 'En' },
   ru: { nativeName: 'Ru' },
};

interface MenuProps {
   changeThemeMode: () => void;
}

export const Menu = ({ changeThemeMode }: MenuProps) => {
   const { t, i18n } = useTranslation();
   return (
      <div className="h-full w-30vw py-5 flex flex-col justify-between items-center border-r-2">
         <div className="flex gap-2 text-xl">
            {Object.keys(languages).map(language => (
               <button
                  className="disabled:text-blue-400 transition-colors duration-300"
                  type="submit"
                  key={language}
                  onClick={() => i18n.changeLanguage(language)}
                  disabled={i18n.resolvedLanguage === language}
               >
                  {language}
               </button>
            ))}
         </div>
         <Switcher changeThemeMode={() => changeThemeMode()} />
         <Navbar />
         <div className="text-center">
            <p className="font-bold"> {t('rights')} </p>
            <p> ©{currentYear} </p>
         </div>
      </div>
   );
};
