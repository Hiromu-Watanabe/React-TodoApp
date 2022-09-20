import React from "react";
import { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input placeholder="TODOを入力" value={newTodo} onChange={onChangeNewTodo} />
        <button onClick={onClickAdd} >追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(todo, index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>    
                </div>
              );   
            })}
          </ul>
      </div>
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
