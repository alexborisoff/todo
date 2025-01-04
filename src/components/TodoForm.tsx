import { useState, MouseEvent, ChangeEvent } from 'react';
import { Todo } from '../data/local/models/Todo';
import { Input } from './UI/Input/Input';
import { Button } from './UI/Button/Button';

interface TodoFormProps {
   create: (todo: Todo) => void;
}

export const TodoForm = ({ create }: TodoFormProps) => {
   const [task, setTask] = useState<Todo>({
      id: 0,
      title: '',
      status: false,
      createdDate: '',
   });

   const date = new Date();
   const createdDate: string = `${date.getDate()}.${
      date.getUTCMonth() + 1
   }.${date.getUTCFullYear()}`;

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTask({ ...task, title: event.target.value });
   };

   const addNewTodo = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const newTodo = {
         ...task,
         id: Math.round(Math.random() * 1000),
         createdDate: createdDate,
      };
      if (task.title.trim() !== '') create(newTodo);
      setTask({ id: 0, title: '', status: false, createdDate: '' });
   };

   return (
      <form className="flex justify-start items-center">
         <Input
            type="text"
            value={task.title}
            onChange={handleInputChange}
            placeholder="type something..."
         />
         <Button onClick={addNewTodo}> Add task </Button>
      </form>
   );
};
