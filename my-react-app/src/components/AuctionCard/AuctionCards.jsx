

const AuctionCards = ({ auctions }) => {
    return (
        <div className="auction-cards">
        {auctions.map((auction) => (
            <div key={auction.id} className="auction-card">
            <img src={auction.image} alt={auction.title} />
            <div className="auction-card-content">
            <h4>{auction.title}</h4>
            <div className ="flex flex-row justify-between">
                <p>Auction Time</p>
                <p>Current Bid</p>
            </div>
            </div>
            </div>
        ))}
        </div>
    );
}