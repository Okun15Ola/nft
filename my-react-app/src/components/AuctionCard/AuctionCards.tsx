import React from "react";

type Auction = {
    id: number;
    title: string;
    image: string;
    time?: string;
    bid?: string;
}

type Props = {
    auctions: Auction[];
}


const AuctionCards: React.FC<Props> = ({ auctions }) => {
  return (
    <div className="auction-cards flex-col flex md:flex-row">
      {auctions.map((auction) => (
        <div key={auction.id} className="auction-card flex-row border rounded-lg overflow-hidden shadow-md">
          <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover" />
          <div className="auction-card-content p-4">
            <h4 className="text-lg font-semibold mb-2">{auction.title}</h4>
            <div className="flex justify-between text-sm text-gray-600">
              <p>{auction.time || "Auction Time"}</p>
              <p>{auction.bid || "Current Bid"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionCards;
