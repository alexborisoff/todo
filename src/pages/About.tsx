import { Menu } from '../components/UI/Menu/Menu';

interface AboutProps {
   changeTheme: () => void;
}

export const About = ({changeTheme}:AboutProps) => {
   return (
      <section className="h-70vh w-85vw flex justify-center items-center flex-row border-blue-300 border-2 shadow-xl shadow-blue-300">
         <Menu changeThemeMode={changeTheme} />
         <div className="h-full w-55vw flex justify-start flex-col items-center">
            <h2 className="text-3xl text-blue-500 font-bold"> About Us </h2>
         </div>
      </section>
   );
};
