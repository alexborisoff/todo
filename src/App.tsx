import { AboutApp } from './pages/AboutApp';
import { Todos } from './pages/Todos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/about_us" element={<AboutApp />} />
         </Routes>
      </BrowserRouter>
   );
};
