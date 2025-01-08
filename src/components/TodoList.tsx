import { TodoItem } from './TodoItem';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { Todo } from '../data/local/models/Todo';
import usePagination from '../hooks/usePagination';

interface TodoListProps {
   todos: Todo[];
   remove: (todo: Todo) => void;
}

export const TodoList = ({ todos, remove }: TodoListProps) => {
   const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, totalPages } =
      usePagination({
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

         <div className="dark:text-white text-2xl text-blue-400">
            <p className="text-center">
               <span className="dark:text-gray-500 text-blue-600">{page}</span> / {totalPages}
            </p>
            <div className="flex gap-2 ">
               <div
                  className="transition-all duration-500 cursor-pointer hover:scale-110 hover:text-gray-500 active:text-black"
                  onClick={prevPage}
               >
                  <ArrowBigLeft />
               </div>

               <div
                  className="transition-all duration-500 cursor-pointer hover:scale-110 hover:text-gray-500 active:text-black"
                  onClick={nextPage}
               >
                  <ArrowBigRight />
               </div>
            </div>
         </div>
      </div>
   );
};
