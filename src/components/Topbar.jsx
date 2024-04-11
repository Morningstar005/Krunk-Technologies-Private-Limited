import React from 'react'

const topbar = () => {
  return (
    <div className='flex flex-row items-center m-2 rounded-t-[15px]  px-[1rem] md:px-[10rem] py-6 bg-[#EFF3FD] justify-between rounded-r-lg'>
      <div className='flex items-center gap-2'>
        <div className=' flex'>
          <img src="./assets/profile.svg"
          className='s' width={50} height={50} alt="" />
        </div>
        <div className='text-[]'>
          <h1 className='font-bold flex gap-2 text-[#4C82EF]'>Timpu <img src="./assets/emoji.svg" alt="" /></h1>
          <p className='text-[#4C82EF]'>Chat Assistant</p>
        </div>
        <div>
        </div>
      </div>
      <div>
        <p className='text-[#4C82EF] mt-8 flex gap-1 items-center'> <img src="./assets/online.svg" alt="" /> Online</p>
      </div>
    </div>
  )
}

export default topbar