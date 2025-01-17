import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import usePagination from '../hooks/usePagination';
import { Todo } from '../data/local/models/Todo';

interface PaginationProps {
   todos: Todo[];
}

export const Pagination = ({ todos }: PaginationProps) => {
   const { nextPage, prevPage, page, totalPages } = usePagination({
      contentPerPage: 5,
      count: todos.length,
   });
   return (
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
   );
};
