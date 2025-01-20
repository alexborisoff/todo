import { Todo } from '../data/local/models/Todo';
import { Button } from './UI/Button/Button';
import { useTranslation } from 'react-i18next';

interface TodoItemProps {
   todo: Todo;
   taskNumber: number;
   remove: (todo: Todo) => void;
   complete: (todo: Todo) => void;
}

export const TodoItem = ({ todo, taskNumber, remove, complete }: TodoItemProps) => {
   const { t } = useTranslation();

   return (
      <div className="h-10vh py-1 px-2 flex flex-col justify-between border-solid border-blue-400 rounded border-2 ">
         <div className="flex flex-row justify-between items-center ">
            <p
               className={`font-bilbo text-xl ${
                  todo.status ? 'transition-all duration-700 line-through text-gray-300' : ''
               }`}
            >
               {taskNumber} {todo.title}
            </p>
            <div className="flex gap-2 items-center">
               <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => complete(todo)}
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
