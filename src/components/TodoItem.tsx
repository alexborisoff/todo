import { useState } from 'react';
import { Todo } from '../data/local/models/Todo';
import { Button } from './UI/Button/Button';
import { useTranslation } from 'react-i18next';

interface TodoItemProps {
   todo: Todo;
   taskNumber: number;
   remove: (todo: Todo) => void;
}

export const TodoItem = ({ todo, taskNumber, remove }: TodoItemProps) => {
   const [isDone, setIsDone] = useState<boolean>(false);
   const { t } = useTranslation();

   return (
      <div className="h-10vh py-1 px-2 flex flex-col justify-between border-solid border-blue-400 rounded border-2 ">
         <div className="flex flex-row justify-between items-center ">
            <p className={`font-bilbo text-xl ${isDone ? 'line-through text-gray-300' : ''}`}>
               {taskNumber} {todo.title}
            </p>
            <div className="flex gap-2 items-center">
               <input
                  type="checkbox"
                  onChange={() => setIsDone(!isDone)}
                  className="h-5 w-5 border-blue-400 bg-white-600 cursor-pointer transition-colors duration-300 hover:bg-gray-500"
               />
               <Button onClick={() => alert('test')}> {t('edit')} </Button>
               <Button onClick={() => remove(todo)}> {t('delete')} </Button>
            </div>
         </div>
         <p className="font-ubuntu text-gray-500/90 text-end text-sm">
            created: {todo.createdDate}
         </p>
      </div>
   );
};
