import React from "react";
import { Paginator } from "./components/Paginator";
import { useGetTodosByIdQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = React.useState(1);

  const { data: todo = [], isLoading: isLoadingTodo = false } =
    useGetTodosByIdQuery(todoId);
  const { data: todos = [], isLoading: isLoadingTodos = false } =
    useGetTodosQuery();

  return (
    <>
      <h1>Todo RTK Query</h1>
      <hr />

      {isLoadingTodos && <p>Loading...</p>}

      <h2>Todo</h2>
      <pre>{JSON.stringify(todo)}</pre>

      {/* <h2>Todos List</h2>
      <ul>
        { todos.map( todo => ( 
          <li 
          key={ todo.id } 
          className={ todo.completed ? 'completed' : '' }
          >{ todo.title }</li> ) ) }
        </ul> */}

      <Paginator
        onNext={() => setTodoId(todoId + 1)}
        onPrevious={() => setTodoId(todoId - 1)}
        page={todoId}
      />
    </>
  );
};
