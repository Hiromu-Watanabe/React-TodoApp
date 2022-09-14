import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
    // eslint-disable-next-line
  const [incompleteTodos, setIncompleteTodos] = useState(['あああ', 'いいい'])
  const [completeTodos, setCompleteTodos] = useState(['uuu'])
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
          <ul>
            {incompleteTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>    
                </div>
              );   
            })}
          </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>戻す</button>       
                </div>
              )
            })}
          </div>
        </ul>
      </div>
    </>
  );
};
