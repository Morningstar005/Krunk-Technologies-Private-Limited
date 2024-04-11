import React from 'react'

const MessageInput = () => {
  return (
    <div className="flex flex-col justify-center px-2.5 py-1.5 w-full bg-gradient-to-r from-[#E3ECFF] to-[#FFFFFF]">
      <div className="flex gap-1.5 justify-center">
        <div className=" flex flex-auto gap-0 py-2.5 pr-2.5 pl-5 text-sm bg-white rounded-xl border border-indigo-100 border-solid text-neutral-400">
          <div className="flex-1">Type your message</div>
          <img
            loading="lazy"
            src="./assets/share.svg"
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <button className="flex justify-center items-center px-8 py-2 bg-blue-500 rounded-xl max-md:px-5">
          <img
            loading="lazy"
            src="./assets/type.svg"
            className="w-2 border-white border-solid aspect-[0.53] border-[3px] stroke-[3px] stroke-white"
          />
        </button>
      </div>
      <div className="flex gap-1.5 justify-center px-20 mt-2.5 text-sm max-md:px-5">
        <div className="text-zinc-400">Powered by </div>
        <div className="font-semibold text-gray-500">Krunk.ai</div>
        <img
          loading="lazy"
          srcSet="./assets/logo.svg"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
    </div>
  )
}

export default MessageInput