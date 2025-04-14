import IMAGES from "../../constants/image";


const SideMenu = () => {
  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div className="flex flex-col justify-between w-16 sw-20 md:w-24 lg:w-28 py-6 bg-[#1D1932]">
        
        {/* Logo at Top */}
        <div className="flex justify-center mb-6">
          <img src={IMAGES.logo} alt="Logo" />
        </div>

        {/* Desktop Vertical Icons */}
        <div className="hidden md:flex flex-col items-center gap-6">
          <img src={IMAGES.dashboard} alt="Dashboard" />
          <img src={IMAGES.bid} alt="Bid" />
          <img src={IMAGES.heart} alt="Heart" />
          <img src={IMAGES.collection} alt="Collection" />
          <img src={IMAGES.profile} alt="Profile" />
          <img src={IMAGES.setting} alt="Setting" />
        </div>

        {/* Sign Out Button (Desktop Only) */}
        <div className="hidden md:flex justify-center mt-6">
          <img src={IMAGES.signOut} alt="Sign-out" />
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1D1932] flex justify-around items-center py-3 z-50">
        <img src={IMAGES.dashboard} alt="Dashboard" className="w-6 h-6" />
        <img src={IMAGES.bid} alt="Bid" className="w-6 h-6" />
        <img src={IMAGES.heart} alt="Heart" className="w-6 h-6" />
        <img src={IMAGES.collection} alt="Collection" className="w-6 h-6" />
        <img src={IMAGES.profile} alt="Profile" className="w-6 h-6" />
        <img src={IMAGES.setting} alt="Setting" className="w-6 h-6" />
        <img src={IMAGES.signOut} alt="Sign-out" className="w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white">
      
      </div>
    </div>
  );
};

export default SideMenu;
