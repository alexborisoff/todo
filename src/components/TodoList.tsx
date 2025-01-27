import { TodoItem } from './TodoItem';
import { Todo } from '../data/local/models/Todo';
import usePagination from '../hooks/usePagination';
import { Pagination } from './Pagination';
import { useTranslation } from 'react-i18next';

interface TodoListProps {
   todos: Todo[];
   remove: (todo: Todo) => void;
   complete: (todo: Todo) => void;
}

export const TodoList = ({ todos, remove, complete }: TodoListProps) => {
   const { firstContentIndex, lastContentIndex } = usePagination({
      contentPerPage: 5,
      count: todos.length,
   });

   const { t } = useTranslation();

   return (
      <div className="w-full flex justify-start items-center gap-1.5 flex-col">
         <div className="w-full-85 flex flex-col gap-2">
            {todos.length ? (
               todos
                  .slice(firstContentIndex, lastContentIndex)
                  .map((todo, index) => (
                     <TodoItem key={todo.id} taskNumber={index + 1} todo={todo} remove={remove} complete={complete}/>
                  ))
            ) : (
               <h1 className="text-center text-5xl text-"> {t('done')} </h1>
            )}
         </div>
         <Pagination todos={todos} />
      </div>
   );
};
