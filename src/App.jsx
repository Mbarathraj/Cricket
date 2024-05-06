import { useState } from 'react'

import viteLogo from '/vite.svg'

import ScoreCard from './Components/ScoreCard'
import ScoreNote from './Components/ScoreNote'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeamDetailsModel from './Components/TeamDetailsModel'

import Tournament from './Components/Tournament'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/teamdetails' element={<TeamDetailsModel />}></Route>
          <Route path='/scorenote/:tossWin/:tossLose/:groundName' element={<ScoreNote />}></Route>
          <Route path='/newtournament' element={<Tournament />}></Route>
          <Route path='/oldtournament'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
