import './Switcher.scss';
import day from '../../../assets/images/day_icon.svg';
import night from '../../../assets/images/night_icon.svg';

interface SwitcherProps {
   dark: () => void;
}

export const Switcher = ({ dark }: SwitcherProps) => {
   return (
      <div className="flex items-center gap-1">
         <img className="dark:invert h-7 w-7 rounded-full" src={day} alt="Sun icon" />
         <label className="switcher">
            <input type="checkbox" onChange={() => dark()} />
            <span className="slider"> </span>
         </label>
         <img className="dark:invert h-7 w-7" src={night} alt="Night icon" />
      </div>
   );
};
