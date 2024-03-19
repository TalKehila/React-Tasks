import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter/Counter'
import LastClick from './lastClick/LastClick'
import ColorPicker from './colorPicker/ColorPicker'
import Hide from './hide/hide'

function App() {


  return (
    <>
    <div>
    {/* { <Counter/> } */}

    {/* { <LastClick/> } */}

    {/* <div className="exercise" data-number="3" data-title="<ColorPicker />">
            <ColorPicker/>
        </div> */}


    <Hide/>
    </div>
  </>
  )
}
export default App
