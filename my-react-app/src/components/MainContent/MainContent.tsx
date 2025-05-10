import React from 'react'
import IMAGES from '../../constants/image'
import AuctionCards from '../AuctionCard/AuctionCards'
import { auctions, auctions2 } from '../AuctionCard/AuctionData'

const MainContent = () => {
  return (
    <div className='mt-6 md:px-4 md:ml-24 lg:ml-28 h-screen overflow-y-auto'>
      <div className='flex flex-col items-center md:items-stretch md:flex-row gap-10'>

        {/* Discover Section */}
        <div className="flex justify-center w-full">
          <div className="relative w-[90%] md:w-full rounded-2xl overflow-hidden min-h-[300px] md:min-h-0">
            <img src={IMAGES.discover} alt="Discover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#6F4FF2] opacity-60 z-0"></div>

            <div className="absolute inset-0 flex flex-col text-white p-4 md:p-8 justify-center">
              <h1 className="text-3xl md:text-4xl font-bold">Discover, Collect, Sell</h1>
              <h1 className="text-3xl md:text-4xl font-bold">and create your NFT</h1>
              <p className="mt-4 max-w-lg text-sm md:text-base">
                Digital marketplace for crypto collecting and non-fungible tokens.
              </p>
              <div className="mt-6 flex flex-row justify-center md:justify-start gap-4">
                <button className="px-6 py-2 bg-[#6F4FF2] w-32 text-white font-bold rounded-md">Explore</button>
                <button className="px-6 py-2 bg-[#DC3546] w-32 text-white font-bold rounded-md">Create</button>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Section */}
        <div className="flex justify-center w-full">
          <div className='relative flex flex-col md:flex-row gap-4 items-center bg-[#1D1932] px-4 py-8 rounded-2xl w-[90%] md:w-full'>
            <img src={IMAGES.nft} alt="NFT" className="w-96 md:w-60 md:h-48 rounded-2xl object-cover" />
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
                <p className="text-white">3h 1m 50s</p>
                <p className="text-white">0.15ETH</p>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-[#6F4FF2] text-white font-bold rounded-md">Place a Bid</button>
                <button className="px-6 py-2 bg-[#DC3546] text-white font-bold rounded-md">Details</button>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-10 rounded-2xl"></div>
          </div>
        </div>

      </div>

      {/* Trending Bids Section */}
      <div className='mt-7 font-bold mb-6 px-4'>
        <div className='flex md:flex-row justify-between items-center'>
         <h2 className='text-white'>Trending Bids</h2>
         <div className='flex flex-row gap-2 text-white'>
          <button className='bg-[#6F4FF2] px-4  rounded-md'>All</button>
          <button>Art Work</button>
          <button>Book</button>
         </div>
        </div>
      </div>

      <div className='flex flex-col px-8 md:px-0 gap-2 md:flex-row justify-start'>
        <AuctionCards auctions={auctions} />
        <AuctionCards auctions={auctions2} />
        <AuctionCards auctions={auctions2} />
        <AuctionCards auctions={auctions} />

      </div>

    </div>
  )
}

export default MainContent
