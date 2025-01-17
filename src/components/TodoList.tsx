import { TodoItem } from './TodoItem';
import { Todo } from '../data/local/models/Todo';
import usePagination from '../hooks/usePagination';
import { Pagination } from './Pagination';

interface TodoListProps {
   todos: Todo[];
   remove: (todo: Todo) => void;
}

export const TodoList = ({ todos, remove }: TodoListProps) => {
   // , nextPage, prevPage, page, totalPages
   const { firstContentIndex, lastContentIndex } = usePagination({
      contentPerPage: 5,
      count: todos.length,
   });

   return (
      <div className="w-full flex justify-start items-center gap-1.5 flex-col">
         <div className="w-full-85 flex flex-col gap-2">
            {todos.length ? (
               todos
                  .slice(firstContentIndex, lastContentIndex)
                  .map((todo, index) => (
                     <TodoItem key={todo.id} taskNumber={index + 1} todo={todo} remove={remove} />
                  ))
            ) : (
               <h1 className="font-bilbo text-center text-5xl text-"> it's all done </h1>
            )}
         </div>
         <Pagination todos={todos} />
      </div>
   );
};
