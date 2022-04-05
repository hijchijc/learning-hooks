import React from 'react'
import './index.css'

export default function TodoItem(props) {

  const {data, 
    openCheckModal,
    openEditModal, 
    completeItem,
    removeItem
  } = props

  return (
    <li className='todoItem'>
      <div className='checkbox'>
        <input type='checkbox' checked={data.completed} onChange={() => completeItem(data.id)}></input>
      </div>
      <span className='content'
        style={{'textDecoration':data.completed ? 'line-through' : 'none'}}
      >
        {data.content}
      </span>
      <div className='btnGroup'>
        <button className='btn1' onClick={() => openCheckModal(data.id)}>查看</button>
        <button className='btn2' onClick={() => openEditModal(data.id)}>编辑</button>
        <button className='btn3' onClick={() => removeItem(data.id)}>移除</button>
      </div>
    </li>
  )
}
