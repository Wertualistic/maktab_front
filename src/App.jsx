import React from 'react'
import Home from './components/Home/Home'
import Advantages from './components/Advantages/Advantages'
import Directions from './components/Direction/Directions'
import Events from './components/Eventss/Events'
import News from './components/Newss/News'
import Footer from './components/Footer/Footer'
// import { Header } from 'antd/es/layout/layout'

const App = () => {
  return (
    <div className='container'>
    <div className="all-css">
    <Home />
    <News />
    <Advantages />
    <Events />
    <Directions />
    <Footer />
    </div>
    </div>
  )
}

export default App