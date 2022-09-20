import React from "react";
import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/InCompleteTodos"

export const App = () => {
    // eslint-disable-next-line
  const [newTodo, setNewTodo] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['あああ', 'いいい'])
  const [completeTodos, setCompleteTodos] = useState(['uuu'])
  
  const onChangeNewTodo = (event) => setNewTodo(event.target.value)
  
  const onClickAdd = () => {
      if (newTodo === "") return
      const newTodos = [...incompleteTodos, newTodo]
      setIncompleteTodos(newTodos)
      setNewTodo('')
  }
  
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }
  
  const onClickComplete = (deleteTodo, index) => {
      onClickDelete(index)
      const newCompleteTodos = [...completeTodos, deleteTodo]
      setCompleteTodos(newCompleteTodos)
  }
  
  const onClickBack = (backTodo, index) => {
    const newCompleteTodos = [...incompleteTodos]
    newCompleteTodos.splice(index, 1)
    setCompleteTodos(newCompleteTodos)
    
    const newIncompleteTodos = [...incompleteTodos, backTodo]
    setIncompleteTodos(newIncompleteTodos)
  }
  
  return (
    <>
      <InputTodo newTodo={newTodo} onChange={onChangeNewTodo} onClick={onClickAdd}/>
      <IncompleteTodos 
        todos={incompleteTodos} 
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(todo, index)}>戻す</button>    
              </div>     
            )
          })}
        </ul>
      </div>
    </>
  );
};
