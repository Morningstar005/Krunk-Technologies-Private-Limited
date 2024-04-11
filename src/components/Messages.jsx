import React from 'react'

const Messages = () => {
  return (
    <div className='flex flex-col justify-center px-1.5 md:h-[47rem]'>
      <div className='flex flex-col px-2.5 pt-12 pb-2.5'>
        <div className='flex flex-col text-zinc-800'>
          <div className='justify-center px-4 py-2.5 text-sm rounded-2xl bg-gradient-to-r from-[#E3ECFF] to-[#FFFFFF] w-[15rem] md:w-full'>
            Hi Sam! I am your personal shopping assistant , how can i help you
            today ?
          </div>
          <div className="justify-center px-2.5 mt-1.5 text-xs">4:45 PM</div>
        </div>
        <div className="flex flex-col mt-5 text-zinc-800">
          <div className="justify-center self-end px-4 py-2.5 max-w-full text-sm bg-lime-100 rounded-2xl border border-white border-solid w-[213px]">
            I am looking for a hand bag, with long strap .
          </div>
          <div className="justify-center px-2.5 mt-1.5 text-xs text-right">
            4:46 PM
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <div className="text-sm text-neutral-400">
            Popular tags for handbag
          </div>
          <div className="flex gap-1.5 mt-2.5">
            <div className="flex flex-1 gap-2.5 text-sm font-medium leading-5 text-blue-500">
              <div className="flex flex-col  whitespace-nowrap bg-sky-50 rounded-md border border-blue-500 border-solid justify-evenly ">
                <div className="justify-center px-2 rounded-md">
                  Clutch
                </div>
              </div>
              <div className="flex flex-col justify-center bg-sky-50 rounded-md border border-blue-500 border-solid">
                <div className="justify-center px-2.5 py-1.5 rounded-md">
                  Fabric lining
                </div>
              </div>
              <div className="flex flex-col justify-center bg-sky-50 rounded-md border border-blue-500 border-solid">
                <div className="justify-center px-2.5 py-1.5 rounded-md">
                  Baggit{" "}
                </div>
              </div>
              <div className="flex flex-col justify-center bg-sky-50 rounded-md border border-blue-500 border-solid">
                <div className="justify-center items-start px-2.5 py-1.5 rounded-md">
                  Multi Compart
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center content-start items-center my-auto">
              <img
                loading="lazy"
                src="./assets/glow-arrow.svg"
                className="w-6 aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center p-2.5 rounded-3xl bg-gradient-to-r from-[#E3ECFF] to-[#FFFFFF] w-[18rem]">
              <div className="flex gap-3 justify-center px-3 py-2.5 bg-white  rounded-xl">
                <img
                  loading="lazy"
                  srcSet="./assets/cart.svg"
                  className="shrink-0 self-start aspect-[1.41] w-[70px]"
                />
                <div className="flex flex-col px-1.5">
                  <div className="flex gap-1.5 justify-center pr-2 text-sm font-medium text-zinc-800">
                    <div className="flex-1 justify-center px-0.5">
                      Bags on <span className="font-semibold">Timpu</span>
                    </div>
                    <img
                      loading="lazy"
                      src="./assets/cart_pic.svg"
                      className="shrink-0 my-auto w-3.5 border border-yellow-400 border-solid aspect-[0.93] stroke-[1px] stroke-yellow-400"
                    />
                  </div>
                  <div className="flex gap-1.5 justify-between pr-4 mt-2 text-xs text-neutral-400">
                    <div>1123 products </div>
                    <img
                      loading="lazy"
                      src="./assets/arrow.svg"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2.5 text-sm text-zinc-800">
                Or set filter and help us choose the best bag for you.
              </div>
            </div>
            <div className="justify-center px-2.5 mt-1.5 text-xs text-zinc-800">
              4:48 PM
            </div>
          </div>
          <div className="flex flex-col mt-2.5 text-sm">
            <div className="flex gap-2.5 justify-between w-full">
              <div className="text-neutral-400">Select filters</div>
              <div className="flex gap-0.5 justify-center px-1 whitespace-nowrap leading-[154%] text-stone-500">
                <img
                  loading="lazy"
                  src="./assets/filter.svg"
                  className="shrink-0 w-5 aspect-square"
                />
                <div>Filter</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 content-start mt-2.5 whitespace-nowrap leading-[154%]">
              <div className="flex flex-col">
                <div className="flex gap-2.5">
                  <div className="flex gap-1.5 justify-center px-2.5 py-0.5 text-blue-500 rounded-md border border-blue-500 border-solid bg-slate-50">
                    <div className="flex gap-1.5 justify-center">
                      <p>Strap</p>
                      <div>-</div>
                      <p className="font-medium">Long</p>
                    </div>
                    <img
                      loading="lazy"
                      src="./assets/cross.svg"
                      className="shrink-0 my-auto w-2.5 aspect-[0.91]"
                    />

                  </div>
                  <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md bg-zinc-100 text-neutral-500">
                    <p>Colour</p>
                    <img
                      loading="lazy"
                      src="./assets/cross-dark.svg"
                      className="shrink-0 my-auto w-2.5 aspect-[0.91]"
                    />
                  </div>
                </div>
                <div className="flex gap-2.5 mt-2.5 text-neutral-500">
                  <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md">
                    <p>Brand</p>
                    <img
                      loading="lazy"
                      src="./assets/cross-dark.svg"
                      className="shrink-0 my-auto w-2.5 aspect-[0.91]"
                    />
                  </div>
                  <div className="flex gap-1.5 justify-center px-2.5 py-0.5 rounded-md">
                    <div>Material</div>
                    <img
                      loading="lazy"
                      src="./assets/cross-dark.svg"
                      className="shrink-0 my-auto w-2.5 aspect-[0.91]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 justify-center self-start px-2.5 py-0.5 rounded-md bg-zinc-100 text-neutral-500">
                <div>Size</div>
                <img
                  loading="lazy"
                  src="./assets/cross-dark.svg"
                  className="shrink-0 my-auto w-2.5 aspect-[0.91]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Messages