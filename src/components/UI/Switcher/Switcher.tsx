import './Switcher.scss';
import day from '../../../assets/images/day_icon.svg';
import night from '../../../assets/images/night_icon.svg';

export const Switcher = () => {
   return (
      <div className="flex items-center gap-1">
         <img className="h-7 w-7" src={day} alt="Sun icon" />
         <label className="switcher">
            <input type="checkbox" />
            <span className="slider"></span>
         </label>
         <img className="h-7 w-7" src={night} alt="Night icon" />
      </div>
   );
};
