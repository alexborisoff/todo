import { useEffect, useState } from 'react';
import { Todo } from '../data/local/models/Todo';
import { todoData } from '../data/remote/models/TodoResponseModel';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Switcher } from './UI/Switcher/Switcher';

export const MainSection = () => {
   const [todos, setTodos] = useState<Todo[]>(todoData);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);
   
   const createTodo = (newTodo: Todo) => {
      setTodos([...todos, newTodo]);
   };

   const deleteTodo = (todo: Todo) => {
      setTodos(todos.filter(t => t.id !== todo.id));
   };

   return (
      <section className="h-70vh w-85vw flex justify-center items-center flex-row border-blue-300 border-2 shadow-xl shadow-blue-300">
         <div className="h-full w-30vw py-5 flex flex-col justify-between items-center">
            <Switcher />
            <nav className="px-10 flex flex-col justify-center border-2 h-1/3">
               <li> Create Todo </li>
               <li> Check Date </li>
               <li> About </li>
            </nav>
            <div className="text-center">
               <p className="font-bold"> All rights reserved </p>
               <p> ©2025 </p>
            </div>
         </div>
         <div className="h-full w-55vw flex justify-start flex-col items-center">
            <h2 className="text-3xl text-blue-500 font-bold"> TODOS </h2>
            <TodoForm create={createTodo} />
            <TodoList todos={todos} remove={deleteTodo} />
         </div>
      </section>
   );
};
