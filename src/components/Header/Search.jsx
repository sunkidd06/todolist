import React from "react";
import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../../api/todoAPI";
export const Search = () => {
  // const todos = useSelector((state) => state.todos);
  const  {data:todos} =  useGetTodosQuery({status:"New"});
  // const [addTodo] = useAddTodoMutation();
  const handleSearch = (e) => {
    // getTodos({status:"New"});
  };
  console.log(todos);
  return (
  <></>
  );
};
