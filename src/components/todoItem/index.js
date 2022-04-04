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
        <button className='btn1'></button>
        <button className='btn2'></button>
        <button className='btn3'></button>
      </div>
    </li>
  )
}
