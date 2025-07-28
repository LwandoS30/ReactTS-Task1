 import React, { useState } from 'react'
 import reactLogo from './assets/react.svg'
//  import viteLogo from './vite.svg'

import './App.css'
import { Text } from './component/Text/Text'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Section } from './components/Section/Section'
import { Sectiontwo } from './components/Sectiontwo/Sectiontwo'
import { Sectionthree } from './components/SectionThree/Sectionthree'
import { Sectionfour } from './components/Sectionfour/Sectionfour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id='app-container'>
          <div id='scrollable'>
            <Navbar />
            <Section />
            <Sectiontwo />
            <Sectionthree />
            <Sectionfour />
          </div>
          <Footer />
       </div>
      
    </>
  )
}

export default App
