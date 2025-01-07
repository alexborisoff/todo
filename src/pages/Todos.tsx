import { useEffect, useState } from 'react';
import { Todo } from '../data/local/models/Todo';
import { todoData } from '../data/remote/models/TodoResponseModel';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Menu } from '../components/UI/Menu/Menu';

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
         <Menu />
         <div className="h-full w-55vw flex justify-start flex-col items-center">
            <h2 className="text-3xl text-blue-500 font-bold"> TODOS </h2>
            <TodoForm create={createTodo} />
            <TodoList todos={todos} remove={deleteTodo} />
         </div>
      </section>
   );
};
