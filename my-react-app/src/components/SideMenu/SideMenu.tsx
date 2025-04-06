
import IMAGES from "../../constants/image";

const SideMenu = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between w-16 sw-20 md:w-24 lg:w-28">
        <div className="flex flex-col items-center gap-6">
          <img src={IMAGES.logo}  />
          <img src={IMAGES.dashboard} alt="Dashboard" />
          <img src={IMAGES.bid} alt="Bid" />
          <img src={IMAGES.heart} alt="Heart" />
          <img src={IMAGES.collection} alt="Collection" />
          <img src={IMAGES.profile} alt="Profile" />
          <img src={IMAGES.setting} alt="Setting" />
        </div>
        
        <div className="flex justify-center">
          <img src={IMAGES.signOut} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default SideMenu;
