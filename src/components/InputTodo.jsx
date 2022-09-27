import React from 'react'

const inputArea = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
}

export const InputTodo = (props) => {
    const { newTodo, onChange, onClick, disabled } = props
    return (
        <div style={inputArea}>
          <input disabled={disabled} placeholder="TODOを入力" value={newTodo} onChange={onChange} />
          <button disabled={disabled} onClick={onClick} >追加</button>
        </div>
    )
}