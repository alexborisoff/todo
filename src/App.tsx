import { About } from './pages/About';
import { Todos } from './pages/Todos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/about_us" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
};
