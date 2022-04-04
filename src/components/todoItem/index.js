import React from 'react'
import './index.css'

export default function TodoItem(props) {

  const {data} = props

  return (
    <li className='todoItem'>
      <div className='checkbox'>
        <input type='checkbox' checked={data.completed}></input>
      </div>
      <span className='content'
        style={{'textDecoration':data.completed ? 'line-through' : 'none'}}
      >
        {data.content}
      </span>
      <div className='btnGroup'>
        <button className='btn1'>查看</button>
        <button className='btn2'>编辑</button>
        <button className='btn3'>移除</button>
      </div>
    </li>
  )
}
