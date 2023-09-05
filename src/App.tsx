import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayCircleIcon, HomeIcon, MagnifyingGlassIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon, ArrowPathRoundedSquareIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="h-screen flex flex-col text-zinc-300 transition-all">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-zinc-950 p-1 overflow-y-hidden">
          <div id="items" className="flex flex-col">
            <div id="firstPart" className="m-1 flex flex-1 flex-col ">
              <div id="home" className="group p-3 flex flex-column items-center rounded bg-zinc-900">
                <HomeIcon width={30} height={30} className="mr-4  fill-zinc-300 group-hover:fill-zinc-50 transition-colors" />
                <strong className="text-zinc-300 group group-hover:text-zinc-50 transition-colors">Início</strong>
              </div>
              <div id="search" className="group p-3 flex flex-column items-center rounded bg-zinc-900 ">
                <MagnifyingGlassIcon width={30} height={30} className="mr-4 group fill-zinc-300 group-hover:fill-zinc-50 transition-colors" />
                <strong className="text-zinc-300 group-hover:text-zinc-50 transition-colors">Buscar</strong>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 mt-2 bg-zinc-900 rounded overflow-y-auto overflow-x-hidden">
          <p className="font-semibold text-3xl hover:text-zinc-200 pb-8">
            Good Night
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(12)].map((i, idx) => {
              return (
                <a href="" id="mix">
                  <div className="group flex flex-row bg-white/5 rounded overflow-hidden hover:bg-white/20 transition-colors items-center">
                    <div className="relative">
                      <img src="./imgs/luan.jpeg" className='rounded' width={80} height={80} alt="" />
                      <PlayCircleIcon title="Reproduzir" className="absolute right-1 bottom-1 w-10 text-green-500/0 transition-all group-hover:text-green-500 group-hover:bottom-3 " />
                    </div>
                    <strong className="text-lg pl-5">E aí - Ao VIvo</strong>
                  </div>
                </a>
              )
            })}
          </div>

          <div>
            <div className="pt-4 mb-3">
              <strong className="text-zinc-200 text-2xl ">Made for Victor Mazzotti</strong>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center overflow-hidden">
              {[...Array(5)].map((i, idx) => {
                return (
                  <a href="" id="mix">
                    <div className=" group flex flex-col bg-white/5 rounded overflow-hidden p-4 hover:bg-white/20 transition-colors">
                      <div className="relative">
                        <img src="./imgs/luan.jpeg" className='w-full rounded' alt="" />
                        <PlayCircleIcon title="Reproduzir" className="absolute right-1 bottom-1 w-20 text-green-500/0 transition-all group-hover:text-green-500 group-hover:bottom-3 " />
                      </div>

                      <strong className="">Daily Mix {idx + 1}</strong>
                      <p className="text-zinc-500">Luan Santana, Jorge & Mateus, Gustavo Mioto and more</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </main>
      </div>
      <footer className="flex bg-zinc-950 border-t border-zinc-800 pl-10 pt-1 pb-5 justify-between  ">
        <div id="f-first" className="">
          {/* <div className="bg-red-500 w-5 h-5 rounded-full"></div> */}
        </div>
        <div id="f-second" className="">
          <div id="midPlayer" className="flex flex-col items-center">
            <div id="players-first" className='flex items-center flex-row mb-2 gap-3'>
              <ArrowsRightLeftIcon className='w-6 h-6 fill-zinc-300 hover:fill-zinc-100 hover:stroke-white transition-colors' />
              <ArrowSmallLeftIcon className='w-6 h-6  fill-zinc-300 hover:fill-zinc-100 hover:stroke-white transition-colors' />
              <PlayCircleIcon className='w-12 h-12 fill-zinc-100' />
              <ArrowSmallRightIcon className='w-6 h-6 fill-zinc-300 hover:fill-zinc-100 hover:stroke-white transition-colors' />
              <ArrowPathRoundedSquareIcon className='w-6 h-6 fill-zinc-300 hover:fill-zinc-100 hover:stroke-white transition-colors' />
            </div>
            <div id="loadingBar" className="flex flex-row items-center">
              <div id="loadingTimeFirst" className="text-xs text-zinc-400">
                <p>02:17</p>
              </div>
              <div id="loadingBarMain" className='group p-1'>
                <div className="bg-zinc-200 rounded-full h-1 dark:bg-gray-700" style={{ width: '40rem' }}>
                  <div className="bg-zinc-200 group-hover:bg-green-800 h-1 rounded-full relative" style={{ width: '17rem' }}>
                    <div id="lineBtn" className='absolute w-3 h-3 bg-zinc-100 rounded-full hidden group-hover:block' style={{ top: "-0.25rem", left: '16.6rem' }}>
                    </div>
                  </div>
                </div>
              </div>
              <div id="loadingTimeFirst" className="text-xs text-zinc-400">
                <p>5:13</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-red-500 w-5 h-5 rounded-full"></div> */}
        </div>
        <div id="f-third" className="">

          {/* <div className="bg-red-500 w-5 h-5 rounded-full"></div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
