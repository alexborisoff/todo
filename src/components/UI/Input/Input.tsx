import { ChangeEvent, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   type: string;
   placeholder?: string;
   value: string;
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
   return (
      <input
         className="w-96 outline-none p-2 m-1 h-8 rounded-lg border-blue-300 border-2 text-blue-500 transition-colors duration-700 font-bilbo focus:border-blue-700"
         type={type}
         onChange={onChange}
         value={value}
         placeholder={placeholder}
      />
   );
};
