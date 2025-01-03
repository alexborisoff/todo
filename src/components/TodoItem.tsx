import { Todo } from '../data/local/models/Todo';
import { Button } from './UI/Button/Button';

interface TodoItemProps {
   todo: Todo;
   remove: (todo: Todo) => Todo[];
}

export const TodoItem = ({ todo, remove }: TodoItemProps) => {
   return (
      <div className="py-1 px-2 flex flex-col justify-between border-solid border-blue-400 rounded border-2 ">
         <div className="flex flex-row justify-between items-center">
            <p className="font-bilbo text-xl">
               {todo.id} {todo.title}
            </p>
            <p>
               <input type="checkbox" />
               <Button onClick={() => remove(todo)}> Delete </Button>
            </p>
         </div>
         <p className="font-ubuntu text-end text-gray-500/90 text-sm">
            created: {todo.createdDate}
         </p>
      </div>
   );
};
