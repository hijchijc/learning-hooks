import React from 'react'
import './index.css'

export default function Modal(props) {

  const {isShowModal, modalTitle, children} = props

  return (  
      <>
        {
          isShowModal 
          ? 
          (
            <div className='modal'>
              <div className='inner'>
                <div className='h-header'>{modalTitle}</div>
                <div className='content-wrapper'>
                  {children}
                </div>
              </div>
            </div>
          ) 
          :
          ''
        }
      </>
  )
}

