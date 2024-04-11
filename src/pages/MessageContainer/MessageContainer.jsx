import React from 'react'
import { MessageInput, Messages, Topbar } from '../../components'


const MessageContainer = () => {
  return (
    <div className='w-full  items-center justify-center '> 
    <Topbar/>
      <Messages/>
      <MessageInput/>
    </div>
  )
}

export default MessageContainer