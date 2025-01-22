import { useEffect, useState } from 'react';
import { Todo } from '../data/local/models/Todo';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Menu } from '../components/UI/Menu/Menu';
import { useTranslation } from 'react-i18next';

interface TodosProps {
   theme: boolean;
   changeTheme: () => void;
}

export const Todos = ({ theme, changeTheme }: TodosProps) => {
   const [todos, setTodos] = useState<Todo[]>([]);

   useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')!);
      if (storedTodos) setTodos(storedTodos);
   }, []);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('theme', JSON.stringify(theme));
   }, [todos, theme]);

   const { t } = useTranslation();

   const createTodo = (newTodo: Todo) => {
      setTodos([...todos, newTodo]);
   };

   const deleteTodo = (todo: Todo) => {
      setTodos(todos.filter(t => t.id !== todo.id));
   };

   const completeTodo = (todo: Todo) => {
      setTodos(todos.map(task => (task.id === todo.id ? { ...task, status: !task.status } : task)));
   };

   return (
      <section className="rounded-2xl h-70vh w-85vw flex justify-center items-center flex-row border-blue-300 border-2 shadow-xl shadow-blue-300 ">
         <Menu changeThemeMode={changeTheme} />
         <div className="h-full w-55vw flex justify-start flex-col items-center">
            <h2 className="dark:text-white text-3xl text-blue-500 font-bold"> {t('todos')} </h2>
            <TodoForm create={createTodo} />
            <TodoList todos={todos} remove={deleteTodo} complete={completeTodo} />
         </div>
      </section>
   );
};
