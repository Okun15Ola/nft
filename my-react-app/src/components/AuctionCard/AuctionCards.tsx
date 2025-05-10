import React from "react";


type Auction = {
    id: number;
    title: string;
    image: string;
    time?: string;
    bid?: string;
    auctionTime?: string;
    currentBid?: string;
}

type Props = {
    auctions: Auction[];
}


const AuctionCards: React.FC<Props> = ({ auctions }) => {
  return (
    <div className="w-[290px] rounded-lg p-4">
      {auctions.map((auction) => (
        <div key={auction.id} className="bg-gray-800 px-8 md:px-6 py-4 rounded-lg shadow-md shadow-purple-900/20 flex flex-col">
          <img src={auction.image} alt={auction.title} className="" />
          <div className="text-white">
            <h4 className="text-xl font-bold">{auction.title}</h4>
            <div className="flex flex-row justify-between">
              <p>Auction Time</p>
              <p>Current Bid</p>
            </div>
            <p className="flex justify-end text-[#111827]">{auction.bid}</p>
            <div className="flex flex-row justify-between">
              <p>{auction.auctionTime || "Auction Time"}</p>
              <p>{auction.currentBid || "Current Bid"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionCards;
