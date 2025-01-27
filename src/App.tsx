import { useState } from 'react';
import { About } from './pages/About';
import { Todos } from './pages/Todos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
   const [theme, setTheme] = useState<boolean>(false);

   const changeTheme = () => {
      setTheme(!theme);
      document.body.classList.toggle('dark');
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Todos theme={theme} changeTheme={changeTheme} />} />
            <Route path="/about_us" element={<About changeTheme={changeTheme} />} />
         </Routes>
      </BrowserRouter>
   );
};
