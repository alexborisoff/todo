import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   disabled?: boolean | undefined;
   children: ReactNode;
   onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, disabled, onClick }: ButtonProps) => {
   return (
      <button
         className="w-32 h-8 py-1 px-2 bg-transparent text-blue-400 border-blue-400 border-2 rounded-md transition-colors duration-300 ease-in-out
            cursor-pointer hover:bg-blue-400 hover:text-white active:shadow-md"
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   );
};
