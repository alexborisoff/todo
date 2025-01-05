import { useEffect, useState } from 'react';
import { Todo } from '../data/local/models/Todo';
import { todoData } from '../data/remote/models/TodoResponseModel';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Switcher } from '../components/UI/Switcher/Switcher';
import { Navbar } from '../components/UI/Navbar/Navbar';

export const Todos = () => {
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
            <Navbar />
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
