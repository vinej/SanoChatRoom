import '../index.css';
import { observer } from "mobx-react-lite"
import { Todo } from "@ltrpc/router/model/todo";
import TodoActions from '../actions/todo_actions'
import { todoStore } from "../stores/todo_store";
import Languages from "../languages/languages";
import React from 'react';

const TodoView = observer(({ todo }: { todo: Todo }) => {
  return (<tr>
    <td>{todo.id}</td>
    <td style={{ width: '130px', textAlign: 'left' }}>{todo.description}</td>
    <td  className='my-hover'
        onClick={() => TodoActions.todoSetCompleted(todo, !todo.completed)}>{todo.completed ? Languages.GetLabel('yes') : Languages.GetLabel('no')}</td>
    <td className='my-hover'
        onClick={() => TodoActions.todoDelete(todo.id, todo.description)}>{Languages.GetLabel('todoDel')}</td>
  </tr>);
}
);

const TodosView = observer(() => {
  return (
    <div>
      <table>
        <thead >
          <tr>
            <th>Id</th>
            <th style={{ width: '130px' , textAlign: 'left' }}>{Languages.GetLabel('todoDescription')}</th>
            <th>{Languages.GetLabel('todoCompleted')}</th>
            <th>{Languages.GetLabel('todoDelete')}</th>
          </tr>
        </thead>
        <tbody>
          {todoStore.todos.map((todo: Todo) => <TodoView key={todo.id} todo={todo} />)}
        </tbody>
      </table>
      <div>
        <input type='text'
          value={todoStore.description}
          onChange={(event) => TodoActions.todoDescription(event.target.value)}
          onBlur={(event) => TodoActions.todoDescription(event.target.value)} />
      </div>
      <button onClick={() => { TodoActions.todoAdd() }}>{Languages.GetLabel('todoAdd')}</button>
    </div>
  )
}
);

export default TodosView;


