import React, {useRef} from 'react'
import './index.css'

export default function AddInput(props) {

  const {isInputShow, addItem} = props

  const inputRef = useRef()

  const submitValue = () => {
    const inputValue = inputRef.current.value.trim()

    if(inputValue.length==0) return

    addItem(inputValue)

    inputRef.current.value = ''
  }

  return (
    <>
      {
        isInputShow 
        ?
        (
          <div className='input-wrapper'>
            <input ref={inputRef} type='text' placeholder='请输入待办事件'>
            </input>
            <button className='btn' onClick={submitValue}>
              增加
            </button>
          </div>
        )
        :
        ''
      }
    </>
  )
}
