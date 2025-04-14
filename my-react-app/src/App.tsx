import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SideMenu from './components/SideMenu/SideMenu';


const App = () => {
  return (
    <div className="min-h-screen flex bg-[#1D1932] text-black transition-colors duration-300">
      {/* Side Menu */}
      <SideMenu />
      
      <div className="flex-1 p-4">
        {/* Header */}
        <Header />
        {/* You can add more components/content here */}
        <MainContent />
      </div>
      
    </div>
  );
};

export default App;
