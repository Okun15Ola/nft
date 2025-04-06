import './App.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'

const App = () => {
  return (
    <div className='bg-[#1D1932] min-h-screen flex'>
      <SideMenu />
      
      <div className="bg-[#1D1932] flex-1 text-white p-4">
        <Header />

      </div>
    </div>
  )
}

export default App
