import './App.css'
import SideMenu from './components/SideMenu/SideMenu'

const App = () => {
  return (
    <div className='bg-[#1D1932] opacity-0min-h-screen flex'>
      <SideMenu />
      
      <div className="bg-[#1D1932] flex-1 text-white p-4">
        {/* Your main page content or routes go here */}
        <h1>Welcome to the App!</h1>
      </div>
    </div>
  )
}

export default App
