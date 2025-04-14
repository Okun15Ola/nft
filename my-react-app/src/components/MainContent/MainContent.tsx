import React from 'react'
import IMAGES from '../../constants/image'

const MainContent = () => {
  return (
    <div className='mt-6 md:px-4'>
      <div className='flex flex-row gap-10'>
      <div className="relative rounded-2xl overflow-hidden">
          <img src={IMAGES.discover} alt="Discover" className="w-full h-auto" />
          <div className="absolute inset-0 bg-[#6F4FF2] opacity-60 z-0"></div>
          
          <div className="absolute inset-0 flex flex-col text-white p-4 ">
            <h1 className="text-3xl">Discover, Collect, Sell</h1>
            <h1 className="text-3xl">and create your NFT</h1>
            <p className="mt-4 max-w-lg">Digital market place for crypto collecting and non-fungible token</p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 bg-[#6F4FF2] rounded-md">Explore</button>
              <button className="px-6 py-2 bg-[#DC3546] rounded-md">Create</button>
            </div>
          </div>
        </div>
        <div className='relative flex flex-row gap-4 items-center bg-[#1D1932] px-4'>
          <img src={IMAGES.nft} alt="NFT" className="w-60 h-36 rounded-2xl object-cover" />
          <div className='flex flex-col justify-center relative z-10'>
            <div className='flex items-center gap-4'>
              <div className="bg-white dark:bg-gray-800 rounded-full w-[50px] h-[50px] overflow-hidden" />
              <h3 className='font-medium text-white'>John Abraham</h3>
            </div>
            <h2 className='font-bold text-white mt-2'>Brigton LTQ</h2>
            <div className='flex flex-row gap-4'>
              <h3 className='text-white'>Auction time</h3>
              <h3 className='text-white'>Current bid: <span className='text-[#6F4FF2]'>0.09ETH</span></h3>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p>3h 1m 50s</p>
              <p>0.15ETH</p>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 bg-[#6F4FF2] rounded-md">Place a Bid</button>
              <button className="px-6 py-2 bg-[#DC3546] rounded-md"><Details></Details></button>
            </div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-10 rounded-2xl"></div> {/* Overlay */}
        </div>
      </div>
    </div>
  )
}

export default MainContent
