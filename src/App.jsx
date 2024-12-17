import { useState } from 'react'
import Navbar from './component/home/Home'
import Card from './component/service/Card'
// import Advantages from './component/list/Advantages'
import AdvantageList from './component/list/AdvantageList'


function App() {

  return (
    <>
    <Navbar/>
    <Card />
    <AdvantageList/>
    </>
  )
}

export default App
